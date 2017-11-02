import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'ion-item-divider',
  styleUrls: {
    ios: 'item-divider.ios.scss',
    md: 'item-divider.md.scss',
    wp: 'item-divider.wp.scss'
  },
  host: {
    theme: 'item item-divider'
  }
})
export class ItemDivider {

  /**
   * @input {string} The color to use from your Sass `$colors` map.
   * Default options are: `"primary"`, `"secondary"`, `"danger"`, `"light"`, and `"dark"`.
   * For more information, see [Theming your App](/docs/theming/theming-your-app).
   */
  @Prop() color: string;

  /**
   * @input {string} The mode determines which platform styles to use.
   * Possible values are: `"ios"`, `"md"`, or `"wp"`.
   * For more information, see [Platform Styles](/docs/theming/platform-specific-styles).
   */
  @Prop() mode: 'ios' | 'md' | 'wp';

  protected render() {
    return [
      <slot name='start'></slot>,
      <div class='item-inner'>
        <div class='input-wrapper'>
          <slot></slot>
        </div>
        <slot name='end'></slot>
      </div>
    ];
  }
}
