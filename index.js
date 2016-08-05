'use strict';
const foregroundColor = '#eff0eb';
const backgroundColor = '#053d4e';
const cursorColor = '#f04e23';
const borderColor = '#222430';

exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor,
	borderColor: borderColor,
	cursorColor: cursorColor,
	css: `
		${config.css}
		.tab_active:before {
			border: 1px solid #f04e23;
		}
    .tabs_nav {
      background: #053d4e;
    } 
    .tab_text {
      color: #f04e23;
    }
	`
});
