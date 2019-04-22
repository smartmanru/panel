// @ts-check
import {Component, h} from '../../lib';

const STR_ATTR = {
  HELLO: `hello`,
  WORLD: `world`,
  BLEH: `💩🤒🤢☠️ -> 👻🎉💐🎊😱😍`,
};

/**
 * @typedef {Object} State
 * @property {string} str
 */

/** @extends {Component<State>} */
export class AttrsReflectionApp extends Component {
  static get attrsSchema() {
    return {
      'str-attr': {type: `string`, default: STR_ATTR.HELLO, enum: Object.values(STR_ATTR)},
      'bool-attr': `boolean`,
      'number-attr': `number`,
      'json-attr': `json`,
    };
  }

  get config() {
    return {
      template: scope => h(`div`, {class: {'attrs-reflection-app': true}}, [
        h(`p`, `str-attr: ${JSON.stringify(scope.$attr(`str-attr`))}`),
        h(`p`, `bool-attr: ${JSON.stringify(scope.$attr(`bool-attr`))}`),
        h(`p`, `number-attr: ${JSON.stringify(scope.$attr(`number-attr`))}`),
        h(`p`, `json-attr: ${JSON.stringify(scope.$attr(`json-attr`))}`),
      ]),
      defaultState: {
        str: this.attr(`str-attr`),
      },
    };
  }
}
