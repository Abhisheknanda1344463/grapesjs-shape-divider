export default (editor, opt = {}) => {
  const c = opt;
  const dc = editor.DomComponents;
  const type = 'shape-divider';
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view

  const tilt = `<svg preserveAspectRatio="none" viewBox="0 0 240 24">
    <path fill="#006cff" d="M240 24V0L0 24h240z"/>
  </svg>`
  const tilt_split = `<svg preserveAspectRatio="none" viewBox="0 0 240 24">
    <path fill-opacity=".3" d="M240 24V0L0 24h240z"/>
    <path d="M240 24V3.7L0 24h240z"/>
    <path fill-opacity=".3" d="M240 24V2L0 24h240z"/>
  </svg>`
  const triangle = `<svg class="gjs-shape-divider-inv" preserveAspectRatio="none" viewBox="0 0 1200 120">
    <path d="M1200 0L0 0 598.97 114.72 1200 0z">
    </path>
  </svg>`
  const triangle_inverted = `<svg preserveAspectRatio="none" viewBox="0 0 1200 120">
    <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z">
    </path>
  </svg>`
  const triangle_asymmetrical = `<svg class="gjs-shape-divider-inv" preserveAspectRatio="none" viewBox="0 0 1200 120">
    <path d="M1200 0L0 0 892.25 114.72 1200 0z">
    </path>
  </svg>`
  const book = `<svg preserveAspectRatio="none" viewBox="0 0 1200 120">
    <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z">
    </path>
  </svg>`
  const book_inverted = `<svg class="gjs-shape-divider-inv" preserveAspectRatio="none" viewBox="0 0 1200 120">
    <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" >
    </path>
  </svg>`
  const hills = `<svg class="gjs-shape-divider-inv" preserveAspectRatio="none" viewBox="0 0 240 24">
    <path d="M0 0v14.2a49 49 0 0110.3-2.7c17.5-2.8 24.4 6 43.5 11.1 26.8 7.2 39.3-19.2 63.4-19.2 22.6 0 40.4 27 65 18.6 14.7-5 19-14 39.9-17.6 7-1.3 13-1.8 17.9-1V0"/>
  </svg>`
  const hills_split = `<svg class="gjs-shape-divider-inv" preserveAspectRatio="none" viewBox="0 0 240 24">
    <path d="M0 0v14.2a49 49 0 0110.3-2.7c17.5-2.8 24.4 6 43.5 11.1 26.8 7.2 39.3-19.2 63.4-19.2 22.6 0 40.4 27 65 18.6 14.7-5 19-14 39.9-17.6 7-1.3 13-1.8 17.9-1V0"/>
    <path fill-opacity=".3" d="M0 0v18.1a49 49 0 0115.9-4.9c17-2.3 23.8 5.2 42.5 9.7C84.5 29 96.6 6.3 120 6.3c22.1 0 39.5 23.3 63.6 16 14.2-4.3 18.5-12 38.8-15.2A62.3 62.3 0 01240 6V0"/>
    <path fill-opacity=".3" d="M0 0v13.4c3.8-.8 7.6-1.4 10.3-1.8 17.3-2.8 24.4 6 47.2 11.1 32 7.2 35-18.1 60.7-18.1 24.1 0 45.2 23 67.4 14.6 13.2-5 19-13.7 39.4-17.4 5.5-1 10.4-1.5 15-1.3V0"/>
  </svg>`
  const low_hills = `<svg preserveAspectRatio="none" viewBox="0 0 240 24">
    <path d="M240 24V0c-51.8 0-69.9 13.2-94.7 15.6-24.7 2.4-43.9-1.2-63.8-1-19.1 0-31.2 3.6-51.3 6.5A126 126 0 010 22V24h240z"/>
  </svg>`
  const low_hills_split = `<svg preserveAspectRatio="none" viewBox="0 0 240 24">
    <path fill-opacity=".3" d="M240 24V0c-51.8 0-69.9 13.2-94.7 15.6-24.7 2.4-43.9-1.2-63.8-1-19.1 0-31.2 3.6-51.3 6.5A126 126 0 010 22V24h240z"/>
    <path fill-opacity=".3" d="M240 24V2.2c-51.8 0-69.9 12-94.7 14.2-24.7 2.1-43.9-1.1-63.8-1-19.1 0-31.2 3.3-51.3 6-14.6 1.8-25.9 1.2-30.2.8V24h240z"/>
    <path d="M240 24V3.7c-51.8 0-69.9 11.7-94.7 14-24.7 2.4-43.9-3.2-63.8-3.1-19.1 0-31.2 3.6-51.3 6.5a128 128 0 01-30.2 1V24h240z"/>
  </svg>`
  const high_hills = `<svg class="gjs-shape-divider-inv" preserveAspectRatio="none" viewBox="0 0 240 24">
    <path d="M240 0H0v23.5c4.3.5 15.5 1.2 30.2-.9 20.1-2.8 32.1-6.2 51.3-6.3 20 0 39 3.4 63.8 1 24.8-2.2 42.9-15 94.7-15"/>
  </svg>`
  const high_hills_split = `<svg class="gjs-shape-divider-inv" preserveAspectRatio="none" viewBox="0 0 240 24">
    <path fill-opacity=".3" d="M240 0H0v23.5c4.3.5 15.5 1.2 30.2-.9 20.1-2.8 32.1-6.2 51.3-6.3 20 0 39 3.4 63.8 1 24.8-2.2 42.9-15 94.7-15"/>
    <path fill-opacity=".3" d="M240 0H0v23.4c4.3.4 15.5 1.2 30.2-1 20.1-3.1 32.1-6.9 51.3-7 20 0 39 6 63.8 3.4C170 16.3 188.2 4 240 4"/>
    <path d="M0 23.3c4.3.5 15.5 1.3 30.2-1 20.1-3 32.1-6.8 51.3-7 20 0 39 3.8 63.8 1.2C170 14 188.2 0 240 0H0v23.3z"/>
  </svg>`
  const one_hills = `<svg preserveAspectRatio="none" viewBox="0 0 240 24">
    <path d="M0 13.2V24h240V13.3A541.2 541.2 0 00119.8 0C69.2 0 27.6 6.9 0 13.2z"/>
  </svg>`
  const one_hills_split = `<svg preserveAspectRatio="none" viewBox="0 0 240 24">
    <path fill-opacity=".3" d="M0 13.2V24h240V13.3A541.2 541.2 0 00119.8 0C69.2 0 27.6 6.9 0 13.2z"/>
    <path fill-opacity=".3" d="M0 18.9V24h240v-5A437.4 437.4 0 00119.8 2.7C64.4 2.7 21.6 12.6 0 19z"/>
    <path d="M119.8 5.1C47.8 5.1 0 24 0 24h240S191.8 5.1 119.8 5.1z"/>
  </svg>`
  const pit = `<svg class="gjs-shape-divider-inv" preserveAspectRatio="none" viewBox="0 0 240 24">
    <path d="M240 24V0H0v24S47.9 5.1 119.8 5.1C191.8 5.1 240 24 240 24z"/>
  </svg>`
  const pit_split = `<svg class="gjs-shape-divider-inv" preserveAspectRatio="none" viewBox="0 0 240 24">
    <path fill-opacity=".3" d="M240 24V0H0v24S47.9 5.1 119.8 5.1C191.8 5.1 240 24 240 24z"/>
    <path fill-opacity=".3" d="M119.8 2.7c55.6 0 98.5 10 120.2 16.2V0H0v18.9A434.6 434.6 0 01119.8 2.7z"/>
    <path d="M119.8.1A541 541 0 01240 13.4V0H0v13.3A538.9 538.9 0 01119.8.1z"/>
  </svg>`
  const waves = `<svg preserveAspectRatio="none" viewBox="0 0 240 24">
    <path d="M240 0c-4.6-.2-9.6.4-15 1.4-20.4 3.7-26.3 12.3-39.4 17.3C163.3 27 144 4 119.9 4c-25.6 0-30.5 25.3-62.5 18-22.8-5.1-29.8-13.8-47-11-2.8.4-6.6 1-10.4 1.8V24h240V0z"/>
  </svg>`
  const waves_split = `<svg preserveAspectRatio="none" viewBox="0 0 240 24">
    <path fill-opacity=".3" d="M240 0c-4.6-.2-9.6.4-15 1.4-20.4 3.7-26.3 12.3-39.4 17.3C163.3 27 144 4 119.9 4c-25.6 0-30.5 25.3-62.5 18-22.8-5.1-29.8-13.8-47-11-2.8.4-6.6 1-10.4 1.8V24h240V0z"/>
    <path fill-opacity=".3" d="M222 3.9c-20.8 3.7-25.1 12.6-39.8 17.6C157.6 29.9 141.5 3 118.9 3 94.7 3 80.6 29.3 53.8 22c-19-5-26-13.8-43.5-11-3.7.6-7.2 1.5-10.3 2.7V24h240V2.9c-5-.8-10.9-.3-18 1z"/>
    <path d="M240 5.7c-4.8-.6-10.6-.2-17.5.9-20.3 3.2-24.6 10.9-38.9 15.2-24 7.3-39.7-16-61.8-16-23.5 0-37.3 22.7-63.5 16.5C39.7 18 33 10.3 16 12.7c-6.1.9-11.5 2.6-15.9 6.7V24h240V5.7z"/>
  </svg>`
  const windy_waves = `<svg class="gjs-shape-divider-inv" preserveAspectRatio="none" viewBox="0 0 240 24">
    <path d="M0 0v18C21.5 7 49.6 2.2 64.8 6.4 82 11.2 75.4 25.2 91.7 23.9c14.2-1.1 25.8-12.3 40-12.3 10.4 0 7.8 6 18.8 6.9 11.5.8 21.6-5 37.2-9 19.9-5 42.1-5.3 52.3 0V0H0z"/>
  </svg>`


  dc.addType(type, {
    model: {
      defaults: {
        name: 'Shape divider',
        droppable: false,
        copyable: false,
        shape: 'none',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M2 2v18h18V2H2zm0-2h18a2 2 0 012 2v18a2 2 0 01-2 2H2a2 2 0 01-2-2V2C0 .9.9 0 2 0zM1 13L2 0h18l1 9-20 4z"></path></svg>`,
        content: `<svg preserveAspectRatio="none" viewBox="0 0 240 24">
                    <path fill="#006cff" d="M240 24V0L0 24h240z"/>
                  </svg>`,
        traits:[
          {
            name: 'shape',
            label: 'Shape',
            type: 'select',
            options: [
              { value : 'none', name: 'Select shape' },
              { value: `${tilt}`, name: 'Tilt' },
              { value: `${tilt_split}`, name: 'Tilt split' },
              { value: `${triangle}`, name: 'Triangle' },
              { value: `${triangle_inverted}`, name: 'Triangle inverted' },
              { value: `${triangle_asymmetrical}`, name: 'Triangle asymmetrical' },
              { value: `${book}`, name: 'Book' },
              { value: `${book_inverted}`, name: 'Book inverted' },
              { value: `${hills}`, name: 'Hills' },
              { value: `${hills_split}`, name: 'Hills split' },
              { value: `${high_hills_split}`, name: 'High hills split' },
              { value: `${one_hills}`, name: 'One hills' },
              { value: `${one_hills_split}`, name:'One hills split' },
              { value: `${pit}`, name: 'Pit' },
              { value: `${pit_split}`, name: 'Pit split' },
              { value: `${waves}`, name: 'Waves' },
              { value: `${waves_split}`, name: 'Waves split' },
              { value: `${windy_waves}`, name: 'Windy waves' }
            ],
            changeProp: 1
          },
          {
            name: 'flip-vert',
            label: 'Flip vertically',
            type: 'checkbox',
            changeProp: 1
          },
          {
            name: 'flip-horz',
            label: 'Flip horizontally',
            type: 'checkbox',
            changeProp: 1
          }
        ]
      },

      init() {
        this.on('change:shape', this.chgShape);
        this.on('change:flip-vert', this.flpVertical);
        this.on('change:flip-horz', this.flpHorizontal);
      },
      chgShape(){
        var newElem = $('<div />').append($(this.changed['shape']).append(this.view.el.innerText));
        this.view.model.set('content',newElem.html());
        this.view.el.innerHTML = newElem.html();
      },
      flpVertical(){
        const vert = this.get('flip-vert');
        if (vert){
          this.addClass('gjs-shape-divider--fl-v');
        }
        else{
          this.removeClass('gjs-shape-divider--fl-v');
        }
      },
      flpHorizontal(){
        const horz =  this.get('flip-horz');
        if (horz){
          this.addClass('gjs-shape-divider--fl-h');
        }
        else{
          this.removeClass('gjs-shape-divider--fl-h');
        }
      }
    },
  });
}
