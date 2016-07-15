const Page = {
  position: null,

  id: '',

  path: '/',

  getDOMElement() {
    return document.getElementById(this.id);
  },

  onEnterCompleted() {
    console.info(`${this.id} onEnterCompleted`);
  },

  onLeaveCompleted() {
    console.info(`${this.id} onLeaveCompleted`);
  },
};

const pages = [];

pages.push({
  ...Page,
  position: 0,
  id: 'home',
  path: '/',
});

pages.push({
  ...Page,
  position: 1,
  id: 'page-1',
  path: '/page-1/',
});

pages.push({
  ...Page,
  position: 2,
  id: 'page-2',
  path: '/page-2/',
});

pages.push({
  ...Page,
  position: 3,
  id: 'page-3',
  path: '/page-3/',
});

pages.push({
  ...Page,
  position: 4,
  id: 'a-propos-de-goood',
  path: '/a-propos-de-goood/',
});

export default pages;
