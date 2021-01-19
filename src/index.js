import grapesjs from 'grapesjs';
import loadComponents from './components';
import loadBlocks from './blocks';

export default grapesjs.plugins.add('grapesjs-shape-divider', (editor, opts = {}) => {
  const options = { ...{
  // let c = opts;
  //
  // let defaults = {
    shapedividerBlock: {},

    // Default style
    defaultStyle: true,

    // Section class prefix
    sectionClsPfx: 'gjs',

    // Shp-divder label
    labelShapeDvd: 'Shape Divider',

    // Shp-divder category label
    labelSectionCategory: 'Selection',

    //Label Svg
    labelSvg: 'svg',

    //labelType
    labelType: 'shape-divider',

    style: `
      .gjs-shape-divider{
        position:absolute;
        width:100%;
        height:100px;
        color:black;
        overflow:hidden;
      }
      .gjs-shape-divider > svg{
        height:100%;
        width:100%;
        transform:scaleY(-1);
      }
      .gjs-shape-divider--fl-v > svg{
        transform:scaleY(1);
      }
      .gjs-shape-divider--fl-h > svg{
        transform:scaleX(-1) scaleY(-1);
      }
      .gjs-shape-divider--fl-v-h > svg{
        transform:scaleY(1) scaleX(-1);
      }
      .gjs-shape-divider > svg > path{
        fill:currentColor;
      }
      .gjs-shape-divider-inv > path{
        transform:scale(-1, -1) translate(-100%, -100%);
      }
    `
    },  ...opts };
  // Add components
  loadComponents(editor, options);

  // Add components
  loadBlocks(editor, options);

});
