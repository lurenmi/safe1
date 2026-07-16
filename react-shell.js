(function mountReactShell(){
  const h=React.createElement;
  function AppShell(){
    return h(React.Fragment,null,
      h('div',{className:'ambient-orb ambient-orb-one','aria-hidden':'true'}),
      h('div',{className:'ambient-orb ambient-orb-two','aria-hidden':'true'}),
      h('header',{className:'topbar'},
        h('div',{className:'brand'},h('span',{className:'shield'},h('i',{className:'ti ti-shield-lock','aria-hidden':'true'})),h('div',null,h('strong',null,'重大活动低空安防全流程部署平台'),h('small',null,'MAJOR EVENT LOW-ALTITUDE SECURITY'))),
        h('div',{className:'topmeta'},h('span',{className:'meta-item'},h('i',{className:'ti ti-map-pin','aria-hidden':'true'}),'杭州市'),h('span',{className:'meta-item weather'},h('i',{className:'ti ti-cloud-sun','aria-hidden':'true'}),'25°C'),h('i'),h('span',null,'2024-09-20  14:30:25'),h('i'),h('button',{className:'top-icon icon-button','aria-label':'消息'},h('i',{className:'ti ti-mail','aria-hidden':'true'})),h('button',{className:'bell icon-button','aria-label':'通知'},h('i',{className:'ti ti-bell','aria-hidden':'true'}),h('b',null,'12')),h('span',{className:'user-chip'},h('i',{className:'ti ti-user-circle','aria-hidden':'true'}),'管理员',h('i',{className:'ti ti-chevron-down','aria-hidden':'true'})))
      ),
      h('aside',{className:'sidebar'},h('button',{className:'collapse','aria-label':'折叠导航'},h('span',{className:'collapse-icon'},'‹'),h('span',{className:'collapse-label'},'收起导航')),h('nav',{id:'sideNav'}),h('div',{className:'city'})),
      h('main',null,h('nav',{className:'steps',id:'steps'}),h('section',{id:'workspace'})),
      h('div',{id:'toast',className:'toast'}),
      h('div',{id:'modal',className:'modal','aria-hidden':'true'},
        h('div',{className:'modal-card'},h('button',{className:'modal-close','aria-label':'关闭'},'×'),h('h2',{id:'modalTitle'},'操作确认'),h('div',{id:'modalBody'}),h('div',{className:'modal-actions'},h('button',{className:'ghost modal-cancel'},'取消'),h('button',{className:'primary modal-confirm'},'确认')))
      )
    );
  }
  const root=ReactDOM.createRoot(document.getElementById('app-root'));
  ReactDOM.flushSync(()=>root.render(h(AppShell)));
})();
