import { store } from './store'

export const appendViewpart = ({ name, viewpart, position }) => {
  store.dispatch({
    type: APPEND_VIEWPART,
    name,
    viewpart: {
      ...viewpart,
      show: viewpart.hovering && viewpart.show ? false : viewpart.show
    },
    position
  })

  if (viewpart.hovering && viewpart.show) {
    openOverlay(name)
  }
}

export const removeViewpart = name => {
  store.dispatch({
    type: REMOVE_VIEWPART,
    name
  })
}

export const updateViewpart = (name, override) => {
  store.dispatch({
    type: UPDATE_VIEWPART,
    name,
    override
  })
}

export const APPEND_VIEWPART = 'APPEND_VIEWPART'
export const REMOVE_VIEWPART = 'REMOVE_VIEWPART'
export const UPDATE_VIEWPART = 'UPDATE_VIEWPART'

export const VIEWPART_POSITION = {
  HEADERBAR: 'headerbar',
  NAVBAR: 'navbar',
  ASIDEBAR: 'asidebar',
  FOOTERBAR: 'footerbar'
}

export const TOOL_POSITION = {
  FRONT_END: 'FRONT_END',
  FRONT: 'FRONT',
  CENTER: 'CENTER',
  REAR: 'REAR',
  REAR_END: 'REAR_END'
}

export const UPDATE_VIEWPORT_WIDTH = 'UPDATE_VIEWPORT_WIDTH'

export const updateLayout = wide => {
  store.dispatch({
    type: UPDATE_VIEWPORT_WIDTH,
    width: wide ? 'WIDE' : 'NARROW'
  })
}

/* overlay navigation */
var overlaySequence = 0

export const openOverlay = (name, options) => {
  var beforeState = history.state
  var beforeOverlay = beforeState ? beforeState.overlay : undefined
  var beforeSequence = !beforeOverlay || beforeOverlay.sequence === undefined ? overlaySequence : beforeOverlay.sequence
  var afterSequence = (overlaySequence = beforeSequence + 1)

  /* store의 layout의 내용을 변경한다. */
  if (options) {
    store.dispatch({
      type: UPDATE_VIEWPART,
      name,
      override: options
    })
  }

  /*
   * 현재 history.state를 확인하고, overlay의 이름이 같은
   * history에 추가하고 open 동작을 실행한다.
   */
  var afterState = Object.assign({}, beforeState || {}, { overlay: { name, sequence: afterSequence } })

  history.pushState(afterState, '', location.href)

  window.dispatchEvent(
    new CustomEvent('popstate', {
      detail: { state: afterState }
    })
  )
}

export const closeOverlay = name => {
  /*
   * 실제로 overlay를 close하는 작업은 window.onpopstate 핸들러에서 한다.
   */
  history.back()
}

export const toggleOverlay = (name, options) => {
  var { name: beforeOverlayName } = (history.state && history.state.overlay) || {}

  if (beforeOverlayName == name) {
    closeOverlay(name)
  } else {
    openOverlay(name, options)
  }
}

/*
 * popup handling
 *
 * popup은 overlay의 특별한 형태이다.
 * popup은 open될 때, viewpart를 append 하며, close 될 때 viewpart를 remove 한다.
 * - name: '$popup-${popupSequence}'
 * - position: VIEWPART_POSITION_HEADERBAR
 * - hovering: 'center' | 'next'
 */
var popupSequence = 0

export const openPopup = (template, options = {}) => {
  var name = `$popup-${popupSequence++}`

  appendViewpart({
    name,
    viewpart: {
      hovering: 'center',
      closable: true,
      ...options,
      backdrop: true,
      show: false,
      temporary: true /* auto remove */,
      template
    },
    position: VIEWPART_POSITION.HEADERBAR
  })

  openOverlay(name)

  var popup = {
    name,
    close: () => {
      /* 현재 overlay state를 확인해서, 자신인 경우에 history.back() 한다. */
      var state = history.state
      var overlay = (state || {}).overlay

      overlay && overlay.name == name && history.back()
    },
    closed: false,
    onclosed: null
  }

  document.addEventListener('overlay-closed', function listener(e) {
    if (name == e.detail) {
      popup.closed = true
      popup.onclosed && popup.onclosed()
      document.removeEventListener('overlay-closed', listener)
    }
  })

  return popup
}
