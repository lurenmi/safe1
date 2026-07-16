(function(){
  const KEY='lowAltitudeBackendV4';
  const seed={activities:[
    {id:'ACT-20261108-NX',name:'浙江南浔古镇水乡文化节低空安保任务',place:'湖州市南浔区南浔古镇旅游度假区',start:'2026-11-08T08:00',end:'2026-11-08T22:00',status:'已配置',center:[120.4312,30.8764],levels:[{name:'古镇核心禁飞区',radius:450,color:'#ef4d4d',height:120},{name:'水系街区重点管控区',radius:1200,color:'#f39a32',height:180},{name:'外围交通预警区',radius:2600,color:'#6576f5',height:300}],polygon:null,updatedAt:'2026-11-05 16:30'},
    {id:'ACT-20261018',name:'杭州奥体中心大型演唱会安保任务',place:'杭州奥体中心体育场（大莲花）',start:'2026-10-18T16:00',end:'2026-10-18T23:30',status:'已配置',center:[120.2397,30.2299],levels:[{name:'核心禁飞区',radius:500,color:'#ef4d4d',height:120},{name:'重点管控区',radius:1500,color:'#f39a32',height:200},{name:'外围预警区',radius:3000,color:'#6576f5',height:300}],polygon:null,updatedAt:'2026-10-15 14:20'},
    {id:'ACT-20260926',name:'钱塘江国际音乐节低空安保',place:'钱江世纪公园主会场',start:'2026-09-26T14:00',end:'2026-09-27T00:30',status:'待复核',center:[120.2476,30.2446],levels:[{name:'舞台核心禁飞区',radius:350,color:'#ef4d4d',height:100},{name:'观众区管控圈',radius:900,color:'#f39a32',height:160},{name:'外围预警圈',radius:2200,color:'#6576f5',height:260}],polygon:null,updatedAt:'2026-09-23 09:30'},
    {id:'ACT-20260512',name:'杭州国际会议中心重要会议保障',place:'杭州国际会议中心',start:'2026-05-12T07:00',end:'2026-05-12T20:00',status:'历史活动',center:[120.2205,30.2492],levels:[{name:'会议核心区',radius:400,color:'#ef4d4d',height:120},{name:'临时管制区',radius:1200,color:'#f39a32',height:180},{name:'监测预警区',radius:2500,color:'#6576f5',height:300}],polygon:null,updatedAt:'2026-05-13 08:45'}
  ],selectedId:'ACT-20261108-NX',assessments:{},config:{passScore:85,weights:{intersection:.28,angle:.16,height:.12,online:.18,blind:.16,overlap:.10}}};
  function read(){try{const stored=JSON.parse(localStorage.getItem(KEY));if(!stored){localStorage.setItem('nanxunDefaultActivityApplied','1');return structuredClone(seed)}let changed=false;seed.activities.forEach(activity=>{if(!stored.activities.some(item=>item.id===activity.id)){stored.activities.push(structuredClone(activity));changed=true}});if(!localStorage.getItem('nanxunDefaultActivityApplied')){stored.selectedId='ACT-20261108-NX';localStorage.setItem('nanxunDefaultActivityApplied','1');changed=true}if(changed)localStorage.setItem(KEY,JSON.stringify(stored));return stored}catch{return structuredClone(seed)}}
  function write(db){localStorage.setItem(KEY,JSON.stringify(db));return db}
  const api={
    listActivities(){return read().activities},
    selected(){const d=read();return d.activities.find(x=>x.id===d.selectedId)||null},
    select(id){const d=read();d.selectedId=id;write(d);return api.selected()},
    saveActivity(activity){const d=read();activity.updatedAt=new Date().toLocaleString('zh-CN',{hour12:false});const i=d.activities.findIndex(x=>x.id===activity.id);if(i>=0)d.activities[i]=activity;else d.activities.unshift(activity);d.selectedId=activity.id;write(d);return activity},
    create(data){return api.saveActivity({id:'ACT-'+Date.now(),status:'已配置',polygon:null,...data})},
    copy(id){const src=read().activities.find(x=>x.id===id);if(!src)return null;return api.create({...structuredClone(src),id:'ACT-'+Date.now(),name:src.name+'（副本）',status:'草稿'})},
    savePolygon(id,polygon){const a=api.listActivities().find(x=>x.id===id);if(!a)return;a.polygon=polygon;api.saveActivity(a)},
    hasProtection(){const a=api.selected();return !!(a&&((a.levels&&a.levels.length)||a.polygon?.features?.length))},
    config(){return read().config},
    saveAssessment(activityId,result){const d=read();d.assessments[activityId]=result;write(d)},
    assessment(activityId){return read().assessments[activityId]||null}
  };
  window.BusinessBackend=api;
})();
