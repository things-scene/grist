import { css } from 'lit-element'

export const dataGridBodyStyle = css`
  :host {
    display: grid;
    grid-template-columns: var(--grid-template-columns);
    grid-auto-rows: var(--grid-record-height, min-content);

    overflow: auto;
    outline: none;
  }

  :host > [odd] {
    background-color: var(--grid-record-odd-background-color);
  }

  :host > [focused] {
    border: var(--grid-record-focused-border);
  }

  :host > [selected-row] {
    background-color: var(--grid-record-selected-background-color);
  }

  :host > [focused-row] {
    background-color: var(--grid-record-focused-background-color);
    color: var(--grid-record-focused-color);
  }

  :host > [editing] {
    background-color: var(--grid-record-editor-background-color, transparent);
  }

  @media print {
    :host {
      grid-template-columns: var(--grid-template-print-columns);
    }
    :host > [focused] {
      border: none;
    }

    :host > [selected-row] {
      background-color: transparent;
    }

    :host > [focused-row] {
      background-color: transparent;
      color: initial;
    }

    :host > [editing] {
      background-color: transparent;
    }
  }
`
