export default (editor, config) => {
  const sm = editor.StyleManager;
  const csm = config.customStyleManager;

  sm.getSectors().reset(csm && csm.length ? csm : [{
      name: 'Style Options',
      open: false,
      buildProps: ['width',  'height', 'color'],
      properties: [{
        property: 'display',
        name: 'Visibility',
        type: 'radio',
        properties: [
          {value: 'Visible', className: ''},
          {value: 'Hidden', className: ''}
        ],
      },{
        name: 'Color',
        property: 'color'
      }]
  }]);
}
