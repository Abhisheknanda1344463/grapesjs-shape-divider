export default (editor, config) => {
  const sm = editor.StyleManager;
  const csm = config.customStyleManager;

  sm.getSectors().reset(csm && csm.length ? csm : [{
      name: 'Style Options',
      open: true,
      buildProps: ['display','width',  'height', 'color'],
      properties: [{
        name: 'Visibility',
        property: 'display',
        type: 'radio',
        list: [{
            name: 'Visibility',
            value: 'inherit'
        }, {
            name: 'Hidden',
            value: 'none'
        }],
      },{
        name: 'Color',
        property: 'color'
      }]
  }]);
}
