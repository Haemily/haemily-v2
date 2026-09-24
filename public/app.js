const icons = {
  home: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>',
  compass: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m15 9-2 4-4 2 2-4 4-2Z"/></svg>',
  plus: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
  people: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  calendar: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>',
  search: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
  x: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m18 6-12 12M6 6l12 12"/></svg>',
  shield: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z"/><path d="m9 12 2 2 4-4"/></svg>',
  bookmark: '<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg>',
  pushpin: '<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 17v5"/><path d="M5 17h14"/><path d="m6 12 2-2V3h8v7l2 2v2H6v-2Z"/></svg>',
  heart: '<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.7-7.5 1.1-1.1a5.5 5.5 0 0 0 0-7.8Z"/></svg>',
  message: '<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"/></svg>',
  arrow: '<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>',
  back: '<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',
  edit: '<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/></svg>',
  sparkles: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m12 3-1.2 3.3L7.5 7.5l3.3 1.2L12 12l1.2-3.3 3.3-1.2-3.3-1.2L12 3Z"/><path d="m5 14-.8 2.2L2 17l2.2.8L5 20l.8-2.2L8 17l-2.2-.8L5 14ZM19 13l-.8 2.2-2.2.8 2.2.8L19 19l.8-2.2L22 16l-2.2-.8L19 13Z"/></svg>',
  share: '<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4"/></svg>',
  flag: '<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 22V4M5 4h11l-1 5 1 5H5"/></svg>',
  lock: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  info: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
  more: '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="5" cy="12" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="19" cy="12" r="1.7"/></svg>',
  filter: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16l-6.5 7.2V19l-3 1v-7.8L4 5Z"/></svg>',
  chevronDown: '<svg class="icon control-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m7 10 5 5 5-5"/></svg>',
  settings: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/></svg>',
  check: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
  profile: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/></svg>',
  file: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 13h6M9 17h6"/></svg>',
  play: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4z"/></svg>',
  image: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 15-5-5L5 20"/></svg>',
  library: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v17H6.5A2.5 2.5 0 0 0 4 22V5.5ZM20 5.5A2.5 2.5 0 0 0 17.5 3H13v17h4.5A2.5 2.5 0 0 1 20 22V5.5Z"/></svg>',
  pin: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  video: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="13" height="14" rx="2"/><path d="m16 10 5-3v10l-5-3z"/></svg>',
  globe: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9S14.5 18.5 12 21c-2.5-2.5-3.5-5.5-3.5-9S9.5 5.5 12 3Z"/></svg>',
  chevronUp: '<svg class="icon control-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m7 14 5-5 5 5"/></svg>',
  bookmarkFilled: '<svg class="icon icon-sm" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M6 3h12v18l-6-4-6 4V3Z"/></svg>',
  external: '<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/></svg>',
  alert: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3 2 21h20L12 3Z"/><path d="M12 9v5M12 18h.01"/></svg>'
};

const topics = [
  ['Travel', 'Planning and experiences away from home', 'compass'],
  ['Sports and exercise', 'Staying active with confidence', 'heart'],
  ['Treatment and infusion', 'Routines, questions and practical support', 'shield'],
  ['Bleeds and everyday safety', 'Preparing for everyday situations', 'shield'],
  ['School and childcare', 'Working with educators and care teams', 'home'],
  ['Caregiver wellbeing', 'Emotional support and shared experience', 'heart'],
  ['Financial and practical support', 'Finding practical community support', 'people'],
  ['Understanding haemophilia', 'Clear information for families', 'info'],
  ['AMAs and community sharing', 'Questions, answers and community conversations', 'people']
];

const lifeStages = [
  ['Newly diagnosed', 'Start here with clear, supportive guidance'],
  ['Infants and toddlers', 'Early care and everyday routines'],
  ['Preschool and kindergarten', 'Supporting growing independence'],
  ['Primary school', 'Preparing your child and their school'],
  ['Secondary school and teenage years', 'Confidence, responsibility and wellbeing'],
  ['National Service', 'Questions and shared preparation']
];

const lifeStageSubtopics = {
  'Newly diagnosed':['Newly diagnosed','Understanding haemophilia','Emotional and caregiver wellbeing'],
  'Infants and toddlers':['Travel','Practical help','Emotional and caregiver wellbeing'],
  'Preschool and kindergarten':['School and childcare','Treatment and infusion support','Bleeds and everyday safety'],
  'Primary school':['School and childcare','Travel','Sports and healthy living'],
  'Secondary school and teenage years':['Travel','Sports and healthy living','Emotional and caregiver wellbeing'],
  'National Service':['Practical help','Financial and practical support','Emotional and caregiver wellbeing']
};

const lifeStageMenus = {
  'Newly diagnosed':[['Understanding haemophilia','Understanding haemophilia'],['What to expect after diagnosis','Newly diagnosed'],['Caregiver emotional support','Caregiver wellbeing']],
  'Infants and toddlers':[['Everyday safety','Bleeds and everyday safety'],['Treatment and infusion routines','Treatment and infusion'],['Travelling with a young child','Travel']],
  'Preschool and kindergarten':[['Starting childcare','School and childcare'],['Talking to teachers','School and childcare'],['Play and physical activity','School and childcare']],
  'Primary school':[['Preparing the school','School and childcare'],['Sports and physical activity','Sports and exercise'],['Travel and school trips','Travel']],
  'Secondary school and teenage years':[['Growing independence','Caregiver wellbeing'],['Sports and healthy living','Sports and exercise'],['Emotional wellbeing','Caregiver wellbeing']],
  'National Service':[['Preparing for National Service','Financial and practical support'],['Questions for the care team','Treatment and infusion'],['Community experiences','Caregiver wellbeing']]
};

const amaThreads = [
  {id:'care-team-ama',status:'Open',format:'AMA',title:'Ask a healthcare professional',guest:'Verified healthcare professional',verified:true,topic:'Treatment and infusion',stage:'All life stages',questions:18,answers:6,date:'Questions close 10 Oct'},
  {id:'school-support-ama',status:'Upcoming',format:'AMA',title:'Supporting children at school',guest:'HSS resource contributor',verified:true,topic:'School and childcare',stage:'Primary school',questions:0,answers:0,date:'Opens 20 Oct'},
  {id:'travel-ama',status:'Closed',format:'AMA',title:'Planning family travel',guest:'Community Health Contributor',verified:true,topic:'Travel',stage:'All life stages',questions:24,answers:21,date:'Closed 8 Sep'},
  {id:'caregiver-sharing',status:'Open',format:'Community sharing',title:'What helped your family adjust?',guest:'HSS community members',verified:false,topic:'Caregiver wellbeing',stage:'Newly diagnosed',questions:12,answers:29,date:'Active discussion'}
];

// content, events and resources are loaded from the API at boot time (see
// api()/loadBootstrap() near the end of this file) instead of being
// hardcoded here, so the app shows real, persisted data.
let content = [];

let events = [];

const groups = [
  {id:'hss-caregivers',name:'HSS Caregivers Community',kind:'Caregiver group',audience:'Adult caregivers',members:'4 of 5 pax',description:'General peer connection and community updates.'},
  {id:'primary-families',name:'Primary School Families',kind:'Life-stage group',audience:'Primary school',members:'3 of 5 pax',description:'School routines, activities and caregiver experiences.'},
  {id:'teen-caregivers',name:'Teen Years Caregivers',kind:'Life-stage group',audience:'Secondary school and teenage years',members:'5 of 5 pax',full:true,description:'Supporting confidence, responsibility and wellbeing.'}
];

const communityActivities = [
  {id:'east-coast-walk',day:'10',month:'Oct',date:'10 Oct 2026',type:'Open jio',audience:'All caregivers',title:'Weekend walk and kopi',description:'A casual morning walk for caregivers to meet and chat.',time:'9:00 AM',location:'Near Bedok MRT',organiser:'BrightKite',topic:'Caregiver wellbeing'},
  {id:'primary-coffee',day:'17',month:'Oct',date:'17 Oct 2026',type:'Meetup',audience:'Primary school',title:'Primary school caregivers coffee',description:'An informal catch-up about school routines and caregiver wellbeing.',time:'3:00 PM',location:'Jurong East',organiser:'BrightKite',topic:'School and childcare'}
];

let resources = [];
let myComments = [];

const state = { accessStep: 0, authed: false, route: 'home', exploreView: 'life', selectedCollection: null, selectedSubtopic:null, selectedSubtopicLabel:null, selectedItem:null, selectedAma:null, selectedEvent:null, selectedActivity:null, selectedResource:null, selectedHelpRequest:null, detailOrigin:'home', resourceOrigin:'explore', searchOrigin:'home', scrollPositions:{home:0,explore:0,search:0,collection:0,connect:0,events:0,homeCollection:0,resourcesLibrary:0}, search: '', sort: 'latest', homeTab:'all', homeSearch:'', homeVisible:4, homeTopicsVisited:false, homeRecommendationActive:false, homeFallbackShown:false, homeFallbackActive:false, homeCollection:null, homeCollectionQuery:'', homeCollectionFilter:'All', homeCollectionSort:'latest', resourceSearch:'', resourceSource:'All', resourceFormat:'All formats', resourceSort:'latest', resourceVisible:4, resourceEventFilter:null, resourceDiscussionContext:'', attendedEvents:new Set(), likedPosts:new Set(), commentedPosts:new Set(), authoredPosts:new Set(), seenUpdates:new Set(), homeQuickFilter:'All', homeDetailedFilters:new Set(), homeFilterDraft:new Set(), collectionQuickFilter:'All', collectionDetailedFilters:new Set(), collectionFilterDraft:new Set(), collectionSort:'latest', searchQuickFilter:'All', searchDetailedFilters:new Set(), searchFilterDraft:new Set(), searchSort:'latest', eventQuickFilter:'All', eventDetailedFilters:new Set(), eventFilterDraft:new Set(), eventSort:'upcoming', eventChosenDate:'2026-10-12', eventPlansExpanded:false, eventUpcomingExpanded:false, eventPastExpanded:false, eventReturnFlow:null, eventReturnDialog:false, eventScrollTarget:null, cancelledRegistrations:new Set(), filterPanelScope:null, saved: new Set(), savedResources:new Set(), recentSearches: ['school support', 'travelling'], createTitle:'', createBody:'', createTopics:new Set(), createStep: 1, profileTab: 'saved', profileSavedTab:'all', commentSort: 'helpful', modFilter: 'Open reports', eventView:'upcoming', eventType:'All', registered:new Set(), joinedActivities:new Set(['east-coast-walk']), connectView:'community', connectFilter:'All', meetupStep:1, meetupType:'Meetup', helpStep:1, helpStatus:'open', volunteerOffer:false, helpServiceAvailable:true, onboarding:{phone:'',otp:['','','','','',''],username:'SunlitKoi',avatar:'SK',relationship:'',ageRange:'',lifeStage:'',topics:new Set(),otherTopic:'',resendAvailableAt:0} };
state.createStages = new Set();
const app = document.querySelector('#app');
let overlayReturnSelector=null;
let resendTimer=null;
function memberName(){return state.onboarding.username.trim()||'SunlitKoi';}
function memberInitials(){return memberName().split(/\s+/).map(part=>part[0]).join('').slice(0,2).toUpperCase();}
function memberAvatar(){const legacy={'🌿':'SK','☀️':'RK','🌊':'HM'};return legacy[state.onboarding.avatar]||state.onboarding.avatar||memberInitials();}
// ---------- API client ----------
async function api(method, path, body) {
  const res = await fetch(`/api${path}`, {
    method,
    headers: body !== undefined ? { 'Content-Type': 'application/json' } : undefined,
    body: body !== undefined ? JSON.stringify(body) : undefined,
    credentials: 'same-origin'
  });
  let data = null;
  try { data = await res.json(); } catch (e) { /* no body */ }
  if (!res.ok) {
    const err = new Error((data && (data.message || data.error)) || 'Request failed');
    err.status = res.status; err.data = data;
    throw err;
  }
  return data;
}

function applyMember(member) {
  state.onboarding.username = member.username;
  state.onboarding.avatar = member.avatar;
  state.onboarding.relationship = member.relationship || '';
  state.onboarding.ageRange = member.ageRange || '';
  state.onboarding.lifeStage = member.lifeStage || '';
  state.onboarding.topics = new Set(member.topics || []);
  state.onboarding.otherTopic = member.otherTopic || '';
  state.memberOnboarded = member.onboarded;
}

async function loadBootstrap() {
  const data = await api('GET', '/bootstrap');
  content = data.posts;
  events = data.events;
  resources = data.resources;
  myComments = data.myComments || [];
  state.saved = new Set(data.saved);
  state.savedResources = new Set(data.savedResources);
  state.registered = new Set(data.registered);
  state.cancelledRegistrations = new Set(data.cancelled);
  state.attendedEvents = new Set(data.attended);
  state.likedPosts = new Set(data.liked);
  state.commentedPosts = new Set(data.commentedPosts);
  state.authoredPosts = new Set(data.authoredPosts);
}

function trapOverlayFocus(event){
  const overlay=document.querySelector('.filter-sheet, .external-modal.open .modal-card, .event-return-dialog');
  if(!overlay)return;
  if(event.key==='Escape'){event.preventDefault();overlay.closest('.filter-sheet')?closeFilterPanel():overlay.closest('.event-return-dialog')?confirmEventReturn(false):overlay.closest('#external-modal')?closeExternal():overlay.closest('#report-modal')?closeReport():closeHelpReport();return;}
  if(event.key!=='Tab')return;
  const focusable=[...overlay.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')];
  if(!focusable.length)return;
  const first=focusable[0],last=focusable[focusable.length-1];
  if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
  else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
}
function activateOverlay(selector,returnSelector){overlayReturnSelector=returnSelector;document.body.classList.add('overlay-open');document.addEventListener('keydown',trapOverlayFocus);requestAnimationFrame(()=>document.querySelector(selector)?.querySelector('button,input,select,textarea')?.focus());}
function markOverlayTrigger(trigger){document.querySelectorAll('[data-overlay-return]').forEach(element=>element.removeAttribute('data-overlay-return'));trigger?.setAttribute('data-overlay-return','true');}
function releaseOverlay(){const selector=overlayReturnSelector;overlayReturnSelector=null;document.body.classList.remove('overlay-open');document.removeEventListener('keydown',trapOverlayFocus);requestAnimationFrame(()=>selector&&document.querySelector(selector)?.focus());}

function go(route, detail = null) {
  const detailRoutes=['detail','eventDetail','amaDetail','meetupDetail','resourceDetail'];
  if(route==='resourcesLibrary'&&state.route==='explore')state.resourceEventFilter=null;
  if(state.route==='home'&&route!=='home')state.homeFallbackActive=false;
  if(['home','explore','search','collection','connect','events','homeCollection','resourcesLibrary'].includes(state.route)) state.scrollPositions[state.route]=window.scrollY;
  if(route==='detail'){
    state.selectedItem=detail;
    if(!detailRoutes.includes(state.route))state.detailOrigin=state.route;
  } else if(route==='eventDetail'){
    state.selectedEvent=detail;
    if(!detailRoutes.includes(state.route)||state.route==='resourceDetail')state.detailOrigin=state.route;
  } else if(route==='amaDetail'){
    state.selectedAma=detail;
    if(!detailRoutes.includes(state.route))state.detailOrigin=state.route;
  } else if(route==='meetupDetail'){
    state.selectedActivity=detail;
    if(!detailRoutes.includes(state.route))state.detailOrigin=state.route;
  } else if(route==='resourceDetail'){
    if(detail!==null){state.selectedResource=detail;if(state.route!=='resourceDetail')state.resourceOrigin=state.route;}
  } else if(route==='helpRequest'){
    state.selectedHelpRequest=detail;
  } else if(detail!==null) state.selectedCollection=detail;
  if(route==='events' && state.route!=='events') state.eventView='upcoming';
  const connectChildren=['helpCreate','helpRequest','helpVolunteer','helpPreferences'];
  const eventChildren=['eventDetail','meetupDetail','meetupCreate'];
  const restore=['home','explore'].includes(route)||(['search','collection','homeCollection','resourcesLibrary'].includes(route)&&['detail','amaDetail','eventDetail','meetupDetail','resourceDetail'].includes(state.route))||(route===state.searchOrigin&&state.route==='search')||(route==='connect'&&connectChildren.includes(state.route))||(route==='events'&&eventChildren.includes(state.route));
  state.route = route;
  if(detailRoutes.includes(route)&&detail) history.replaceState(null,'',`#/${route}/${encodeURIComponent(detail)}`);
  else if(!detailRoutes.includes(route)&&location.hash) history.replaceState(null,'',location.pathname+location.search);
  render();
  requestAnimationFrame(()=>window.scrollTo({top:restore?(state.scrollPositions[route]||0):0,behavior:'auto'}));
}

function openSearch(origin=state.route){state.searchOrigin=origin;go('search');}
function backFromSearch(){go(state.searchOrigin||'home');}
function backFromDetail(){go(state.detailOrigin||'home');}
function backFromResource(){go(state.resourceOrigin||'explore');}

function shell(contentHtml, active = state.route) {
  const links = [['home','Home','home'],['explore','Resources','library'],['events','Events','calendar']];
  const mobileLinks = [...links,['profile','Profile','profile']];
  const mobileStart=mobileLinks.slice(0,2),mobileEnd=mobileLinks.slice(2);
  const mobileLink=([r,l,i])=>`<button class="bottom-link ${active===r?'active':''}" ${active===r?'aria-current="page"':''} onclick="go('${r}')"><span>${icons[i]}</span><span>${l}</span></button>`;
  const mobileTitles={home:'Haemily',homeCollection:state.homeCollection||'Community posts',explore:'Resources',resourcesLibrary:'All resources',resourceDetail:'Resource details',detail:'Post details',create:'Create post',profile:'Profile',events:'Events',eventDetail:'Event details'};
  const mobileTitle=mobileTitles[state.route]||'Haemily';
  const createRoute=state.route==='create';
  const mobilePrimaryRoute=['home','explore','create','events','profile'].includes(state.route);
  const detailRoute=['detail','eventDetail','resourceDetail'].includes(state.route);
  const desktopHomeSearch=state.route==='home'?`<div class="desktop-topbar-search community-search">${icons.search}<label class="sr-only" for="desktop-community-search">Search community posts</label><input id="desktop-community-search" value="${accessValue(state.homeSearch)}" oninput="updateHomeSearch(this)" placeholder="Search community"/><button class="icon-button ${state.homeSearch?'':'hidden'}" aria-label="Clear search" onclick="state.homeSearch='';state.homeVisible=4;render()">${icons.x}</button></div>`:'';
  const detailBack=state.route==='resourceDetail'?'backFromResource()':'backFromDetail()';
  const detailAction=state.route==='eventDetail'
    ?`<button class="icon-button topbar-detail-control topbar-detail-action" aria-label="Share event" onclick="shareItem()">${icons.share}</button>`
    :state.route==='detail'
        ?`<button class="icon-button topbar-detail-control topbar-detail-action" aria-label="More actions" onclick="toast('More actions opened')">${icons.more}</button>`
        :'';
  return `<div class="app-shell">
    <header class="topbar"><div class="topbar-inner">
      ${detailRoute?`<button class="icon-button topbar-detail-control topbar-detail-back" aria-label="Back" onclick="${detailBack}">${icons.back}</button>`:''}
      ${createRoute?`<button class="composer-topbar-action composer-topbar-back" onclick="go('home')">${icons.back} Back</button>`:''}
      <button class="brand" onclick="go('home')" aria-label="Haemily home"><img class="brand-logo" src="./assets/haemily-logo.png" alt=""/></button>
      ${desktopHomeSearch}
      ${createRoute?`<strong class="mobile-app-title composer-app-title">Create a post</strong>`:mobilePrimaryRoute?`<div class="mobile-app-brand" aria-label="Haemily"><img src="./assets/haemily-logo.png" alt=""/><strong>Haemily</strong></div>`:`<strong class="mobile-app-title">${accessValue(mobileTitle)}</strong>`}
      <nav class="desktop-nav" aria-label="Primary navigation">${links.map(([r,l]) => `<button class="nav-link ${active===r?'active':''}" ${active===r?'aria-current="page"':''} onclick="go('${r}')">${l}</button>`).join('')}</nav>
      <div class="topbar-profile"><button class="avatar-button ${active==='profile'?'active':''}" aria-label="Open profile menu" aria-expanded="false" ${active==='profile'?'aria-current="page"':''} onclick="toggleProfile(this)">${accessValue(memberAvatar())}</button><div class="profile-menu" id="profile-menu"><div class="profile-head"><strong>${accessValue(memberName())}</strong><span>Community member</span></div><button class="menu-item" onclick="go('profile')">${icons.profile} Profile & activity</button><button class="menu-item" onclick="signOut()">${icons.lock} Sign out</button></div></div>
      ${detailAction}
    </div></header>
    ${contentHtml}
    <nav class="bottom-nav" aria-label="Primary navigation">${mobileStart.map(mobileLink).join('')}<button class="bottom-create ${state.route==='create'?'active':''}" aria-label="Create post" title="Create post" ${state.route==='create'?'aria-current="page"':''} onclick="go('create')">${icons.plus}</button>${mobileEnd.map(mobileLink).join('')}</nav>
  </div>`;
}

function contextualCreateAction(label,route){return `<button class="button button-primary desktop-create-action" onclick="go('${route}')">${icons.plus} ${label}</button>${route==='create'?'':`<button class="mobile-fab" aria-label="${label}" title="${label}" onclick="go('${route}')">${icons.plus}<span>${label}</span></button>`}`;}

function toggleProfile(button) {
  const menu = document.querySelector('#profile-menu');
  const open = menu.classList.toggle('open');
  button.setAttribute('aria-expanded', open);
}

function resetOnboardingAnswers(){state.onboarding={phone:'',otp:['','','','','',''],username:'SunlitKoi',avatar:'SK',relationship:'',ageRange:'',lifeStage:'',topics:new Set(),otherTopic:'',resendAvailableAt:0};}
async function signOut() {
  try { await api('POST', '/auth/logout'); } catch (e) { /* ignore */ }
  state.authed = false; state.accessStep = 0; state.route = 'home';
  resetOnboardingAnswers();
  content = []; events = []; resources = []; myComments = [];
  state.saved = new Set(); state.savedResources = new Set(); state.registered = new Set();
  state.cancelledRegistrations = new Set(); state.attendedEvents = new Set(); state.likedPosts = new Set();
  state.commentedPosts = new Set(); state.authoredPosts = new Set();
  render();
}
function accessValue(value){return String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));}
function accessProgress(){if(state.accessStep<3)return `<div class="access-setup-context">${icons.lock}<span><strong>Account setup</strong><small>Verify access and create your private profile</small></span></div>`;const complete=state.accessStep===6,current=complete?3:state.accessStep-2,label=complete?'Personalisation complete':`Question ${current} of 3`,context=complete?'Ready for Home':'Personalise your experience';return `<div class="access-progress-copy"><span>${label}</span><span>${context}</span></div><div class="progress" aria-label="${label}">${Array.from({length:3},(_,i)=>`<span class="progress-step ${complete||i<current?'done':''}"></span>`).join('')}</div>`;}
function accessReminder(copy='You can update your profile and preferences later.'){return `<p class="access-reminder">${icons.settings}<span>${copy}</span></p>`;}
function accessBack(step){return `<button type="button" class="button button-outline access-back" onclick="goAccessStep(${step})">${icons.back} Back</button>`;}
function onboardingArt(icon,label=''){return `<span class="onboarding-card-art" aria-hidden="true">${icons[icon]}${label?`<small>${label}</small>`:''}</span>`;}

function accessScreen() {
  const answer=state.onboarding;
  const relationshipOptions=[['caregiver','Caregiver of a person with haemophilia','people'],['person','Person with haemophilia','profile'],['both','Both','heart']];
  const ageOptions=[['0–2 years','0–2'],['3–6 years','3–6'],['7–12 years','7–12'],['13–17 years','13–17'],['18–39 years','18–39'],['40–59 years','40–59'],['60 years and above','60+']];
  const topicOptions=[['Understanding haemophilia','info'],['Treatment and infusion','shield'],['Bleeds and everyday safety','alert'],['School and childcare','home'],['Travel','compass'],['Sports and exercise','heart'],['Caregiver wellbeing','people'],['Financial and practical support','file'],['AMAs and community sharing','message']];
  const progress=accessProgress();
  let body='';
  if(state.accessStep===0) body=`${progress}<div class="access-step-label">Verify access</div><h1>Welcome to Haemily</h1><p class="lede">Haemily is a private HSS community for verified members to find support, guidance and shared experiences.</p><form onsubmit="submitPhone(event)"><div class="field"><label for="phone">Phone number</label><div class="input-row"><span class="prefix">+65</span><input class="input" id="phone" inputmode="numeric" autocomplete="tel" maxlength="8" placeholder="8123 4567" value="${accessValue(answer.phone)}" aria-describedby="phone-hint phone-error" oninput="state.onboarding.phone=this.value.replace(/\\D/g,'').slice(0,8)" /></div><p class="field-hint" id="phone-hint">Access is limited to phone numbers verified by HSS.</p><p class="error-message" id="phone-error" role="alert">Enter a valid eight-digit Singapore phone number.</p></div><div class="access-primary-stack"><button class="button button-outline" type="button" onclick="requestAccess()">My number is not recognised by HSS</button><button class="button button-primary" type="submit">Send verification code</button></div></form><div class="privacy-note">${icons.lock}<span>Your phone number is used only to verify access and is not shown to the community.</span></div>${accessReminder()}`;
  if(state.accessStep===1) body=`${progress}<div class="access-step-label">Verify your number</div><h1>Enter the verification code</h1><p class="lede">Enter the six-digit code sent to +65 •••• ${accessValue(answer.phone.slice(-4))}.</p><form onsubmit="submitOtp(event)"><div class="field"><label>Verification code</label><div class="otp-row">${answer.otp.map((digit,i)=>`<input class="otp-input" inputmode="numeric" autocomplete="one-time-code" maxlength="1" value="${accessValue(digit)}" aria-label="Digit ${i+1}" oninput="updateOtp(this,${i})" onkeydown="otpBack(event,this,${i})" onpaste="pasteOtp(event)" />`).join('')}</div><p class="field-hint">For this prototype, enter any complete six-digit code.</p><p class="error-message" id="otp-error" role="alert">Enter all six digits to continue.</p></div><div class="access-form-footer"><button type="button" class="button button-ghost resend-button" id="resend-code" onclick="resendCode()">Resend code</button><div class="access-actions">${accessBack(0)}<button class="button button-primary" type="submit">Verify and continue</button></div></div></form>${accessReminder()}`;
  if(state.accessStep===2) body=`${progress}<div class="access-step-label">Community profile</div><h1>How should the community know you?</h1><p class="lede">Choose a username and avatar. Other members will see only these profile details.</p><form onsubmit="submitProfile(event)"><div class="field"><label for="username">Username</label><input class="input" id="username" maxlength="24" value="${accessValue(answer.username)}" aria-describedby="username-hint username-error" oninput="state.onboarding.username=this.value" /><p class="field-hint" id="username-hint">Avoid names, birth years or details that could identify you.</p><p class="error-message" id="username-error" role="alert">Enter a username to continue.</p></div><fieldset class="access-fieldset"><legend>Choose an avatar</legend><div class="avatar-options">${[['SK','Sunlit Koi'],['RB','River Bird'],['HM','Hope Moon'],['CF','Calm Finch']].map(([value,label])=>`<button type="button" data-focus-key="avatar-${value}" class="avatar-option ${answer.avatar===value?'selected':''}" aria-label="${label} avatar" aria-pressed="${answer.avatar===value}" onclick="setAccessAvatar('${value}')">${value}</button>`).join('')}</div></fieldset><div class="privacy-note">${icons.shield}<span>Your phone number and registered identity will not be shown to other community members.</span></div><p class="access-next-phase">Next, answer three quick questions to personalise Haemily.</p><div class="access-actions">${accessBack(1)}<button class="button button-primary" type="submit">Continue</button></div></form>${accessReminder()}`;
  if(state.accessStep===3) body=`${progress}<div class="access-step-label">About you</div><h1>How are you part of the haemophilia community?</h1><p class="lede">Choose the option that best reflects you right now.</p><div class="onboarding-role-list" role="radiogroup" aria-label="Community relationship">${relationshipOptions.map(([value,label,icon])=>`<button type="button" data-focus-key="relationship-${value}" role="radio" aria-checked="${answer.relationship===value}" class="onboarding-choice-card ${answer.relationship===value?'selected':''}" onclick="chooseRelationship('${value}')">${onboardingArt(icon)}<strong>${label}</strong>${answer.relationship===value?'<span class="selection-indicator">✓ Selected</span>':''}</button>`).join('')}</div><p class="error-message" id="relationship-error" role="alert">Choose one option to continue.</p><div class="privacy-note quiet-note">${icons.lock}<span>This is used to personalise your experience and is not shown publicly.</span></div><div class="access-actions">${accessBack(2)}<button class="button button-primary" type="button" onclick="submitRelationship()">Continue</button></div>${accessReminder()}`;
  if(state.accessStep===4) body=`${progress}<div class="access-step-label">Age group</div><h1>Which age group is the person you care for in?</h1><p class="lede">Choose the closest range. This helps us recommend more relevant guidance.</p><div class="onboarding-age-grid" role="radiogroup" aria-label="Age group">${ageOptions.map(([value])=>`<button type="button" data-focus-key="age-${accessValue(value)}" role="radio" aria-checked="${answer.ageRange===value}" class="onboarding-choice-card age-choice ${answer.ageRange===value?'selected':''}" onclick="chooseAgeRange('${value}')"><span class="radio-mark" aria-hidden="true"></span><strong>${value}</strong></button>`).join('')}</div><p class="error-message" id="age-error" role="alert">Choose an age range to continue.</p><div class="access-actions">${accessBack(3)}<button class="button button-primary" type="button" onclick="submitAgeRange()">Continue</button></div>${accessReminder()}`;
  if(state.accessStep===5) body=`${progress}<div class="access-step-label">Your interests</div><h1>What would you like to find on Haemily?</h1><p class="lede">Choose as many topics as you like.</p><div class="onboarding-topic-grid" aria-label="Topics">${topicOptions.map(([value,icon])=>`<button type="button" data-focus-key="topic-${accessValue(value)}" class="onboarding-choice-card topic-choice ${answer.topics.has(value)?'selected':''}" aria-pressed="${answer.topics.has(value)}" onclick="toggleOnboardingTopic('${value.replace(/'/g,"\\'")}')">${onboardingArt(icon)}<strong>${value}</strong>${answer.topics.has(value)?'<span class="selection-indicator">✓ Selected</span>':''}</button>`).join('')}<button type="button" data-focus-key="topic-Other" class="onboarding-choice-card topic-choice other-choice ${answer.topics.has('Other')?'selected':''}" aria-pressed="${answer.topics.has('Other')}" onclick="toggleOnboardingTopic('Other')">${onboardingArt('plus')}<strong>Other</strong>${answer.topics.has('Other')?'<span class="selection-indicator">✓ Selected</span>':''}</button></div>${answer.topics.has('Other')?`<div class="field other-topic-field"><label for="other-topic">Other topic</label><input class="input" id="other-topic" maxlength="50" value="${accessValue(answer.otherTopic)}" placeholder="Type a topic" oninput="state.onboarding.otherTopic=this.value"/></div>`:''}<div class="access-actions">${accessBack(answer.relationship==='person'?3:4)}<button class="button button-primary" type="button" onclick="finishPersonalisation()">Continue</button></div><button class="button button-ghost access-skip" type="button" onclick="skipTopics()">Skip for now</button>${accessReminder('You can change these later in Preferences.')}`;
  if(state.accessStep===6) body=`${progress}<div class="completion-icon">${icons.check}</div><h1>You’re ready to explore Haemily.</h1><p class="lede">Your Home and Resources pages can now reflect the interests you chose.</p><button class="button button-primary completion-action" type="button" onclick="enterHome()">Go to Home</button>${accessReminder()}`;
  return `<main class="access-shell"><div class="access-brand"><div class="brand"><img class="brand-logo" src="./assets/haemily-logo.png" alt="Haemily"/></div></div><div class="access-main"><section class="access-card">${body}</section></div><footer class="access-footer">A supportive space for the HSS community</footer></main>`;
}

function goAccessStep(step){clearInterval(resendTimer);state.accessStep=step;render();requestAnimationFrame(()=>{window.scrollTo({top:0,behavior:'instant'});if(step===1){document.querySelector('.otp-input')?.focus();startResendCountdown();}});}
async function submitPhone(e){
  e.preventDefault();
  const input=document.querySelector('#phone');
  const digits=input.value.replace(/\D/g,'');
  const errorEl=document.querySelector('#phone-error');
  const ok=digits.length===8;
  errorEl.textContent='Enter a valid eight-digit Singapore phone number.';
  errorEl.classList.toggle('show',!ok);
  input.setAttribute('aria-invalid',String(!ok));
  if(!ok)return;
  const button=e.target.querySelector('button[type="submit"]');
  setButtonLoading(button,'Sending…');
  try{
    await api('POST','/auth/start',{phone:digits});
    state.onboarding.phone=digits;
    state.onboarding.resendAvailableAt=Date.now()+30000;
    goAccessStep(1);
  }catch(err){
    errorEl.textContent = err.status===404
      ? 'This number is not recognised by HSS. Try “My number is not recognised by HSS” below.'
      : 'Something went wrong. Please try again.';
    errorEl.classList.add('show');
    input.setAttribute('aria-invalid','true');
  }finally{
    if(button){button.disabled=false;button.removeAttribute('aria-busy');button.textContent=button.dataset.originalLabel||'Send verification code';}
  }
}
function updateOtp(el,index){const digit=el.value.replace(/\D/g,'').slice(-1);el.value=digit;state.onboarding.otp[index]=digit;if(digit)el.nextElementSibling?.focus();}
function otpBack(event,el,index){if(event.key==='Backspace'&&!el.value&&index>0)el.previousElementSibling?.focus();}
function pasteOtp(event){const digits=event.clipboardData?.getData('text').replace(/\D/g,'').slice(0,6);if(!digits)return;event.preventDefault();state.onboarding.otp=Array.from({length:6},(_,i)=>digits[i]||'');render();requestAnimationFrame(()=>{document.querySelectorAll('.otp-input')[Math.min(digits.length,6)-1]?.focus();startResendCountdown();});}
async function submitOtp(e){
  e.preventDefault();
  const ok=state.onboarding.otp.every(digit=>/^\d$/.test(digit));
  const errorEl=document.querySelector('#otp-error');
  errorEl.textContent='Enter all six digits to continue.';
  errorEl.classList.toggle('show',!ok);
  if(!ok)return;
  const button=e.target.querySelector('button[type="submit"]');
  setButtonLoading(button,'Verifying…');
  try{
    const {member}=await api('POST','/auth/verify',{phone:state.onboarding.phone,otp:state.onboarding.otp.join('')});
    applyMember(member);
    if(member.onboarded){
      state.authed=true;
      await loadBootstrap();
      state.route='home';
      render();
    } else {
      goAccessStep(2);
    }
  }catch(err){
    errorEl.textContent='Something went wrong. Please try again.';
    errorEl.classList.add('show');
  }finally{
    if(button){button.disabled=false;button.removeAttribute('aria-busy');button.textContent=button.dataset.originalLabel||'Verify and continue';}
  }
}
function startResendCountdown(){clearInterval(resendTimer);const update=()=>{const button=document.querySelector('#resend-code');if(!button){clearInterval(resendTimer);return;}const seconds=Math.max(0,Math.ceil((state.onboarding.resendAvailableAt-Date.now())/1000));button.disabled=seconds>0;button.textContent=seconds>0?`Resend code in ${seconds}s`:'Resend code';if(!seconds)clearInterval(resendTimer);};update();resendTimer=setInterval(update,1000);}
function resendCode(){if(Date.now()<state.onboarding.resendAvailableAt)return;state.onboarding.resendAvailableAt=Date.now()+30000;toast('A new verification code has been sent');startResendCountdown();}
function restoreChoiceFocus(key){requestAnimationFrame(()=>document.querySelector(`[data-focus-key="${CSS.escape(key)}"]`)?.focus());}
function setAccessAvatar(value){const input=document.querySelector('#username');if(input)state.onboarding.username=input.value;state.onboarding.avatar=value;render();restoreChoiceFocus(`avatar-${value}`);}
function submitProfile(e){e.preventDefault();const input=document.querySelector('#username');const username=input.value.trim();const ok=!!username;document.querySelector('#username-error').classList.toggle('show',!ok);input.setAttribute('aria-invalid',String(!ok));if(ok){state.onboarding.username=username;goAccessStep(3);}}
function chooseRelationship(value){state.onboarding.relationship=value;render();restoreChoiceFocus(`relationship-${value}`);}
function submitRelationship(){const ok=!!state.onboarding.relationship;document.querySelector('#relationship-error').classList.toggle('show',!ok);if(!ok)return;if(state.onboarding.relationship==='person'){state.onboarding.ageRange='';state.onboarding.lifeStage='';goAccessStep(5);}else goAccessStep(4);}
function chooseAgeRange(value){state.onboarding.ageRange=value;const mapped={'0–2 years':'Infants and toddlers','3–6 years':'Preschool and kindergarten','7–12 years':'Primary school','13–17 years':'Secondary school and teenage years'};state.onboarding.lifeStage=mapped[value]||'';render();restoreChoiceFocus(`age-${value}`);}
function submitAgeRange(){const ok=!!state.onboarding.ageRange;document.querySelector('#age-error').classList.toggle('show',!ok);if(ok)goAccessStep(5);}
function toggleOnboardingTopic(value){state.onboarding.topics.has(value)?state.onboarding.topics.delete(value):state.onboarding.topics.add(value);render();restoreChoiceFocus(`topic-${value}`);}
function finishPersonalisation(){const otherSelected=state.onboarding.topics.has('Other'),input=document.querySelector('#other-topic');if(otherSelected&&!state.onboarding.otherTopic.trim()){input?.setAttribute('aria-invalid','true');input?.focus();return;}completeOnboarding(false);}
function skipTopics(){state.onboarding.topics.clear();state.onboarding.otherTopic='';completeOnboarding(false);}
async function completeOnboarding(goDirectlyHome=false){
  const o=state.onboarding;
  try{
    const {member}=await api('PATCH','/auth/me',{username:o.username,avatar:o.avatar,relationship:o.relationship,ageRange:o.ageRange,lifeStage:o.lifeStage,topics:[...o.topics],otherTopic:o.otherTopic,onboarded:true});
    applyMember(member);
  }catch(err){ toast('Could not save your profile. Please try again.'); return; }
  await loadBootstrap();
  if(goDirectlyHome){state.authed=true;state.route='home';}else state.accessStep=6;
  render();
}
function enterHome(){state.authed=true;state.route='home';render();}
function requestAccess(){toast('Contact HSS to confirm the phone number registered with your membership.');}

function sourceBadge(text,verified=false){const label=verified?(/healthcare|guest/i.test(text)?'Healthcare professional':'HSS'):text;return `<span class="source-badge ${verified?'source-verified':'source-community'}">${verified?icons.shield.replace('class="icon"','class="icon icon-sm"'):icons.people.replace('class="icon"','class="icon icon-sm"')}${label}</span>`;}
function statusBadge(text,tone='info',live=false){return `<span class="status-badge status-${tone}">${live?'<span class="live-dot"></span>':''}${text}</span>`;}
function metadataLine(items,extra=''){const values=items.filter(Boolean);return values.length?`<div class="metadata-line ${extra}">${values.map(value=>`<span class="${String(value).startsWith('+')?'metadata-more':''}">${value}</span>`).join('')}</div>`:'';}
function contentSource(item){if(!item.verified)return '';return sourceBadge(item.verified==='Healthcare reviewed'?'Healthcare professional':'HSS',true);}
function contentMetadata(item){const classifications=[...new Set([...item.topics,...item.stages])];const more=Math.max(0,classifications.length-1);return metadataLine([item.format,classifications[0],more?`+${more} more`:null]);}
function activateCard(event,route,detail){if(event.key==='Enter'||event.key===' '){event.preventDefault();go(route,detail);}}
function moveTabFocus(event){if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;const tablist=event.target.closest('[role="tablist"]');const tabs=[...(tablist?.querySelectorAll('[role="tab"]')||[])];if(!tabs.length)return;event.preventDefault();const label=tablist.getAttribute('aria-label');let index=tabs.indexOf(document.activeElement);if(event.key==='Home')index=0;else if(event.key==='End')index=tabs.length-1;else index=(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;tabs[index].click();requestAnimationFrame(()=>{const nextList=[...document.querySelectorAll('[role="tablist"]')].find(list=>list.getAttribute('aria-label')===label);nextList?.querySelectorAll('[role="tab"]')[index]?.focus();});}

function contentCard(item, compact=false) {
  return `<article class="card content-card ${compact?'compact-content-card':''}">
    <div class="card-top"><div class="author"><span class="author-avatar ${item.org?'org':''}">${item.initials}</span><div><div class="author-name">${item.author}</div><div class="meta"><span>${item.date}</span></div></div></div></div>
    <div class="card-signals">${contentSource(item)}</div><h3><a class="content-card-link" href="#/detail/${encodeURIComponent(item.id)}" onclick="event.preventDefault();go('detail','${item.id}')">${item.title}</a></h3><p class="excerpt">${item.excerpt}</p>${contentMetadata(item)}
    <div class="card-footer"><div class="stats"><span class="stat">${icons.heart} ${item.reactions} helpful</span><span class="stat">${icons.message} ${item.comments} comments</span></div><button class="save-button ${state.saved.has(item.id)?'saved':''}" aria-label="${state.saved.has(item.id)?'Remove '+item.title+' from saved posts':'Save '+item.title}" onclick="toggleSave('${item.id}',this)">${state.saved.has(item.id)?icons.bookmarkFilled:icons.bookmark}<span>${state.saved.has(item.id)?'Saved':'Save'}</span></button></div>
  </article>`;
}

async function toggleSave(id, button){
  const wasSaved=state.saved.has(id);
  wasSaved?state.saved.delete(id):state.saved.add(id);
  const saved=state.saved.has(id);
  button.classList.toggle('saved',saved);
  button.setAttribute('aria-label',saved?'Remove from saved posts':'Save post');
  button.innerHTML=`${saved?icons.bookmarkFilled:icons.bookmark}<span>${saved?'Saved':'Save'}</span>`;
  toast(saved?'Saved for later':'Removed from saved');
  try{
    if(saved) await api('POST',`/saves/post/${encodeURIComponent(id)}`);
    else await api('DELETE',`/saves/post/${encodeURIComponent(id)}`);
  }catch(err){
    wasSaved?state.saved.add(id):state.saved.delete(id);
    const rolledBack=state.saved.has(id);
    button.classList.toggle('saved',rolledBack);
    button.setAttribute('aria-label',rolledBack?'Remove from saved posts':'Save post');
    button.innerHTML=`${rolledBack?icons.bookmarkFilled:icons.bookmark}<span>${rolledBack?'Saved':'Save'}</span>`;
    toast('Could not update saved posts');
  }
}

function searchEntry(origin){return `<button class="search-entry" onclick="openSearch('${origin}')">${icons.search}<span>Search resources, questions and experiences</span></button>`;}

function homeHelpNeededCard(){
  return `<article class="card for-you-card help-needed-card"><div class="for-you-card-body"><div class="for-you-card-head"><div class="for-you-category"><span class="for-you-icon community">${icons.people}</span><span>Help needed</span></div>${statusBadge('Non-emergency','info')}</div><h3 class="for-you-title">Help collecting permitted supplies</h3><div class="for-you-details"><div class="for-you-detail">${icons.compass}<span>Near Tampines MRT</span></div><div class="for-you-detail attention">${icons.calendar}<span>Needed today</span></div></div><p class="for-you-description">A community member needs help collecting permitted supplies near the MRT.</p><p class="for-you-context">${icons.compass}<span>Matches your selected area</span></p></div><footer class="for-you-actions"><button class="button button-primary" onclick="go('helpVolunteer')">Offer help</button><button class="button button-outline" onclick="go('helpVolunteer')">View request</button></footer></article>`;
}

function homeNextPlan(){
  const reference=new Date('22 Sep 2026 00:00:00').getTime(),windowEnd=reference+(7*86400000);
  return normalisedUpcomingActivities().filter(activity=>activity.committed&&activityDateValue(activity)>=reference&&activityDateValue(activity)<=windowEnd).sort((a,b)=>activityDateValue(a)-activityDateValue(b))[0]||null;
}

function homeNextEventCard(activity){
  if(!activity)return '';
  const route=activity.kind==='hss'?'eventDetail':'meetupDetail',source=activity.kind==='hss'?'HSS event':'Community activity';
  const action=activity.live?`<button class="button button-primary" onclick="toast('Online event room opened')">Join online</button><button class="button button-ghost" onclick="go('${route}','${activity.id}')">View event</button>`:`<button class="button button-outline" onclick="go('${route}','${activity.id}')">${activity.kind==='hss'?'View event':'View activity'}</button>`;
  const dateLabel=activity.id==='school-webinar'?'Sat, 26 Sep · 10:00 AM':activity.live?`Live now · ${activity.time}`:`${activity.date} · ${activity.time}`;
  return `<article class="card for-you-card next-event-card"><div class="for-you-card-body"><div class="for-you-card-head"><div class="for-you-category"><span>Your next event</span></div><div class="card-signals">${sourceBadge(source,activity.kind==='hss')}${statusBadge(activity.commitment,'complete')}</div></div><h3 class="for-you-title">${activity.title}</h3><div class="for-you-details"><div class="for-you-detail">${icons.calendar}<span>${dateLabel}</span></div><div class="for-you-detail">${icons.compass}<span>${activity.location}</span></div></div><p class="for-you-description event-description">${activity.description}</p></div><footer class="for-you-actions">${action}</footer></article>`;
}

const detailedFilterGroups = [
  ['Source',['Verified by HSS','Healthcare reviewed','Community experience']],
  ['Content type',['Guide or resource','Question','Discussion','Lived experience','Event','AMA','Meetup','Open jio']],
  ['Life stage',lifeStages.map(item=>item[0])],
  ['Topic',['Treatment and infusion','Bleeds and everyday safety','School and childcare','Travel','Sports and exercise','Caregiver wellbeing','Financial and practical support']]
];

function allFeedEntries(){
  const topicMap={
    'caregiver-checkin':['Caregiver wellbeing'],
    'school-webinar':['School and childcare'],
    'care-team-ama':['Treatment and infusion'],
    'family-workshop':['Caregiver wellbeing'],
    'travel-talk':['Travel']
  };
  const eventEntries=events.filter(item=>item.status!=='Past').map(item=>({kind:'event',item,source:'Verified by HSS',type:item.type==='AMA'?'AMA':'Event',stages:[item.stage],topics:topicMap[item.id]||[]}));
  const activityEntries=communityActivities.map(item=>({kind:'activity',item,source:'Community experience',type:item.type,stages:item.audience==='Primary school'?['Primary school']:[],topics:['Caregiver wellbeing']}));
  const contentEntries=content.map(item=>({kind:'content',item,source:item.verified||'Community experience',type:item.format==='Story'?'Lived experience':['Guide','Resource'].includes(item.format)?'Guide or resource':item.format,stages:item.stages,topics:item.topics.map(topic=>topic==='Treatment and infusion support'?'Treatment and infusion':topic==='Sports and healthy living'?'Sports and exercise':topic==='Emotional and caregiver wellbeing'?'Caregiver wellbeing':topic==='Practical help'?'Financial and practical support':topic)}));
  return [...contentEntries,...eventEntries,...activityEntries];
}

function filterFeedEntries(entries,quick,selected){
  let result=entries.filter(entry=>quick==='All'||(quick==='Verified'&&entry.kind==='content'&&!!entry.item.verified)||(quick==='Community'&&entry.kind==='content'&&!entry.item.verified&&['Story','Question','Discussion'].includes(entry.item.format))||(quick==='Events'&&entry.kind!=='content'));
  const groups=detailedFilterGroups.map(([name,options])=>[name,options.filter(option=>selected.has(option))]).filter(([,options])=>options.length);
  return result.filter(entry=>groups.every(([name,options])=>options.some(option=>name==='Source'?entry.source===option:name==='Content type'?entry.type===option:name==='Life stage'?entry.stages.includes(option):entry.topics.includes(option))));
}

function sortFeedEntries(entries,sort){
  if(sort==='top') return [...entries].sort((a,b)=>(b.item.reactions||0)-(a.item.reactions||0));
  if(sort==='discussed') return [...entries].sort((a,b)=>(b.item.comments||0)-(a.item.comments||0));
  return entries;
}

function renderFeedEntry(entry){return entry.kind==='content'?contentCard(entry.item):entry.kind==='event'?eventListCard(entry.item,{registered:state.registered.has(entry.item.id)}):communityActivityListCard(entry.item);}

function openFilterPanel(scope){state.filterPanelScope=scope;state[`${scope}FilterDraft`]=new Set(state[`${scope}DetailedFilters`]);render();activateOverlay('.filter-sheet',`[data-filter-trigger="${scope}"]`);}
function closeFilterPanel(){state.filterPanelScope=null;render();releaseOverlay();}
function toggleDraftFilter(scope,value){const draft=state[`${scope}FilterDraft`];draft.has(value)?draft.delete(value):draft.add(value);}
function clearDetailedFilters(scope,draftOnly=false){state[`${scope}FilterDraft`]=new Set();if(!draftOnly)state[`${scope}DetailedFilters`]=new Set();if(draftOnly){document.querySelectorAll('.filter-sheet input[type="checkbox"]').forEach(input=>input.checked=false);return;}render();}
function applyDetailedFilters(scope){state[`${scope}DetailedFilters`]=new Set(state[`${scope}FilterDraft`]);state.filterPanelScope=null;render();releaseOverlay();}
function removeDetailedFilter(scope,value){state[`${scope}DetailedFilters`].delete(value);render();}

function detailedFilterSheet(scope){
  if(state.filterPanelScope!==scope) return '';
  const draft=state[`${scope}FilterDraft`];
  const groups=scope==='home'?detailedFilterGroups.map(([name,options])=>[name,name==='Content type'?options.filter(value=>!['Event','Meetup','Open jio'].includes(value)):options]):detailedFilterGroups;
  return `<div class="filter-sheet-backdrop" onclick="if(event.target===this)closeFilterPanel()"><section class="filter-sheet" role="dialog" aria-modal="true" aria-labelledby="${scope}-filters-title"><div class="filter-sheet-head"><div><span class="eyebrow">Refine results</span><h2 id="${scope}-filters-title">Filters</h2></div><button class="icon-button" aria-label="Close filters" onclick="closeFilterPanel()">${icons.x}</button></div><div class="filter-sheet-body">${groups.map(([name,options])=>`<fieldset class="filter-group"><legend>${name}</legend>${options.map(value=>`<label class="filter-check"><input type="checkbox" ${draft.has(value)?'checked':''} onchange="toggleDraftFilter('${scope}','${value.replaceAll("'","\\'")}')"/> ${value}</label>`).join('')}</fieldset>`).join('')}</div><div class="filter-sheet-actions"><button class="button button-ghost" onclick="clearDetailedFilters('${scope}',true)">Clear all</button><button class="button button-primary" onclick="applyDetailedFilters('${scope}')">Apply filters${draft.size?` (${draft.size})`:''}</button></div></section></div>`;
}

function feedControls(scope){
  const sortKey=scope==='home'?'sort':scope==='collection'?'collectionSort':'searchSort';
  const quick=state[`${scope}QuickFilter`],selected=state[`${scope}DetailedFilters`],sort=state[sortKey];
  const active=[...selected];
  const count=active.length+(quick==='All'?0:1);
  const quickOptions=scope==='home'?['All','Verified','Community']:['All','Verified','Community','Events'];
  return `<section class="feed-control-block" aria-label="Sort and filter content"><div class="feed-control-main"><div class="feed-control-row"><label class="sort-control"><span>Sort by:</span><select class="sort-select" onchange="state.${sortKey}=this.value;render()"><option value="latest" ${sort==='latest'?'selected':''}>Latest</option><option value="top" ${sort==='top'?'selected':''}>Top</option><option value="discussed" ${sort==='discussed'?'selected':''}>Most discussed</option></select>${icons.chevronDown}</label><button class="button button-outline filter-button" data-filter-trigger="${scope}" onclick="openFilterPanel('${scope}')">${icons.filter}<span>Filters${count?` (${count})`:''}</span>${icons.chevronDown}</button></div><div class="quick-filters" role="radiogroup" aria-label="Quick filters">${quickOptions.map(value=>`<button class="chip ${quick===value?'selected':''}" role="radio" aria-checked="${quick===value}" onclick="state.${scope}QuickFilter='${value}';render()">${value}</button>`).join('')}</div></div>${active.length?`<div class="applied-filters" aria-label="Applied filters">${active.map(value=>`<button class="chip selected" onclick="removeDetailedFilter('${scope}','${value.replaceAll("'","\\'")}')">${value} ${icons.x}</button>`).join('')}</div>`:''}</section>${detailedFilterSheet(scope)}`;
}

function clearHomeFilters(){state.homeQuickFilter='All';state.homeDetailedFilters=new Set();state.homeFilterDraft=new Set();state.filterPanelScope=null;render();}

const pinnedCommunityPost={id:'first-trip',expiresAt:'2026-12-31T23:59:59+08:00'};
const homeTopicSections=[
  ['General','Travel, finances, AMAs and other community conversations.'],
  ['Initial diagnosis','Early questions, reassurance and experiences after diagnosis.'],
  ['Infants and toddlers','Early care and everyday routines.'],
  ['Preschool and kindergarten','Preparing educators and supporting growing independence.'],
  ['Primary school','School planning, activities and increasing confidence.'],
  ['Secondary school and teenage years','Confidence, responsibility and wellbeing.'],
  ['National Service','Questions and experiences about preparing for National Service.']
];
function communityPosts(){return content.filter(item=>!item.verified);}
function postTopic(item){if(item.format==='AMA'||item.topics.includes('AMAs and community sharing'))return 'AMAs';if(item.topics.includes('Travel'))return 'Travel';if(item.topics.includes('Financial and practical support'))return 'Finances';return item.topics[0]||item.stages[0]||'Community';}
function relativePostTime(item){const order={'18 Sep':'6d','17 Sep':'1w','14 Sep':'1w','9 Sep':'2w','7 Sep':'2w','5 Sep':'3w','3 Sep':'3w'};return order[item.date]||item.date;}
function postImagePreview(item){const image=item.image;if(!image)return'';return `<figure class="post-image"><img src="${image.src}" alt="${image.alt}" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false"/><div class="post-image-fallback" hidden>${icons.image}<span>Image preview unavailable</span></div></figure>`;}
function homePostRow(item,showImage=true){const saved=state.saved.has(item.id);return `<article class="community-post-row browse-row"><a class="post-row-main post-row-link browse-row-primary" href="#/detail/${encodeURIComponent(item.id)}" onclick="event.preventDefault();go('detail','${item.id}')"><div class="post-row-meta"><span class="topic-tag">${postTopic(item)}</span><strong>${item.author}</strong><span>· ${relativePostTime(item)}</span></div><h3>${item.title}</h3><p>${item.excerpt}</p>${showImage?postImagePreview(item):''}</a><div class="post-row-actions"><span>${icons.heart} ${item.reactions} likes</span><span>${icons.message} ${item.comments} comments</span><button class="save-button browse-row-action ${saved?'saved':''}" aria-label="${saved?'Remove '+item.title+' from saved posts':'Save '+item.title}" onclick="toggleSave('${item.id}',this)">${saved?icons.bookmarkFilled:icons.bookmark}<span>${saved?'Saved':'Save'}</span></button></div></article>`;}
function homeCollectionCard(item,carouselId){return `<a class="home-topic-post" href="#/detail/${encodeURIComponent(item.id)}" onclick="event.preventDefault();openCarouselPost('${item.id}')"><span class="topic-tag">${postTopic(item)}</span><h3>${item.title}</h3><p>${item.excerpt}</p><div><span>${item.author} · ${relativePostTime(item)}</span><span class="home-topic-engagement"><span>${icons.heart} ${item.reactions} likes</span><span>${icons.message} ${item.comments} comments</span></span></div></a>`;}
function postsForHomeSection(name){const posts=communityPosts();if(name==='General')return posts;const stage=name==='Initial diagnosis'?'Newly diagnosed':name;return posts.filter(item=>item.stages.includes(stage));}
function openHomeCollection(name){state.homeCollection=name;state.homeCollectionQuery='';state.homeCollectionFilter='All';state.homeCollectionSort='latest';go('homeCollection');}
const carouselPositions={};
function carouselControls(id){return `<div class="carousel-buttons"><button class="carousel-arrow previous" aria-label="Previous items" aria-controls="${id}" onclick="scrollCarousel('${id}',-1)" disabled>${icons.back}</button><button class="carousel-arrow next" aria-label="Next items" aria-controls="${id}" onclick="scrollCarousel('${id}',1)">${icons.arrow}</button></div>`;}
function rememberCarouselPositions(){document.querySelectorAll('.carousel-track[id]').forEach(track=>carouselPositions[track.id]=track.scrollLeft);}
function openCarouselPost(id){rememberCarouselPositions();go('detail',id);}
function openHomeUpdate(id){state.seenUpdates.add(id);rememberCarouselPositions();go('detail',id);}
function scrollCarousel(id,direction){const track=document.getElementById(id);if(!track)return;const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;track.scrollBy({left:direction*track.clientWidth*.9,behavior:reduced?'auto':'smooth'});setTimeout(()=>syncCarousel(track),reduced?0:280);}
function carouselKey(event,id){if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();scrollCarousel(id,event.key==='ArrowRight'?1:-1);}}
function syncCarousel(track){const shell=track.closest('.carousel-shell'),section=track.closest('section')||shell,max=Math.max(0,track.scrollWidth-track.clientWidth),pageSize=Math.max(1,track.clientWidth),page=Math.min(Math.round(track.scrollLeft/pageSize),Math.ceil(max/pageSize));section?.querySelector('.carousel-buttons')?.classList.toggle('not-needed',max<=2);section?.querySelector('.previous')?.toggleAttribute('disabled',track.scrollLeft<=2);section?.querySelector('.next')?.toggleAttribute('disabled',track.scrollLeft>=max-2);const dots=shell?.querySelector('.carousel-dots');if(dots){const pages=Math.max(1,Math.ceil(track.scrollWidth/pageSize));if(dots.children.length!==pages)dots.innerHTML=Array.from({length:pages},(_,index)=>`<span class="carousel-dot ${index===page?'active':''}" aria-hidden="true"></span>`).join('');else[...dots.children].forEach((dot,index)=>dot.classList.toggle('active',index===page));}}
function initHomeCarousels(){document.querySelectorAll('.carousel-track').forEach(track=>{if(carouselPositions[track.id])track.scrollLeft=carouselPositions[track.id];syncCarousel(track);track.addEventListener('scroll',()=>{carouselPositions[track.id]=track.scrollLeft;syncCarousel(track)},{passive:true});});}
function ensureActiveDocumentTab(){document.querySelectorAll('.document-tabs').forEach(row=>{const active=row.querySelector('.active');if(!active)return;const left=active.offsetLeft,right=left+active.offsetWidth;if(left<row.scrollLeft)row.scrollLeft=left;else if(right>row.scrollLeft+row.clientWidth)row.scrollLeft=right-row.clientWidth;});}
function updateTabUrl(key,value){const url=new URL(location.href);if(url.searchParams.get(key)===value)return;url.searchParams.set(key,value);history.pushState(null,'',url);}
function switchHomeTab(tab){const firstTopics=tab==='topics'&&!state.homeTopicsVisited;state.homeTab=tab;updateTabUrl('homeTab',tab);if(firstTopics){state.homeTopicsVisited=true;state.homeRecommendationActive=true;}render();requestAnimationFrame(ensureActiveDocumentTab);if(firstTopics)requestAnimationFrame(()=>{const stage=state.onboarding.lifeStage&&state.onboarding.lifeStage!=='None of these right now'?state.onboarding.lifeStage:'Primary school';const id=`home-topic-${(stage==='Newly diagnosed'?'Initial diagnosis':stage).toLowerCase().replace(/[^a-z0-9]+/g,'-')}`;const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;document.getElementById(id)?.scrollIntoView({behavior:reduced?'auto':'smooth',block:'center'});setTimeout(()=>{state.homeRecommendationActive=false;document.getElementById(id)?.classList.remove('recommended');document.getElementById(id)?.querySelector('.topic-recommendation')?.remove();},6000);});}
function updateHomeSearch(input){state.homeSearch=input.value;if(input.value.trim()&&state.homeTab!=='all'){state.homeTab='all';const url=new URL(location.href);url.searchParams.set('homeTab','all');history.replaceState(null,'',url);}state.homeVisible=4;const pos=input.selectionStart,id=input.id;render();const next=document.getElementById(id);next?.focus();next?.setSelectionRange(pos,pos);}
function activePinnedPost(){if(!pinnedCommunityPost?.id)return null;if(pinnedCommunityPost.expiresAt&&Date.now()>new Date(pinnedCommunityPost.expiresAt).getTime())return null;return communityPosts().find(item=>item.id===pinnedCommunityPost.id)||null;}
function pinnedOrFallback(){const pinned=activePinnedPost();if(pinned){state.homeFallbackActive=false;return `<section class="pinned-community-post"><div class="pinned-label">${icons.pushpin}<span>Pinned by HSS</span></div>${homePostRow(pinned,false)}</section>`;}if(!state.homeFallbackShown){state.homeFallbackShown=true;state.homeFallbackActive=true;}if(!state.homeFallbackActive)return '';const stage=state.onboarding.lifeStage&&state.onboarding.lifeStage!=='None of these right now'?state.onboarding.lifeStage:'Primary school';return `<section class="home-life-fallback"><div><span class="topic-recommendation">${icons.sparkles} Recommended based on your preferences</span><h2>${stage}</h2><p>Browse community conversations relevant to this life stage.</p></div><button class="text-button section-link" onclick="switchHomeTab('topics')"><span>View all topics</span>${icons.arrow}</button></section>`;}
function homeUpdatePosts(){const ids=new Set([...state.authoredPosts,...state.likedPosts,...state.commentedPosts]),pinned=activePinnedPost();return communityPosts().filter(item=>ids.has(item.id)&&item.id!==pinned?.id).slice(0,4);}
function homeUpdates(){const updates=homeUpdatePosts();if(!updates.length)return '';const id='home-updates-carousel';return `<section class="home-updates home-hero-updates"><div class="section-row"><div><h2>Since your last visit</h2><p class="small">Updates from posts you’ve interacted with</p></div>${carouselControls(id)}</div><div class="carousel-shell"><div class="home-update-scroll carousel-track" id="${id}" role="region" aria-label="Updates from posts you have interacted with" tabindex="0" onkeydown="carouselKey(event,'${id}')">${updates.map((item,index)=>{const likes=index%2===1,seen=state.seenUpdates.has(item.id);return `<button class="home-update-item carousel-card ${seen?'seen':''}" onclick="openHomeUpdate('${item.id}')"><span class="topic-tag">${postTopic(item)}</span><strong>${item.title}</strong><span class="update-meta">${likes?icons.heart:icons.message}${index%2?`${index+2} new likes`:`${index+1} new replies`}</span></button>`;}).join('')}</div><div class="carousel-dots" aria-label="Carousel pages"></div></div></section>`;}
function homeAllTab(){const q=state.homeSearch.trim().toLowerCase(),excluded=new Set([activePinnedPost()?.id,...homeUpdatePosts().map(item=>item.id)].filter(Boolean));const matches=communityPosts().filter(item=>!excluded.has(item.id)&&(!q||[item.title,item.excerpt,item.author,...item.topics,...item.stages].join(' ').toLowerCase().includes(q)));const shown=matches.slice(0,state.homeVisible);return `${pinnedOrFallback()}<section class="latest-community"><div class="section-row home-feed-heading"><h2>Latest from the community</h2><button class="text-button section-link" onclick="switchHomeTab('topics')"><span>View all topics</span>${icons.arrow}</button></div><div class="community-feed">${shown.length?shown.map(homePostRow).join(''):`<div class="compact-empty"><h3>No community posts found</h3><p>Try a broader search.</p><button class="button button-outline" onclick="state.homeSearch='';render()">Clear search</button></div>`}</div>${shown.length<matches.length?'<div class="home-lazy-sentinel" aria-label="Loading more posts"><span>Loading more…</span></div>':''}</section>`;}
function homeTopicsTab(){const preferred=state.onboarding.lifeStage==='Newly diagnosed'?'Initial diagnosis':state.onboarding.lifeStage||'Primary school';return `<div class="home-topics">${homeTopicSections.map(([name,desc])=>{const posts=postsForHomeSection(name),shown=posts.slice(0,4),more=Math.max(0,posts.length-4),recommended=state.homeRecommendationActive&&name===preferred,slug=name.toLowerCase().replace(/[^a-z0-9]+/g,'-'),sectionId=`home-topic-${slug}`,carouselId=`topic-carousel-${slug}`,safeName=name.replaceAll("'","\\'");return `<section class="home-topic-section ${recommended?'recommended':''}" id="${sectionId}"><div class="section-row"><div>${recommended?`<p class="topic-recommendation">${icons.sparkles} Recommended based on your preferences</p>`:''}<h2>${name}</h2><p class="small muted">${desc}</p></div><div class="topic-section-actions"><button class="text-button section-link" onclick="openHomeCollection('${safeName}')"><span>See all posts</span>${icons.arrow}</button>${posts.length>1?carouselControls(carouselId):''}</div></div>${posts.length?`<div class="carousel-shell"><div class="home-topic-scroll carousel-track" id="${carouselId}" role="region" aria-label="${name} post previews" tabindex="0" onkeydown="carouselKey(event,'${carouselId}')">${shown.map(item=>homeCollectionCard(item,carouselId)).join('')}${more?`<button class="home-topic-more carousel-card" onclick="openHomeCollection('${safeName}')"><strong>+${more}</strong><span>more posts</span></button>`:''}</div></div>`:`<div class="topic-empty"><p>No community posts here yet.</p><button class="button button-outline" onclick="go('create')">Start a post</button></div>`}</section>`;}).join('')}</div>`;}
function homeScreen(){setTimeout(ensureActiveDocumentTab,0);const updates=homeUpdates();return shell(`<main class="page home-page community-home"><section class="home-hero"><header class="home-hero-header page-head-actions"><div><h1>Hello, ${accessValue(memberName())}!</h1><p>${updates?'Here’s what’s new in conversations you follow.':'What would you like to find today?'}</p></div>${contextualCreateAction('Create post','create')}</header></section><div class="home-search-sticky"><div class="community-search">${icons.search}<label class="sr-only" for="community-search">Search community posts</label><input id="community-search" value="${accessValue(state.homeSearch)}" oninput="updateHomeSearch(this)" placeholder="Looking for something today?"/><button class="icon-button ${state.homeSearch?'':'hidden'}" aria-label="Clear search" onclick="state.homeSearch='';state.homeVisible=4;render()">${icons.x}</button></div></div><section class="home-updates-hero">${updates}</section><section class="home-content-sheet"><div class="document-layout home-document-layout"><div class="document-tab-strip"><nav class="home-tabs document-tabs" role="tablist" aria-label="Home views"><button role="tab" tabindex="${state.homeTab==='all'?'0':'-1'}" aria-selected="${state.homeTab==='all'}" class="${state.homeTab==='all'?'active':''}" onclick="switchHomeTab('all')">All</button><button role="tab" tabindex="${state.homeTab==='topics'?'0':'-1'}" aria-selected="${state.homeTab==='topics'}" class="${state.homeTab==='topics'?'active':''}" onclick="switchHomeTab('topics')">Topics</button></nav></div><section class="document-surface home-document-surface">${state.homeTab==='all'?homeAllTab():homeTopicsTab()}</section></div></section></main>`,'home');}
function initHomeLazyLoad(){const sentinel=document.querySelector('.home-lazy-sentinel');if(!sentinel||!('IntersectionObserver'in window))return;const observer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){observer.disconnect();state.homeVisible+=3;render();}},{rootMargin:'160px'});observer.observe(sentinel);}

function homeCollectionScreen(){
  const name=state.homeCollection||'General'; const description=homeTopicSections.find(([title])=>title===name)?.[1]||'Community conversations.';
  let posts=postsForHomeSection(name); const q=state.homeCollectionQuery.trim().toLowerCase();
  const exactFilters=['All','Travel','Finances','AMAs','Others'];
  const available=name==='General'?exactFilters:['All',...exactFilters.slice(1).filter(filter=>posts.some(item=>(filter==='Others'?!['Travel','Finances','AMAs'].includes(postTopic(item)):postTopic(item)===filter)))];
  if(!available.includes(state.homeCollectionFilter))state.homeCollectionFilter='All';
  if(q)posts=posts.filter(item=>[item.title,item.excerpt,item.author,...item.topics].join(' ').toLowerCase().includes(q));
  if(state.homeCollectionFilter!=='All')posts=posts.filter(item=>state.homeCollectionFilter==='Others'?!['Travel','Finances','AMAs'].includes(postTopic(item)):postTopic(item)===state.homeCollectionFilter);
  if(state.homeCollectionSort==='top')posts=[...posts].sort((a,b)=>(b.reactions+b.comments)-(a.reactions+a.comments));
  if(state.homeCollectionSort==='relevance')posts=[...posts].sort((a,b)=>{const score=item=>(item.title.toLowerCase().includes(q)?3:0)+(item.excerpt.toLowerCase().includes(q)?1:0)+item.comments/100;return score(b)-score(a);});
  return shell(`<main class="page home-collection-page"><button class="back-button" onclick="state.homeTab='topics';go('home')">${icons.back} Back to Home</button><header class="compact-page-head"><h1>${name}</h1><p>${description}</p></header><div class="collection-tools"><div class="community-search">${icons.search}<label class="sr-only" for="collection-search">Search ${name} posts</label><input id="collection-search" value="${accessValue(state.homeCollectionQuery)}" oninput="updateHomeCollectionSearch(this)" placeholder="Search ${name.toLowerCase()} posts"/><button class="icon-button ${state.homeCollectionQuery?'':'hidden'}" aria-label="Clear search" onclick="state.homeCollectionQuery='';render()">${icons.x}</button></div><label class="sort-control"><span>Sort by:</span><select class="sort-select" onchange="state.homeCollectionSort=this.value;render()"><option value="latest" ${state.homeCollectionSort==='latest'?'selected':''}>Latest</option><option value="relevance" ${state.homeCollectionSort==='relevance'?'selected':''}>Relevance</option><option value="top" ${state.homeCollectionSort==='top'?'selected':''}>Top</option></select>${icons.chevronDown}</label></div><div class="collection-subject-filters" role="radiogroup" aria-label="Subject filters">${available.map(filter=>`<button class="chip ${state.homeCollectionFilter===filter?'selected':''}" role="radio" aria-checked="${state.homeCollectionFilter===filter}" onclick="state.homeCollectionFilter='${filter}';render()">${filter}</button>`).join('')}</div><div class="community-feed">${posts.length?posts.map(homePostRow).join(''):`<div class="compact-empty"><h2>No posts match your search or filters</h2><p>Clear the current search and subject filter to see all posts in this collection.</p><button class="button button-outline" onclick="clearHomeCollectionFilters()">Reset filters</button></div>`}</div></main>`,'home');
}
function updateHomeCollectionSearch(input){state.homeCollectionQuery=input.value;const pos=input.selectionStart;render();const next=document.querySelector('#collection-search');next?.focus();next?.setSelectionRange(pos,pos);}
function clearHomeCollectionFilters(){state.homeCollectionQuery='';state.homeCollectionFilter='All';state.homeCollectionSort='latest';render();}

function updateSearch(value){ state.search=value; const oldPos=document.activeElement?.selectionStart; render(); const input=document.querySelector('#home-search'); input?.focus(); if(input&&oldPos!==null) input.setSelectionRange(oldPos,oldPos); }
function escapeHtml(value){ const div=document.createElement('div'); div.textContent=value; return div.innerHTML; }

function searchScreen(){
  const q=state.search.trim().toLowerCase();
  let matches=allFeedEntries().filter(entry=>{const item=entry.item;const hay=entry.kind==='content'?[item.title,item.excerpt,item.author,...item.topics,...item.stages,item.format]:entry.kind==='event'?[item.title,item.description,item.type,item.stage,item.audience,item.mode]:[item.title,item.description,item.type,item.audience,item.location];return !q||hay.join(' ').toLowerCase().includes(q);});
  matches=sortFeedEntries(filterFeedEntries(matches,state.searchQuickFilter,state.searchDetailedFilters),state.searchSort);
  const suggestions=(q?content.filter(x=>x.title.toLowerCase().includes(q)||x.topics.some(t=>t.toLowerCase().includes(q))).slice(0,3):content.slice(0,3));
  const resultsHtml=`<div class="section-row"><h2>${q?`${matches.length} ${matches.length===1?'result':'results'}`:'Browse all content'}</h2><span class="small muted">Across the community</span></div><div class="feed">${matches.length?matches.map(renderFeedEntry).join(''):searchEmpty()}</div>`;
  return shell(`<main class="page page-narrow"><button class="back-button" onclick="backFromSearch()">${icons.back} Back</button><header class="page-head"><div class="eyebrow">Search the community</div><h1>What are you looking for?</h1></header><section class="search-hero"><div class="search-wrap">${icons.search}<label class="sr-only" for="global-search">Search everything</label><input id="global-search" class="search-input" value="${escapeHtml(state.search)}" oninput="searchInput(this)" onkeydown="if(event.key==='Enter')performSearch(this.value)" placeholder="Search resources, questions and experiences" autocomplete="off"/><button class="search-clear ${state.search?'visible':''}" aria-label="Clear search" onclick="state.search='';render()">${icons.x}</button></div>
    ${!q?`<div class="recent-row"><span class="recent-label">Recent</span>${state.recentSearches.map(x=>`<button class="chip" onclick="performSearch('${x}')">${x}</button>`).join('')}<button class="text-button" onclick="state.recentSearches=[];render()">Clear</button></div>`:`<div class="suggestion-box">${suggestions.length?suggestions.map(x=>`<button class="suggestion" onclick="performSearch('${x.title.replaceAll("'","\\'")}')">${icons.search}<span>${x.title}</span><small>${x.format}</small></button>`).join(''):`<div class="suggestion"><span>No suggested matches</span></div>`}</div>`}
  </section>${feedControls('search')}${resultsHtml}</main>`, '');
}
function searchInput(input){state.search=input.value;const pos=input.selectionStart;render();const next=document.querySelector('#global-search');next?.focus();next?.setSelectionRange(pos,pos);}
function performSearch(value){state.search=value;if(value&&!state.recentSearches.includes(value))state.recentSearches.unshift(value);state.recentSearches=state.recentSearches.slice(0,4);render();}
function searchResultGroup(title,items,note,isVerified){return `<section class="result-group"><div class="section-row"><div><h2>${title}</h2><p class="small muted">${items.length} ${items.length===1?'result':'results'}</p></div></div><div class="result-group-note">${isVerified?icons.shield:icons.people}<span>${note}</span></div><div class="feed">${items.length?items.map(x=>contentCard(x)).join(''):searchEmpty()}</div></section>`;}
function searchEmpty(){return `<div class="card empty"><div class="empty-icon">${icons.search}</div><h3>No matches found</h3><p>Try removing a filter or using a broader phrase.</p><button class="button button-outline" onclick="clearSearchFilters()">Clear filters</button></div>`;}
function clearSearchFilters(){state.searchQuickFilter='All';state.searchDetailedFilters=new Set();state.searchFilterDraft=new Set();state.filterPanelScope=null;render();}

function createScreen(){
  const formattingToolbar=`<div class="composer-formatting" role="toolbar" aria-label="Post formatting"><button type="button" aria-label="Bold" onclick="toast('Bold formatting selected')"><strong>B</strong></button><button type="button" aria-label="Italic" onclick="toast('Italic formatting selected')"><em>I</em></button><button type="button" aria-label="Add link" onclick="toast('Link options opened')">↗</button><button type="button" aria-label="Add image" onclick="document.querySelector('#post-image')?.click()">${icons.image}</button><button type="button" aria-label="Bulleted list" onclick="toast('Bulleted list selected')">•≡</button><button type="button" aria-label="Quote" onclick="toast('Quote formatting selected')">“”</button></div>`;
  const title=state.createTitle||'';
  const draftBody=state.createBody||'';
  const previewTag=[...state.createTopics][0]||[...state.createStages][0]||'Community';
  const body=`<section class="composer-section composer-write-section"><div class="field"><label for="post-title">Title</label><input class="input" id="post-title" maxlength="120" placeholder="Give your post a clear title" value="${accessValue(title)}" oninput="state.createTitle=this.value;document.querySelector('#post-preview-title').textContent=this.value||'Your post title';"/></div><div class="field composer-body-field"><label for="post-body">Your post</label><div class="composer-editor">${formattingToolbar}<textarea class="textarea" id="post-body" placeholder="What would you like to share?" oninput="state.createBody=this.value;document.querySelector('#post-preview-copy').textContent=this.value||'Your post content will appear here.'">${accessValue(draftBody)}</textarea></div><p class="field-hint">Do not include children’s names, diagnoses or other identifying information.</p></div><div class="field"><label>Topic</label><div class="chips" role="group" aria-label="Topics">${topics.map(([name])=>`<button type="button" class="chip ${state.createTopics.has(name)?'selected':''}" aria-pressed="${state.createTopics.has(name)}" onclick="toggleCreateChip('createTopics','${name.replace(/'/g,"\\'")}')">${name}</button>`).join('')}</div></div><div class="field"><label>Life stage</label><div class="chips" role="group" aria-label="Life stages">${lifeStages.map(([name])=>`<button type="button" class="chip ${state.createStages.has(name)?'selected':''}" aria-pressed="${state.createStages.has(name)}" onclick="toggleCreateChip('createStages','${name.replace(/'/g,"\\'")}')">${name}</button>`).join('')}</div></div></section><section class="composer-section post-review-section"><div class="composer-section-heading"><div><h2 class="composer-section-title">Preview</h2><p class="small muted">This is how your post will appear to the community.</p></div></div><article class="post-review-preview"><div class="post-review-meta"><span class="topic-tag">${accessValue(previewTag)}</span><span class="post-review-author"><strong>${accessValue(memberName())}</strong><span>· Just now</span></span></div><div class="post-review-content"><span id="post-preview-title">${title||'Your post title'}</span><p id="post-preview-copy">${draftBody||'Your post content will appear here.'}</p></div><div class="post-review-footer"><div><span>${icons.heart} 0 likes</span><span>${icons.message} 0 comments</span></div><span class="post-review-save">${icons.bookmark} Save</span></div></article></section><div class="composer-publish-bar"><button class="button button-primary" onclick="publishPost(this)">Post to community</button></div>`;
  return shell(`<main class="page create-shell post-create-shell"><section class="post-create-composer single-page-composer">${body}</section></main>`,'');
}
function toggleCreateChip(kind,value){
  const set=state[kind];
  set.has(value)?set.delete(value):set.add(value);
  render();
}
async function publishPost(button){
  const title=(document.querySelector('#post-title')?.value||state.createTitle||'').trim();
  const bodyText=(document.querySelector('#post-body')?.value||state.createBody||'').trim();
  if(!title){toast('Add a title before posting');document.querySelector('#post-title')?.focus();return;}
  if(!bodyText){toast('Write something before posting');document.querySelector('#post-body')?.focus();return;}
  setButtonLoading(button,'Posting…');
  try{
    const {id}=await api('POST','/posts',{title,body:bodyText,excerpt:bodyText.slice(0,200),topics:[...state.createTopics],stages:[...state.createStages]});
    await loadBootstrap();
    state.authoredPosts.add(id);
    state.createTitle='';state.createBody='';state.createTopics=new Set();state.createStages=new Set();
    toast('Your post is now live in the community');
    go('home');
  }catch(err){
    toast('Could not publish your post. Please try again.');
  }finally{
    if(button){button.disabled=false;button.removeAttribute('aria-busy');button.textContent=button.dataset.originalLabel||'Post to community';}
  }
}

function eventCard(event){
  const parts=event.date.split(' '); const day=parts[0],month=parts[1]||'';
  const tone=event.status==='Live'?'active':event.status==='Past'?'complete':'info';
  return `<article class="card compact-card event-card ${event.status==='Live'?'event-live':''}" tabindex="0" onclick="go('eventDetail','${event.id}')" onkeydown="if(event.key==='Enter')go('eventDetail','${event.id}')"><div class="date-tile"><span>${month}</span><strong>${day}</strong></div><div class="compact-card-body"><div class="card-signals">${sourceBadge('Verified by HSS',true)}${statusBadge(event.status,tone,event.status==='Live')}</div><h3>${event.title}</h3><p class="small muted">${event.description}</p>${metadataLine([event.type,event.mode,event.audience])}</div><div class="compact-card-footer"><div class="event-meta"><span>${icons.calendar} ${event.time}</span></div>${icons.arrow}</div></article>`;
}

function meetupCard(meetup){
  return `<article class="card compact-card meetup-card" tabindex="0" onclick="go('meetupDetail','${meetup.id}')" onkeydown="activateCard(event,'meetupDetail','${meetup.id}')"><div class="date-tile"><span>${meetup.month}</span><strong>${meetup.day}</strong></div><div class="compact-card-body"><div class="card-signals">${sourceBadge('Community activity')}${statusBadge('Upcoming','info')}</div><h3>${meetup.title}</h3><p class="small muted">${meetup.description}</p>${metadataLine([meetup.type,meetup.audience])}</div><div class="compact-card-footer"><div class="event-meta"><span>${icons.calendar} ${meetup.time}</span><span>${icons.compass} ${meetup.location}</span></div>${icons.arrow}</div></article>`;
}

function eventListCard(event,{registered=false,next=false}={}){
  const parts=event.date.split(' '),day=parts[0],month=parts[1]||'';
  const live=event.status==='Live';
  const status=live?'Live':registered?'Registered':event.status==='Past'?'Closed':'Upcoming';
  const tone=live||registered?'active':event.status==='Past'?'complete':'info';
  const action=live?'Join live':event.status==='Past'?'View recording':'Register';
  const actionClick=live?"toast('Live event room opened')":event.status==='Past'?"toast('Recording opened in the prototype')":`registerEvent('${event.id}',this)`;
  const actionButton=registered&&!live?'':`<button class="button button-primary" onclick="event.stopPropagation();${actionClick}">${action}</button>`;
  return `<article class="card event-action-card ${registered&&!live?'without-action':''}" tabindex="0" onclick="go('eventDetail','${event.id}')" onkeydown="activateCard(event,'eventDetail','${event.id}')"><div class="date-tile"><span>${month}</span><strong>${day}</strong></div><div class="event-action-body"><div class="card-signals">${statusBadge(status,tone,live)}${next&&!live?'<span class="next-event-note">Next event</span>':''}</div><h3>${event.title}</h3><p class="event-summary">${event.description}</p>${metadataLine([event.type,event.mode,event.audience==='All caregivers'?event.audience:event.stage])}<div class="event-action-meta"><span>${icons.calendar} ${live?'Live now':`${event.date} · ${event.time}`}</span></div></div>${actionButton}</article>`;
}

function communityActivityListCard(activity){
  const joined=state.joinedActivities.has(activity.id);
  return `<article class="card event-action-card community-activity-card" tabindex="0" onclick="go('meetupDetail','${activity.id}')" onkeydown="activateCard(event,'meetupDetail','${activity.id}')"><div class="date-tile"><span>${activity.month}</span><strong>${activity.day}</strong></div><div class="event-action-body"><div class="card-signals">${sourceBadge('Community activity')}${statusBadge(joined?'Joined':'Upcoming',joined?'active':'info')}</div><h3>${activity.title}</h3><p class="event-summary">${activity.description}</p>${metadataLine([activity.type,activity.location,activity.audience])}<div class="event-action-meta"><span>${icons.calendar} ${activity.time}</span></div></div><button class="button ${joined?'button-outline':'button-primary'}" ${joined?'disabled aria-disabled="true"':`onclick="event.stopPropagation();joinActivity('${activity.id}',this)"`}>${joined?'Joined':'Join activity'}</button></article>`;
}

function joinActivity(id,button){if(state.joinedActivities.has(id))return;setButtonLoading(button,'Joining…');setTimeout(()=>{state.joinedActivities.add(id);render();toast('Activity joined');},300);}

function liveEventRow(event){
  return `<article class="card live-event-row" tabindex="0" onclick="go('eventDetail','${event.id}')" onkeydown="if(event.key==='Enter')go('eventDetail','${event.id}')">${statusBadge('Live','active',true)}<div><h3>${event.title}</h3><p>${event.type} · ${event.mode} · ${event.time}</p></div><button class="button button-primary" onclick="event.stopPropagation();toast('Live event room opened')">Join live</button></article>`;
}

function pastRecordingRow(event){
  return `<article class="card past-recording-row" tabindex="0" onclick="go('eventDetail','${event.id}')" onkeydown="activateCard(event,'eventDetail','${event.id}')"><div>${statusBadge('Closed','complete')}<h3>${event.title}</h3><p>${event.type} · Recording available · ${event.date}</p></div><button class="button button-outline" onclick="event.stopPropagation();toast('Recording opened in the prototype')">View recording</button></article>`;
}

const eventFilterGroups = [
  ['Format',['Online','In person']],
  ['Date',['This week','This month','Choose date']],
  ['Location or general area',['Online','Bedok','Jurong East']],
  ['Topic',['School and childcare','Caregiver wellbeing','Treatment and infusion']],
  ['Activity type',['Webinar','Talk','Meetup','Open jio','Support session']],
  ['Availability',['Spaces available']],
  ['Participation status',['Not joined','Already joined']]
];

function normalisedUpcomingActivities(){
  const popularity={'caregiver-checkin':96,'school-webinar':84,'care-team-ama':91,'family-workshop':72,'east-coast-walk':77,'primary-coffee':68};
  const recentlyAdded={'caregiver-checkin':3,'school-webinar':5,'care-team-ama':1,'family-workshop':4,'east-coast-walk':2,'primary-coffee':6};
  const topics={'caregiver-checkin':'Caregiver wellbeing','school-webinar':'School and childcare','care-team-ama':'Treatment and infusion','family-workshop':'Caregiver wellbeing'};
  const hss=events.filter(item=>['Live','Upcoming'].includes(item.status)).map(item=>({kind:'hss',id:item.id,title:item.title,description:item.description,date:item.date,time:item.time,type:item.type==='Community sharing'?'Support session':item.type,mode:item.mode,location:item.mode==='Online'?'Online':'HSS community venue',organiser:item.host,topic:topics[item.id]||item.stage,audience:item.audience,live:item.status==='Live',committed:state.registered.has(item.id),commitment:'Registered',popularity:popularity[item.id]||0,recentlyAdded:recentlyAdded[item.id]||0}));
  const community=communityActivities.map(item=>({kind:'community',id:item.id,title:item.title,description:item.description,date:item.date,time:item.time,type:item.type,mode:'In person',location:item.location,organiser:item.organiser,topic:item.topic,audience:item.audience,live:false,committed:state.joinedActivities.has(item.id),commitment:'Joined',popularity:popularity[item.id]||0,recentlyAdded:recentlyAdded[item.id]||0}));
  return [...hss,...community];
}

function activityDateValue(activity){return new Date(`${activity.date} 12:00:00`).getTime();}
function activityFilterValue(activity,group,value){
  const reference=new Date('22 Sep 2026 12:00:00'),date=new Date(`${activity.date} 12:00:00`),days=(date-reference)/86400000;
  if(group==='Format') return activity.mode===value;
  if(group==='Date') return value==='This week'?(days>=0&&days<=7):value==='This month'?(date.getMonth()===reference.getMonth()&&date.getFullYear()===reference.getFullYear()):date.toISOString().slice(0,10)===state.eventChosenDate;
  if(group==='Location or general area') return value==='Online'?activity.location==='Online':activity.location.includes(value);
  if(group==='Topic') return activity.topic===value;
  if(group==='Activity type') return activity.type===value;
  if(group==='Availability') return !activity.committed;
  if(group==='Participation status') return value==='Already joined'?activity.committed:!activity.committed;
  return true;
}

function filteredUpcomingActivities(){
  let list=normalisedUpcomingActivities().filter(activity=>state.eventQuickFilter==='All'||(state.eventQuickFilter==='HSS events'&&activity.kind==='hss')||(state.eventQuickFilter==='Community activities'&&activity.kind==='community'));
  const selectedGroups=eventFilterGroups.map(([group,values])=>[group,values.filter(value=>state.eventDetailedFilters.has(value))]).filter(([,values])=>values.length);
  list=list.filter(activity=>selectedGroups.every(([group,values])=>values.some(value=>activityFilterValue(activity,group,value))));
  if(state.eventSort==='recent') return list.sort((a,b)=>a.recentlyAdded-b.recentlyAdded);
  if(state.eventSort==='popular') return list.sort((a,b)=>b.popularity-a.popularity);
  return list.sort((a,b)=>(a.live?-1:b.live?1:activityDateValue(a)-activityDateValue(b)));
}

function eventFiltersSheet(){
  if(state.filterPanelScope!=='event') return '';
  const draft=state.eventFilterDraft;
  return `<div class="filter-sheet-backdrop" onclick="if(event.target===this)closeFilterPanel()"><section class="filter-sheet" role="dialog" aria-modal="true" aria-labelledby="event-filters-title"><div class="filter-sheet-head"><div><span class="eyebrow">Narrow the activity list</span><h2 id="event-filters-title">Filters</h2></div><button class="icon-button" aria-label="Close filters" onclick="closeFilterPanel()">${icons.x}</button></div><div class="filter-sheet-body">${eventFilterGroups.map(([name,options])=>`<fieldset class="filter-group"><legend>${name}</legend>${options.map(value=>`<label class="filter-check"><input type="checkbox" ${draft.has(value)?'checked':''} onchange="toggleDraftFilter('event','${value}')"/> ${value}</label>${value==='Choose date'?`<label class="event-date-choice"><span class="sr-only">Specific date</span><input class="input" type="date" value="${state.eventChosenDate}" onchange="state.eventChosenDate=this.value"/></label>`:''}`).join('')}</fieldset>`).join('')}</div><div class="filter-sheet-actions"><button class="button button-ghost" onclick="clearDetailedFilters('event',true)">Clear all</button><button class="button button-primary" onclick="applyDetailedFilters('event')">Apply filters${draft.size?` (${draft.size})`:''}</button></div></section></div>`;
}

function eventsControls(){
  const active=[...state.eventDetailedFilters],count=active.length;
  return `<section class="feed-control-block event-controls" aria-label="Sort and filter upcoming activities"><div class="feed-control-main"><div class="feed-control-row"><label class="sort-control"><span>Sort by:</span><select class="sort-select" onchange="state.eventSort=this.value;render()"><option value="upcoming" ${state.eventSort==='upcoming'?'selected':''}>Upcoming</option><option value="recent" ${state.eventSort==='recent'?'selected':''}>Recently added</option><option value="popular" ${state.eventSort==='popular'?'selected':''}>Most popular</option></select>${icons.chevronDown}</label><button class="button button-outline filter-button" data-filter-trigger="event" onclick="openFilterPanel('event')">${icons.filter}<span>Filters${count?` (${count})`:''}</span>${icons.chevronDown}</button></div><div class="quick-filters event-quick-filters" role="radiogroup" aria-label="Activity source">${['All','HSS events','Community activities'].map(value=>`<button class="chip ${state.eventQuickFilter===value?'selected':''}" role="radio" aria-checked="${state.eventQuickFilter===value}" onclick="state.eventQuickFilter='${value}';render()">${value}</button>`).join('')}</div></div>${active.length?`<div class="applied-filters">${active.map(value=>`<button class="chip selected" onclick="removeDetailedFilter('event','${value}')">${value} ${icons.x}</button>`).join('')}<button class="text-button" onclick="clearEventFilters()">Clear all</button></div>`:''}</section>${eventFiltersSheet()}`;
}

function clearEventFilters(){state.eventQuickFilter='All';state.eventDetailedFilters=new Set();state.eventFilterDraft=new Set();state.filterPanelScope=null;render();}

function unifiedActivityCard(activity){
  const [day,month]=activity.date.split(' '),source=activity.kind==='hss'?'HSS event':'Community activity';
  const status=activity.live?'Live':activity.committed?activity.commitment:'Spaces available',tone=activity.live||activity.committed?'active':'info';
  const route=activity.kind==='hss'?'eventDetail':'meetupDetail';
  const action=activity.live?'Join online':activity.committed?'View details':activity.kind==='hss'?'Register':'Join activity';
  const direct=activity.live?"toast('Online event room opened')":activity.committed?`go('${route}','${activity.id}')`:activity.kind==='hss'?`registerEvent('${activity.id}',this)`:`joinActivity('${activity.id}',this)`;
  const button=activity.committed&&!activity.live?'':`<button class="button button-primary" onclick="event.stopPropagation();${direct}">${action}</button>`;
  return `<article class="card event-action-card unified-activity-card ${activity.kind==='community'?'community-led-card':''} ${activity.committed&&!activity.live?'without-action':''}" tabindex="0" onclick="go('${route}','${activity.id}')" onkeydown="activateCard(event,'${route}','${activity.id}')"><div class="date-tile"><span>${month}</span><strong>${day}</strong></div><div class="event-action-body"><div class="card-signals">${sourceBadge(source,activity.kind==='hss')}${statusBadge(status,tone,activity.live)}</div><h3>${activity.title}</h3><p class="event-summary">${activity.description}</p>${metadataLine([activity.type,activity.location,`Organised by ${activity.organiser}`])}<div class="event-action-meta"><span>${icons.calendar} ${activity.live?'Live now':`${activity.date} · ${activity.time}`}</span></div></div>${button}</article>`;
}

function planRow(activity){
  const route=activity.kind==='hss'?'eventDetail':'meetupDetail';
  return `<article class="card plan-row ${activity.kind==='community'?'community-led-card':''}" tabindex="0" onclick="go('${route}','${activity.id}')" onkeydown="activateCard(event,'${route}','${activity.id}')"><div><div class="card-signals">${sourceBadge(activity.kind==='hss'?'HSS event':'Community activity',activity.kind==='hss')}${statusBadge(activity.commitment,'active')}</div><h3>${activity.title}</h3><p>${activity.date} · ${activity.time} · ${activity.location}</p></div></article>`;
}

function openEventSubpage(view){state.scrollPositions.events=window.scrollY;state.eventView=view;render();window.scrollTo({top:0,behavior:'auto'});}
function backToEvents(){state.eventView='upcoming';render();requestAnimationFrame(()=>window.scrollTo({top:state.scrollPositions.events||0,behavior:'auto'}));}

const EVENT_NOW=new Date('2026-09-24T12:00:00+08:00');
function eventDateValue(event){return new Date(event.start||`${event.date} ${event.time.split('–')[0]}`).getTime();}
function isPastEvent(event){return eventDateValue(event)<EVENT_NOW.getTime();}
function memberAttendedEvent(id){const event=events.find(item=>item.id===id);return state.attendedEvents.has(id)||Boolean(event&&isPastEvent(event)&&state.registered.has(id)&&!state.cancelledRegistrations.has(id));}
function registrationClosed(event){return !isPastEvent(event)&&event.registrationDeadline&&new Date(`${event.registrationDeadline} 23:59:59`).getTime()<EVENT_NOW.getTime();}
function eventVenueLabel(event){return event.mode==='Online'?'Online':event.venue||event.mode;}
function eventPlaceIcon(event){return event.mode==='Online'?icons.video:icons.pin;}
function eventResourcesFor(id){return resources.filter(resource=>resource.eventId===id||resource.eventIds?.includes(id));}
function openEventResourcesOnDetail(id){state.eventScrollTarget='resources';go('eventDetail',id);}
function eventListType(event){return event.type==='AMA'?'Webinar':event.type;}
function eventPoster(event,featured=false){
  const [day,month]=event.date.split(' '),displayType=eventListType(event),typeClass=displayType.toLowerCase().replaceAll(' ','-');
  return `<div class="event-poster ${featured?'event-poster-featured':''} ${typeClass}" aria-hidden="true"><span class="event-poster-source">HSS</span><span class="event-poster-icon">${displayType==='Webinar'||event.mode==='Online'?icons.video:displayType==='Workshop'?icons.people:icons.calendar}</span><strong>${displayType}</strong><small>${day} ${month}</small></div>`;
}
function eventDateGroup(event){
  const date=new Date(event.start),day=new Intl.DateTimeFormat('en-SG',{day:'numeric',timeZone:'Asia/Singapore'}).format(date),month=new Intl.DateTimeFormat('en-SG',{month:'long',timeZone:'Asia/Singapore'}).format(date),weekday=new Intl.DateTimeFormat('en-SG',{weekday:'long',timeZone:'Asia/Singapore'}).format(date);
  return `<div class="event-date-group"><strong>${day} ${month}</strong><span>/ ${weekday}</span></div>`;
}
function groupedEventRows(items,kind){return items.map((event,index)=>`${!index||event.date!==items[index-1].date?eventDateGroup(event):''}${hssEventRow(event,kind)}`).join('');}
function featuredRegisteredEvent(event){
  const place=eventVenueLabel(event),formatAndPlace=place===event.mode?event.mode:`${event.mode} · ${place}`;
  return `<article class="registered-event-card">${eventPoster(event,true)}<div class="registered-event-body"><div class="registered-event-top"><span class="event-organiser-line">HSS · ${eventListType(event)}</span>${statusBadge('You’re registered','active')}</div><h3>${event.title}</h3><p>${event.description}</p><div class="hss-event-meta"><span>${icons.calendar}${event.date} · ${event.time}</span><span>${eventPlaceIcon(event)}${formatAndPlace}</span></div></div><button class="text-button registered-event-action" onclick="go('eventDetail','${event.id}')"><span>View event</span>${icons.arrow}</button></article>`;
}
function hssEventRow(event,kind){
  const registered=state.registered.has(event.id),related=eventResourcesFor(event.id),attended=memberAttendedEvent(event.id);
  const status=kind==='your'?"You’re going":kind==='attended'?'You attended':registrationClosed(event)?'Registration closed':isPastEvent(event)?'Event ended':'Registration open';
  const tone=kind==='your'||kind==='attended'?'active':isPastEvent(event)||registrationClosed(event)?'complete':'info';
  const action=kind==='attended'&&related.length?'View resources':'View details';
  const actionIcon=kind==='attended'&&related.length?icons.file:'';
  const actionChevron=action==='View details'?icons.arrow:'';
  const actionClass='text-button hss-event-row-action';
  const click=kind==='attended'&&related.length?`openEventResourcesOnDetail('${event.id}')`:`go('eventDetail','${event.id}')`;
  const place=eventVenueLabel(event),formatAndPlace=place===event.mode?event.mode:`${event.mode} · ${place}`;
  return `<article class="hss-event-row flat-event-row browse-row ${kind==='past'||kind==='attended'?'past-row':''}"><a class="hss-event-row-primary browse-row-primary" href="#/eventDetail/${encodeURIComponent(event.id)}" onclick="event.preventDefault();${click}">${eventPoster(event)}<div class="hss-event-row-body"><div class="event-row-top"><span class="event-organiser-line">HSS · ${eventListType(event)}</span>${statusBadge(status,tone)}</div><h3>${event.title}</h3><div class="hss-event-meta"><span>${icons.calendar}${event.time}</span><span>${eventPlaceIcon(event)}${formatAndPlace}</span></div>${kind==='attended'?`<span class="resource-availability">${related.length?`${related.length} ${related.length===1?'resource':'resources'} available`:'No resources published'}</span>`:''}</div></a><button class="${actionClass} browse-row-action" onclick="${click}">${actionIcon}<span>${action}</span>${actionChevron}</button></article>`;
}

function eventsScreen(){
  const upcoming=events.filter(event=>!isPastEvent(event)).sort((a,b)=>eventDateValue(a)-eventDateValue(b));
  const your=upcoming.filter(event=>state.registered.has(event.id));
  const more=upcoming.filter(event=>!state.registered.has(event.id));
  const attended=events.filter(event=>isPastEvent(event)&&memberAttendedEvent(event.id)).sort((a,b)=>eventDateValue(b)-eventDateValue(a));
  const otherPast=events.filter(event=>isPastEvent(event)&&!memberAttendedEvent(event.id)).sort((a,b)=>eventDateValue(b)-eventDateValue(a));
  const nextRegistered=your[0],additionalRegistered=your.slice(1),shownYour=state.eventPlansExpanded?additionalRegistered:additionalRegistered.slice(0,3),shownMore=state.eventUpcomingExpanded?more:more.slice(0,3),shownPast=state.eventPastExpanded?otherPast:otherPast.slice(0,3);
  const hiddenYour=Math.max(0,additionalRegistered.length-3),hiddenUpcoming=Math.max(0,more.length-3),hiddenPast=Math.max(0,otherPast.length-3);
  const yourSection=nextRegistered?`<section class="hss-events-section your-events-section"><div class="section-row"><div><h2>Your events</h2><p class="small muted">Your next confirmed registration and any other upcoming plans.</p></div></div>${featuredRegisteredEvent(nextRegistered)}${shownYour.length?`<div class="hss-event-list additional-registered-events">${shownYour.map(event=>hssEventRow(event,'your')).join('')}</div>`:''}${additionalRegistered.length>3?`<button class="text-button event-expand" onclick="toggleEventList('your')">${state.eventPlansExpanded?`Show fewer ${icons.chevronUp}`:`Show more (${hiddenYour}) ${icons.chevronDown}`}</button>`:''}</section>`:'';
  const attendedSection=attended.length?`<section class="hss-events-section"><div class="section-row"><div><h2>Past events you attended</h2><p class="small muted">Past registrations and available event materials.</p></div></div><div class="hss-event-list">${attended.map(event=>hssEventRow(event,'attended')).join('')}</div></section>`:'';
  return shell(`<main class="page events-page hss-only-events"><header class="compact-page-head"><h1>Events</h1><p>Register for formal HSS sessions and revisit events you attended.</p></header>${yourSection}<section class="hss-events-section"><div class="section-row"><div><h2>More upcoming events</h2><p class="small muted">Other HSS sessions open to verified community members.</p></div></div><div class="hss-event-list grouped-event-list">${groupedEventRows(shownMore,'upcoming')}</div>${more.length>3?`<button class="text-button event-expand" onclick="toggleEventList('upcoming')">${state.eventUpcomingExpanded?`Show fewer ${icons.chevronUp}`:`Show more (${hiddenUpcoming}) ${icons.chevronDown}`}</button>`:''}</section>${attendedSection}<section class="hss-events-section"><div class="section-row"><div><h2>Other past events</h2><p class="small muted">Previous HSS sessions you can still view.</p></div></div><div class="hss-event-list">${shownPast.map(event=>hssEventRow(event,'past')).join('')}</div>${otherPast.length>3?`<button class="text-button event-expand" onclick="toggleEventList('past')">${state.eventPastExpanded?`Show fewer ${icons.chevronUp}`:`Show more (${hiddenPast}) ${icons.chevronDown}`}</button>`:''}</section>${eventReturnDialog()}</main>`,'events');
}
function toggleEventList(type){const y=window.scrollY;if(type==='your')state.eventPlansExpanded=!state.eventPlansExpanded;else if(type==='upcoming')state.eventUpcomingExpanded=!state.eventUpcomingExpanded;else state.eventPastExpanded=!state.eventPastExpanded;render();const collapsed=type==='your'?!state.eventPlansExpanded:type==='upcoming'?!state.eventUpcomingExpanded:!state.eventPastExpanded;if(collapsed)requestAnimationFrame(()=>window.scrollTo({top:y,behavior:'auto'}));}

function pastEventsScreen(){
  const past=events.filter(event=>event.status==='Past');
  return shell(`<main class="page"><button class="back-button" onclick="backToEvents()">${icons.back} Back to Events</button><header class="compact-page-head"><h1>Past recordings</h1><p>Revisit recent HSS sessions and shared materials.</p></header><div class="past-recording-list">${past.map(pastRecordingRow).join('')}</div></main>`,'events');
}

function communityActivitiesScreen(){
  return shell(`<main class="page"><button class="back-button" onclick="backToEvents()">${icons.back} Back to Events</button><header class="compact-page-head page-head-actions"><div><h1>Community activities</h1><p>Member-organised meetups and casual open jios.</p></div>${contextualCreateAction('Create activity','meetupCreate')}</header><div class="community-safety-note">${icons.info}<span>Community activities are organised by members and are not medical assistance.</span></div><div class="section-row"><h2>Upcoming activities</h2></div><div class="event-action-grid">${communityActivities.map(communityActivityListCard).join('')}</div></main>`,'events');
}

function openCommunityActivities(){state.eventView='upcoming';go('events');}

function eventDetailScreen(){
  const event=events.find(x=>x.id===state.selectedEvent)||events[0];
  const registered=state.registered.has(event.id),past=isPastEvent(event),attended=memberAttendedEvent(event.id),closed=registrationClosed(event),related=eventResourcesFor(event.id);
  const [day,month]=event.date.split(' ');
  const stateLabel=past?(attended?'You attended':'Event ended'):registered?"You’re going":closed?'Registration closed':'Registration open';
  const tone=registered||attended?'active':past||closed?'complete':'info';
  let primary='',stickyPrimary='';
  if(!past&&registered)primary=`<button class="button button-secondary" onclick="startEventExternalFlow('${event.id}','manage')">Manage registration ${icons.external}</button>`;
  else if(!past&&!closed){
    primary=`<button class="button button-primary desktop-event-register" onclick="startEventExternalFlow('${event.id}','register')">Register ${icons.external}</button>`;
    stickyPrimary=`<div class="event-sticky-action"><button class="button button-primary" onclick="startEventExternalFlow('${event.id}','register')">Register for this event ${icons.external}</button></div>`;
  }
  else if(past&&related.length)primary=`<button class="button button-secondary" onclick="document.querySelector('#event-resources')?.scrollIntoView({behavior:'smooth'})">${icons.file} View resources</button>`;
  const resourceSection=related.length?`<section class="event-resources-section" id="event-resources"><div class="section-row"><div><h2>Resources from this event</h2><p class="small muted">Published materials available to all verified members.</p></div>${related.length>1?`<button class="text-button section-link" onclick="openEventResourceLibrary('${event.id}')"><span>See all resources</span>${icons.arrow}</button>`:''}</div><div class="resource-list">${related.map(resource=>resourceRow(resource,{eventDetail:true})).join('')}</div></section>`:'';
  const privateAccess=!past&&registered&&event.privateOnlineUrl?`<a class="private-event-access" href="${event.privateOnlineUrl}" target="_blank" rel="noopener noreferrer">${icons.lock}<span><strong>Private online access</strong><small>Visible because you confirmed registration</small></span>${icons.external}</a>`:'';
  const stateCopy=past?(attended?'Your confirmed registration is recorded as attendance.':'This HSS event has ended.'):registered?'This event is in Your events.':closed?'The registration deadline has passed.':'Registration takes place on an external HSS website.';
  queueMicrotask(()=>loadCommentsInto('event',event.id));
  return shell(`<main class="detail-page event-detail-page hss-event-detail ${stickyPrimary?'has-sticky-event-action':''}"><div class="mobile-detail-bar"><button class="icon-button" aria-label="Back" onclick="backFromDetail()">${icons.back}</button><strong>Event details</strong><button class="icon-button" aria-label="Share event" onclick="shareItem()">${icons.share}</button></div><div class="event-detail-column"><button class="back-button desktop-detail-back" onclick="backFromDetail()">${icons.back} Back to Events</button><div class="event-detail-cover ${event.mode.toLowerCase()}"><div class="event-cover-brand"><span class="event-cover-mark">HSS</span><span>Haemophilia Society of Singapore</span></div><div class="event-cover-content"><span class="event-cover-type">${event.type}</span><h2>${event.title}</h2><div class="event-cover-date"><strong>${day}</strong><span>${month}<br>2026</span></div></div></div><header class="event-detail-intro"><div class="card-signals">${sourceBadge('HSS',true)}${statusBadge(stateLabel,tone)}</div><h1>${event.title}</h1><div class="event-key-details"><div>${icons.calendar}<span><strong>${event.date}</strong><small>${event.time}</small></span></div><div>${eventPlaceIcon(event)}<span><strong>${event.mode}</strong><small>${eventVenueLabel(event)}</small></span></div></div><p class="event-state-copy">${stateCopy}</p><div class="event-cta">${primary}${registered&&!past?`<button class="button button-secondary" onclick="addEventToCalendar('${event.id}')">${icons.calendar} Add to calendar</button>`:''}<button class="button button-ghost desktop-event-share" onclick="shareItem()">${icons.share} Share</button></div></header>${privateAccess}<section class="event-organiser-row">${icons.shield}<p><strong>Organised by</strong><span>${event.host}</span></p></section>${past?resourceSection:''}<section class="event-info-section event-description event-description-compact"><h2>About this event</h2><p>${event.description}</p><span class="event-audience-line">For ${event.audience} · ${event.stage}</span></section>${past?'':resourceSection}${eventDiscussion(event.id)}</div>${stickyPrimary}${eventReturnDialog()}</main>`,'events');
}
function openEventResourceLibrary(eventId){state.resourceEventFilter=eventId;state.resourceSearch='';state.resourceSource='All';state.resourceFormat='All formats';state.resourceSort='latest';state.resourceVisible=4;go('resourcesLibrary');}
function startEventExternalFlow(eventId,type){const event=events.find(item=>item.id===eventId);if(!event)return;state.eventReturnFlow={eventId,type,startedAt:Date.now()};state.eventReturnDialog=false;const url=type==='manage'?(event.manageUrl||event.registrationUrl):event.registrationUrl;window.open(url,'_blank','noopener,noreferrer');}
function handleEventJourneyReturn(){if(!state.eventReturnFlow||state.eventReturnDialog||Date.now()-state.eventReturnFlow.startedAt<500)return;state.eventReturnDialog=true;render();activateOverlay('.event-return-dialog',null);}
function eventReturnDialog(){if(!state.eventReturnDialog||!state.eventReturnFlow)return'';const manage=state.eventReturnFlow.type==='manage';return `<div class="event-return-backdrop" role="presentation"><section class="event-return-dialog" role="dialog" aria-modal="true" aria-labelledby="event-return-title"><div class="modal-icon">${icons.external}</div><h2 id="event-return-title">${manage?'Did you cancel your registration?':'Did you register for this event?'}</h2><p>${manage?'The change took place on an external website. Let us know whether to remove it from Your events.':'The registration took place on an external website. Let us know so we can add it to Your events.'}</p><div class="modal-actions"><button class="button button-primary" onclick="confirmEventReturn(true)">${manage?'Yes, remove from Your events':'Yes, I registered'}</button><button class="button button-outline" onclick="confirmEventReturn(false)">${manage?'No, keep it':'Not yet'}</button></div></section></div>`;}
async function confirmEventReturn(yes){
  const flow=state.eventReturnFlow;
  if(!flow)return;
  state.eventReturnDialog=false;state.eventReturnFlow=null;releaseOverlay();render();
  if(!yes)return;
  try{
    if(flow.type==='register'){
      await api('PUT',`/events/${encodeURIComponent(flow.eventId)}/registration`);
      state.registered.add(flow.eventId);state.cancelledRegistrations.delete(flow.eventId);
    } else {
      await api('DELETE',`/events/${encodeURIComponent(flow.eventId)}/registration`);
      state.registered.delete(flow.eventId);state.attendedEvents.delete(flow.eventId);state.cancelledRegistrations.add(flow.eventId);
    }
    render();
    toast(flow.type==='register'?'Added to Your events.':'Removed from Your events.');
  }catch(err){
    toast('Could not update your registration');
  }
}
function addEventToCalendar(id){const event=events.find(item=>item.id===id);if(!event||!state.registered.has(id))return;const stamp=value=>new Date(value).toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');const detailUrl=`${location.origin}${location.pathname}#/eventDetail/${encodeURIComponent(id)}`;const body=['BEGIN:VCALENDAR','VERSION:2.0','BEGIN:VEVENT',`DTSTART:${stamp(event.start)}`,`DTEND:${stamp(event.end)}`,`SUMMARY:${event.title}`,`LOCATION:${eventVenueLabel(event)}`,`DESCRIPTION:${event.description.replace(/,/g,'\\,')} ${detailUrl}`,`URL:${detailUrl}`,'END:VEVENT','END:VCALENDAR'].join('\r\n');const link=document.createElement('a');link.href=URL.createObjectURL(new Blob([body],{type:'text/calendar'}));link.download=`${id}.ics`;link.click();setTimeout(()=>URL.revokeObjectURL(link.href),0);toast('Calendar file prepared');}
function eventDiscussion(targetId){return `<section class="event-discussion" data-target-type="event" data-target-id="${targetId}"><div class="comments-title"><div><h2>Discussion</h2><p class="small muted">Questions and updates about this event</p></div></div><div class="event-comment-list comment-list"><p class="small muted">Loading comments…</p></div><div class="comment-composer inline-composer"><span class="comment-avatar">${accessValue(memberAvatar())}</span><input class="input" aria-label="Add a comment" placeholder="Add a comment…"/><button class="button button-primary" aria-label="Post comment" onclick="postComment(this)">${icons.arrow}</button></div></section>`;}
function setButtonLoading(button,label){if(!button)return;button.disabled=true;button.setAttribute('aria-busy','true');button.dataset.originalLabel=button.textContent;button.textContent=label;}
function registerEvent(id){startEventExternalFlow(id,'register');}
function submitAmaQuestion(){const input=document.querySelector('#ama-question');if(!input?.value.trim()){toast('Write your question first');input?.focus();return;}input.value='';toast('Your question was submitted for moderation');}

function connectScreen(){
  return shell(`<main class="page connect-page"><header class="compact-page-head"><h1>Connect</h1><p>Join a caregiver group or find practical support from the HSS community.</p></header>${communityConnectionsView()}${practicalHelpView()}${externalModal()}</main>`,'connect');
}
function groupConnectionCard(group){
  const availability=group.full?'Group currently full':group.members.startsWith('4')?'1 space left':'Spaces available';
  return `<article class="card community-group-card"><div class="community-group-main"><div><div class="card-signals">${statusBadge(availability,group.full?'complete':group.members.startsWith('4')?'attention':'active')}</div><h3>${group.name}</h3><p>${group.description}</p>${metadataLine([group.kind,group.audience,group.members])}</div><button class="button ${group.full?'button-outline':'button-primary'}" ${group.full?'disabled aria-disabled="true"':`onclick="openExternal('${group.id}',this)"`}>${group.full?'Group full':'Join group'}</button></div></article>`;
}
function communityConnectionsView(){
  return `<section class="connect-section" id="community-groups"><div class="section-row"><div><h2>Community groups</h2><p class="small muted">Join an ongoing WhatsApp group for caregivers at a similar life stage.</p></div></div><div class="community-group-grid">${groups.slice(0,3).map(groupConnectionCard).join('')}</div></section>`;
}

function practicalHelpView(){
  if(!state.helpServiceAvailable) return `<section class="card empty help-unavailable"><div class="empty-icon">${icons.shield}</div><h2>Practical help is temporarily unavailable</h2><p>HSS has paused new requests while the pilot is reviewed. Existing connections can still be closed or reported.</p><button class="button button-outline" onclick="toast('HSS contact guidance opened')">Contact HSS</button></section>`;
  const currentStatus=state.helpStatus==='fulfilled'?'Fulfilled':state.helpStatus==='cancelled'?'Cancelled':state.helpStatus==='connected'?'Connected':state.volunteerOffer||state.helpStatus==='offered'?'Offer received':'Finding volunteers';
  const activeTone=['Finding volunteers','Connected'].includes(currentStatus)?'active':currentStatus==='Offer received'?'attention':'complete';
  return `<section class="connect-section practical-help-section" id="practical-help"><div class="section-row"><div><h2>Practical Help</h2><p class="small muted">Request non-medical, practical assistance or volunteer to help someone nearby.</p></div></div><div class="help-boundaries compact-safety"><strong>Not for medical emergencies</strong><span>Volunteers are community members, not healthcare professionals. Help is not guaranteed.</span></div><div class="help-action-grid"><article class="card help-action-card"><span class="topic-icon">${icons.plus}</span><div><h3>Request practical help</h3><p>Describe the non-medical assistance you need and start with a short safety check.</p></div><button class="button button-primary" onclick="startHelpRequest()">Start a request</button></article><article class="card help-action-card"><span class="topic-icon">${icons.people}</span><div><h3>Volunteer to help</h3><p>Choose the types of assistance, general areas, and times that work for you.</p></div><button class="button button-primary" onclick="go('helpPreferences')">Set availability</button></article></div></section>${state.helpStatus?`<section class="connect-section your-requests" id="your-requests"><div class="section-row"><div><h2>Your requests</h2><p class="small muted">Only general information is shown.</p></div></div><div class="help-request-list"><article class="card help-request-card" tabindex="0" onclick="go('helpRequest','active')"><div class="help-request-head"><div class="card-signals">${statusBadge(currentStatus,activeTone)}</div></div><h3>Near Tampines MRT</h3>${metadataLine(['Collection or delivery','Within 3 hours'])}<p>${state.volunteerOffer?'One offer received':'No offer received yet'}</p><div class="help-card-footer"><span>${icons.people} ${state.volunteerOffer?'Review the offer':'Finding nearby volunteers'}</span>${icons.arrow}</div></article><article class="card help-request-card expired" tabindex="0" onclick="go('helpRequest','expired')"><div class="help-request-head"><div class="card-signals">${statusBadge('Expired','complete')}</div></div><h3>Near Punggol</h3>${metadataLine(['Other approved assistance','No offer'])}<p>Previous request · Closed automatically</p><div class="help-card-footer"><span>${icons.info} Private details were not shared</span>${icons.arrow}</div></article></div></section>`:''}`;
}

function startHelpRequest(){state.helpStep=1;go('helpCreate');}

function helpCreateScreen(){
  const steps=`<div class="stepper help-stepper" aria-label="Step ${state.helpStep} of 3"><span class="step-dot active"></span><span class="step-dot ${state.helpStep>1?'active':''}"></span><span class="step-dot ${state.helpStep>2?'active':''}"></span></div>`;
  let body='';
  if(state.helpStep===1) body=`<div class="eyebrow">Step 1 of 3 · Required safety check</div><h1>Could this be a medical emergency?</h1><p class="lede">Community volunteers must never assess whether a situation is medically safe.</p>${steps}<div class="emergency-check">${icons.info}<div><strong>If anyone may be in immediate danger, do not continue with this request.</strong><p>Contact your local emergency service now. Do not wait for a community response.</p></div></div><div class="choice-grid safety-choices"><button class="choice-card danger-choice" onclick="showEmergencyStop()"><strong>Yes or I’m unsure</strong><span>Stop this request and show official emergency guidance.</span></button><button class="choice-card" onclick="state.helpStep=2;render()"><strong>No</strong><span>I need non-medical practical assistance.</span></button></div><div class="policy-note"><strong>Not allowed</strong><span>Medication or treatment-product transfer, regulated-device lending, infusions, medical advice, or deciding whether professional care is needed.</span></div><div class="form-actions"><button class="button button-ghost" onclick="state.connectView='help';go('connect')">Cancel</button></div>`;
  if(state.helpStep===2) body=`<div class="eyebrow">Step 2 of 3 · Request details</div><h1>What practical help do you need?</h1>${steps}<div class="field"><label for="help-type">Type of assistance</label><select class="select" id="help-type"><option>Collection or delivery</option><option>Finding permitted household supplies</option><option>In-person practical support</option><option>Other non-medical assistance</option></select></div><div class="search-filter-grid"><div class="field"><label for="help-area">General area or nearby MRT</label><input class="input" id="help-area" value="Near Tampines MRT"/><p class="field-hint">Do not enter an exact address.</p></div><div class="field"><label for="help-time">How soon?</label><select class="select" id="help-time"><option>Within 3 hours</option><option>Today</option><option>Tomorrow</option><option>This week</option></select></div><div class="field"><label for="help-contact">Preferred contact after matching</label><select class="select" id="help-contact"><option>WhatsApp</option><option>Phone call</option><option>SMS</option></select></div></div><div class="field"><label for="help-description">Short description</label><textarea class="textarea" id="help-description" style="min-height:105px">I need help collecting a permitted household item from a shop near the MRT.</textarea><p class="field-hint">Do not include names, phone numbers, diagnoses, exact addresses or medical details.</p></div><div class="privacy-note">${icons.lock}<span>Only the category, general area, timing and this short description are visible to eligible volunteers.</span></div><div class="form-actions"><button class="button button-ghost" onclick="state.helpStep=1;render()">${icons.back} Back</button><button class="button button-primary" onclick="state.helpStep=3;render()">Review request ${icons.arrow}</button></div>`;
  if(state.helpStep===3) body=`<div class="eyebrow">Step 3 of 3 · Review</div><h1>Check your request</h1>${steps}<div class="review-block"><p class="small muted">Assistance</p><strong>Collection or delivery</strong></div><div class="review-block"><p class="small muted">Visible to eligible volunteers</p><div class="event-facts"><div class="event-fact">${icons.compass}<div><strong>Near Tampines MRT</strong>General area only</div></div><div class="event-fact">${icons.calendar}<div><strong>Within 3 hours</strong>Request expires automatically</div></div></div><p>I need help collecting a permitted household item from a shop near the MRT.</p></div><div class="help-boundaries"><strong>No response is guaranteed.</strong><span>Volunteers may decline or withdraw. HSS does not continuously monitor requests.</span></div><label class="filter-check consent-check"><input type="checkbox" id="help-confirm"/> I confirm this is non-medical practical help and contains no private contact or location details.</label><div class="form-actions"><button class="button button-ghost" onclick="state.helpStep=2;render()">${icons.back} Edit</button><button class="button button-primary" onclick="publishHelpRequest()">Publish request</button></div>`;
  return shell(`<main class="page create-shell"><button class="back-button" onclick="state.connectView='help';go('connect')">${icons.back} Back to Practical help</button><section class="card form-card help-form">${body}</section></main>`,'connect');
}

function showEmergencyStop(){document.querySelector('.help-form').innerHTML=`<div class="emergency-stop"><div class="empty-icon">${icons.info}</div><div class="eyebrow">Stop this request</div><h1>Use official emergency support</h1><p>If anyone may be in immediate danger, contact the official emergency service now. Do not wait for a community volunteer.</p><div class="help-boundaries"><strong>Do not continue here</strong><span>This community service cannot provide emergency or medical support.</span></div><button class="button button-outline" onclick="state.helpStep=1;render()">Back to safety check</button></div>`;}
function publishHelpRequest(){const check=document.querySelector('#help-confirm');if(!check?.checked){toast('Confirm the non-medical safety statement first');check?.focus();return;}state.helpStatus='open';state.helpStep=1;state.connectView='help';toast('Request published to eligible volunteers');setTimeout(()=>go('helpRequest','active'),450);}

function helpVolunteerScreen(){
  return shell(`<main class="page page-narrow"><button class="back-button" onclick="state.connectView='help';go('connect')">${icons.back} Back to Practical help</button><header class="page-head"><h1>Nearby practical-help requests</h1><p class="lede">Only offer help you can safely provide as a general community member.</p></header><div class="help-boundaries"><strong>Volunteers do not provide medical care.</strong><span>You may decline without explanation or withdraw before the requester accepts. Declines are never shown publicly.</span></div><div class="filter-summary">${metadataLine(['Collection or delivery','Tampines','Available today'])}<button class="text-button" onclick="go('helpPreferences')">Edit availability</button></div><article class="card help-match-card"><p class="match-note">General-area match</p><div class="card-signals">${statusBadge('Open','active')}</div><h2>Collect a permitted household item</h2>${metadataLine(['Collection or delivery','Tampines','Within 3 hours'])}<p class="muted">I need help collecting a permitted household item from a shop near the MRT.</p><div class="event-facts"><div class="event-fact">${icons.compass}<div><strong>Near Tampines MRT</strong>Exact location remains private</div></div><div class="event-fact">${icons.people}<div><strong>Posted by SunlitKoi</strong>Verified HSS community member</div></div></div><div class="policy-note"><strong>Before offering</strong><span>Do not ask for diagnoses, treatment details or an exact address. More precise contact information is shared only after mutual agreement.</span></div><div class="event-cta"><button class="button button-primary" onclick="offerHelp()">Offer to help</button><button class="button button-outline" onclick="toast('Request hidden from your list. The requester is not notified.')">Decline privately</button></div></article><section class="card empty compact-empty"><div class="empty-icon">${icons.compass}</div><h3>No other requests match your areas</h3><p>We’ll only show approved categories in the general areas and times you selected.</p></section></main>`,'connect');
}

function offerHelp(){state.volunteerOffer=true;state.helpStatus='offered';toast('Offer sent. You can withdraw until it is accepted.');setTimeout(()=>go('helpRequest','active'),450);}

function helpRequestScreen(){
  const expired=state.selectedHelpRequest==='expired';
  if(expired) return shell(`<main class="page page-narrow"><button class="back-button" onclick="state.connectView='help';go('connect')">${icons.back} Back to Practical help</button><article class="card event-hero"><div class="card-signals">${statusBadge('Expired','complete')}</div><h1>Short errand near Punggol</h1><p class="lede">No volunteer responded before the request expired.</p>${metadataLine(['Other approved assistance','Punggol','No response'])}<div class="help-timeline"><div class="timeline-item done"><strong>Request published</strong><span>General area only</span></div><div class="timeline-item done"><strong>Matching ended</strong><span>No offer received · Private details were never shared</span></div></div><div class="help-boundaries"><strong>A response is never guaranteed.</strong><span>If the need remains, edit the timing or category and publish a new request. Do not use this service for emergencies.</span></div><div class="event-cta"><button class="button button-primary" onclick="state.helpStep=2;go('helpCreate')">Edit and request again</button><button class="button button-outline" onclick="state.connectView='help';go('connect')">Close</button></div></article></main>`,'connect');
  const connected=state.helpStatus==='connected', fulfilled=state.helpStatus==='fulfilled', offered=state.volunteerOffer||state.helpStatus==='offered';
  return shell(`<main class="page page-narrow"><button class="back-button" onclick="state.connectView='help';go('connect')">${icons.back} Back to Practical help</button><article class="card event-hero"><div class="help-request-head"><div class="card-signals">${statusBadge(fulfilled?'Fulfilled':connected?'Connected':offered?'Offer received':'Open',fulfilled?'complete':offered?'attention':'active')}</div></div><h1>Collect a permitted household item</h1><p class="lede">I need help collecting a permitted household item from a shop near the MRT.</p>${metadataLine(['Collection or delivery','Near Tampines MRT','Within 3 hours','Expires today'])}<div class="event-facts"><div class="event-fact">${icons.compass}<div><strong>Near Tampines MRT</strong>${connected?'More details shared privately':'General area only'}</div></div><div class="event-fact">${icons.calendar}<div><strong>Within 3 hours</strong>Preferred contact after matching: WhatsApp</div></div></div><div class="help-timeline"><div class="timeline-item done"><strong>Request published</strong><span>Eligible nearby volunteers notified</span></div><div class="timeline-item ${offered?'done':''}"><strong>${offered?'RiverBird offered to help':'Waiting for an offer'}</strong><span>${offered?'Volunteer agreed to share contact after acceptance':'No response is guaranteed'}</span></div><div class="timeline-item ${connected||fulfilled?'done':''}"><strong>${connected||fulfilled?'Both people agreed to connect':'Mutual agreement required'}</strong><span>${connected||fulfilled?'Private contact is now visible to both people':'Nothing more precise is shared yet'}</span></div></div>${!offered?`<div class="registration-success">${icons.info}<span><strong>Finding nearby volunteers.</strong><br/>You’ll be notified if someone offers. The request closes automatically if it expires.</span></div><button class="button button-outline" style="margin-top:12px" onclick="state.volunteerOffer=true;state.helpStatus='offered';render()">Preview an offer</button>`:''}${offered&&!connected&&!fulfilled?`<section class="offer-card"><div class="author"><span class="author-avatar">RB</span><div><div class="author-name">RiverBird</div><div class="meta">Eligible community volunteer · Tampines area</div></div></div><p>“I can help with this collection this afternoon.”</p><div class="privacy-note">${icons.lock}<span>RiverBird has agreed to connect. Accepting is your explicit agreement; only then will contact details be revealed.</span></div><div class="event-cta"><button class="button button-primary" onclick="acceptHelpOffer()">Accept and agree to connect</button><button class="button button-outline" onclick="toast('Offer declined privately')">Decline offer</button></div></section>`:''}${connected&&!fulfilled?`<section class="connected-card"><div class="eyebrow">Private connection · Both agreed</div><h2>Contact RiverBird</h2><p class="small muted">Shown only to SunlitKoi and RiverBird.</p><div class="contact-reveal"><strong>WhatsApp ending 8821</strong><span>Exact collection details can now be agreed privately.</span></div><div class="event-cta"><button class="button button-primary" onclick="state.helpStatus='fulfilled';render();toast('Request marked fulfilled')">Mark fulfilled</button><button class="button button-outline" onclick="cancelHelpRequest()">Cancel request</button></div><button class="button button-ghost" onclick="toast('Contact ended. Private details are no longer available in the request.')">End contact</button></section>`:''}${fulfilled?`<section class="registration-success">${icons.shield}<span><strong>Request fulfilled.</strong><br/>The public request is closed and no volunteer rating is collected.</span></section>`:''}<div class="action-bar"><button class="button button-ghost" onclick="openHelpReport()">${icons.flag} Contact HSS about a concern</button>${!fulfilled?`<button class="button button-ghost" onclick="cancelHelpRequest()">${icons.x} Cancel request</button>`:''}</div></article>${helpReportModal()}</main>`,'connect');
}

function acceptHelpOffer(){state.helpStatus='connected';render();toast('Mutual agreement complete. Contact details are now shared privately.');}
function cancelHelpRequest(){state.helpStatus='cancelled';state.connectView='help';toast('Request cancelled and matching stopped');setTimeout(()=>go('connect'),350);}

function helpPreferencesScreen(){
  return shell(`<main class="page page-narrow"><button class="back-button" onclick="state.connectView='help';go('connect')">${icons.back} Back to Practical help</button><header class="page-head"><h1>Set your availability</h1><p class="lede">Choose the practical assistance, general areas, and times that work for you.</p></header><div class="help-boundaries"><strong>Non-medical help only</strong><span>Do not offer medication or treatment-product transfer, device lending, infusions, medical advice, or medical-safety decisions.</span></div><section class="card settings-section"><h2>Types of assistance</h2><div class="preference-list">${['Collection or delivery','Finding permitted household supplies','In-person practical support','Other HSS-approved assistance'].map((x,i)=>`<div class="preference-card"><div><strong>${x}</strong><span>${i<2?'Available':'Not selected'}</span></div><button class="switch ${i<2?'on':''}" role="switch" aria-checked="${i<2}" onclick="toggleSwitch(this)"></button></div>`).join('')}</div></section><section class="card settings-section"><h2>General areas and times</h2><div class="chips">${['Tampines','Bedok','Punggol','Jurong East'].map((x,i)=>`<button class="chip ${i<2?'selected':''}" onclick="this.classList.toggle('selected')">${x}</button>`).join('')}</div><div class="field" style="margin-top:17px"><label for="volunteer-time">When are you usually available?</label><select class="select" id="volunteer-time"><option>Weekday afternoons</option><option>Weekday evenings</option><option>Weekends</option><option>Varies</option></select></div><div class="preference-card"><div><strong>Matching alerts</strong><span>Only for selected categories, areas and times</span></div><button class="switch on" role="switch" aria-checked="true" onclick="toggleSwitch(this)"></button></div></section><div class="privacy-preview"><strong>Safe alert preview</strong><p>“A practical-help request matches your selected area.” No diagnosis, exact address or private details are shown.</p></div><div class="form-actions"><button class="button button-ghost" onclick="state.connectView='help';go('connect')">Cancel</button><button class="button button-primary" onclick="toast('Volunteer availability saved');setTimeout(()=>go('helpVolunteer'),350)">Save availability</button></div></main>`,'connect');
}

function helpReportModal(){return `<div class="external-modal" id="help-report-modal" role="dialog" aria-modal="true" aria-labelledby="help-report-title"><div class="modal-card"><div class="modal-icon">${icons.flag}</div><h2 id="help-report-title">Contact HSS about a concern</h2><p class="muted">Tell HSS if this connection involves unsafe behaviour, private information, or medical activity.</p><div class="preference-list"><label class="filter-check"><input type="radio" name="help-report" checked/> Medical advice or treatment activity</label><label class="filter-check"><input type="radio" name="help-report"/> Unsafe or inappropriate behaviour</label><label class="filter-check"><input type="radio" name="help-report"/> Private information was requested</label><label class="filter-check"><input type="radio" name="help-report"/> Something else</label></div><div class="modal-actions"><button class="button button-primary" onclick="submitHelpReport()">Send concern and end contact</button><button class="button button-outline" onclick="closeHelpReport()">Cancel</button></div></div></div>`;}
function openHelpReport(trigger=document.activeElement){const modal=document.querySelector('#help-report-modal');modal.classList.add('open');markOverlayTrigger(trigger);activateOverlay('#help-report-modal .modal-card','[data-overlay-return="true"]');}
function closeHelpReport(){document.querySelector('#help-report-modal')?.classList.remove('open');releaseOverlay();}
function submitHelpReport(){closeHelpReport();state.helpStatus='reported';toast('Contact ended and report sent to HSS for review');}
function externalModal(){return `<div class="external-modal" id="external-modal" role="dialog" aria-modal="true" aria-labelledby="external-title"><div class="modal-card"><div class="modal-icon">${icons.arrow}</div><h2 id="external-title">Open WhatsApp?</h2><p class="muted">WhatsApp will open. Your WhatsApp name, phone number, and profile image may be visible to group members.</p><div class="privacy-note">${icons.info}<span>Haemily privacy settings do not apply inside WhatsApp.</span></div><div class="modal-actions"><button class="button button-primary" onclick="confirmExternal()">Continue to WhatsApp</button><button class="button button-outline" onclick="closeExternal()">Stay here</button></div></div></div>`;}
function openExternal(id,trigger){const modal=document.querySelector('#external-modal');modal.dataset.group=id;modal.classList.add('open');markOverlayTrigger(trigger);activateOverlay('#external-modal .modal-card','[data-overlay-return="true"]');}
function closeExternal(){document.querySelector('#external-modal')?.classList.remove('open');releaseOverlay();}
function confirmExternal(){closeExternal();toast('WhatsApp would open in a new app');}

function meetupDetailScreen(){
  const activity=communityActivities.find(item=>item.id===state.selectedActivity)||communityActivities[0];
  const joined=state.joinedActivities.has(activity.id); const [day,month]=activity.date.split(' ');
  const action=joined?`<button class="button button-primary" onclick="openExternal('meetup-group',this)">Contact host</button>`:`<button class="button button-primary" onclick="joinDetailActivity('${activity.id}',this)">Join activity</button>`;
  return shell(`<main class="detail-page event-detail-page community-detail-page">${mobileDetailBar(`toast('Activity saved')`)}<div class="reading-column"><button class="back-button desktop-detail-back" onclick="backFromDetail()">${icons.back} Back</button><header class="event-detail-header"><div class="event-detail-date community-date"><span>${month}</span><strong>${day}</strong></div><div class="event-detail-heading"><div class="card-signals">${sourceBadge('Community activity')}${statusBadge(joined?'Joined':'Upcoming',joined?'active':'info')}</div><h1>${activity.title}</h1><p class="lede">${activity.description}</p></div></header><section class="event-detail-facts"><div>${icons.calendar}<span><strong>${activity.date} · ${activity.time}</strong>Date and time</span></div><div>${icons.compass}<span><strong>${activity.location}</strong>Exact meeting point shared after joining</span></div><div>${icons.people}<span><strong>${activity.audience}</strong>${activity.type}</span></div><div>${icons.profile}<span><strong>${activity.organiser}</strong>Community organiser</span></div></section><div class="participation-row"><strong>${joined?'You joined this activity':'4 people joined'}</strong><span>${joined?'This activity is in Your plans.':'Spaces are confirmed by the organiser.'}</span></div><div class="location-note">${icons.info}<span>This is a social community activity organised by a member. It is not medical assistance and is not managed or continuously monitored by HSS.</span></div><div class="event-cta">${action}<button class="button button-outline" onclick="toast('Activity saved')">${icons.bookmark} Save</button><button class="button button-ghost" onclick="shareItem()">${icons.share} Share</button><button class="button button-ghost" onclick="openReport(this)">${icons.flag} Report</button></div>${eventDiscussion('activity')}<section class="collection-section"><div class="section-row"><div><h2>Related content</h2><p class="small muted">Useful guidance for community activities</p></div></div>${contentCard(content.find(item=>item.id==='travel-checklist'),true)}</section></div>${externalModal()}${reportModal()}</main>`,'events');
}
function joinDetailActivity(id,button){setButtonLoading(button,'Joining…');setTimeout(()=>{state.joinedActivities.add(id);render();toast('Activity added to Your plans');},300);}

function meetupCreateScreen(){
  const steps=`<div class="stepper" aria-label="Step ${state.meetupStep} of 2"><span class="step-dot active"></span><span class="step-dot ${state.meetupStep>1?'active':''}"></span></div>`;
  let body='';
  if(state.meetupStep===1) body=`<div class="eyebrow">Step 1 of 2</div><h1>Create a community activity</h1><p class="lede">Meetups and open jios can be posted directly and remain reportable to HSS.</p>${steps}<div class="choice-grid activity-type-choices"><button class="choice-card ${state.meetupType==='Meetup'?'selected':''}" onclick="state.meetupType='Meetup';render()"><strong>Meetup</strong><span>A planned small-group activity with a clear audience.</span></button><button class="choice-card ${state.meetupType==='Open jio'?'selected':''}" onclick="state.meetupType='Open jio';render()"><strong>Open jio</strong><span>A casual invitation others can choose to join.</span></button></div><div class="location-note">${icons.compass}<span>Use only a broad area or nearby MRT station. Never post a home address.</span></div><div class="form-actions"><button class="button button-ghost" onclick="state.eventView='upcoming';go('events')">Cancel</button><button class="button button-primary" onclick="state.meetupStep=2;render()">Continue ${icons.arrow}</button></div>`;
  if(state.meetupStep===2) body=`<div class="eyebrow">Step 2 of 2 · ${state.meetupType}</div><h1>Activity details</h1>${steps}<div class="field"><label for="meetup-title">Title</label><input class="input" id="meetup-title" value="Weekend walk and kopi"/></div><div class="field"><label for="meetup-description">Description</label><textarea class="textarea" id="meetup-description" style="min-height:105px">A casual morning walk for caregivers to meet and chat.</textarea></div><div class="search-filter-grid"><div class="field"><label for="meetup-date">Date and time</label><input class="input" id="meetup-date" value="10 Oct 2026, 9:00 AM"/></div><div class="field"><label for="meetup-location">General area or MRT</label><input class="input" id="meetup-location" value="Near Bedok MRT"/></div><div class="field"><label for="meetup-capacity">Capacity <span class="muted">(optional)</span></label><input class="input" id="meetup-capacity" placeholder="e.g. 10 people"/></div></div><div class="field"><label for="meetup-audience">Intended audience</label><select class="select" id="meetup-audience"><option>All adult caregivers</option><option>Primary school caregivers</option><option>Teen years caregivers</option></select></div><div class="field"><label for="meetup-link">WhatsApp or registration link</label><input class="input" id="meetup-link" placeholder="https://chat.whatsapp.com/…"/><p class="field-hint">The prototype will not open or validate this link.</p></div><div class="trust-explainer">${icons.info}<div><strong>Social activity, not medical assistance</strong><span>Do not offer medical advice, treatment help or medication sharing in this listing.</span></div></div><div class="form-actions"><button class="button button-ghost" onclick="state.meetupStep=1;render()">${icons.back} Back</button><button class="button button-primary" onclick="publishMeetup(this)">Publish activity</button></div>`;
  return shell(`<main class="page create-shell"><section class="card form-card">${body}</section></main>`,'events');
}
function publishMeetup(button){setButtonLoading(button,'Publishing…');setTimeout(()=>{toast(`${state.meetupType} published and visible to the community`);state.meetupStep=1;state.eventView='upcoming';openCommunityActivities();},400);}

function reportModal(){return `<div class="external-modal" id="report-modal" role="dialog" aria-modal="true" aria-labelledby="report-title"><div class="modal-card"><div class="modal-icon">${icons.flag}</div><h2 id="report-title">Report this activity</h2><p class="muted">Reports are reviewed by HSS. The host will not see who submitted the report.</p><div class="preference-list"><label class="filter-check"><input type="radio" name="report-reason" checked/> Unsafe location or activity</label><label class="filter-check"><input type="radio" name="report-reason"/> Medical advice or treatment offer</label><label class="filter-check"><input type="radio" name="report-reason"/> Private or identifying information</label><label class="filter-check"><input type="radio" name="report-reason"/> Something else</label></div><div class="modal-actions"><button class="button button-primary" onclick="submitActivityReport()">Submit report</button><button class="button button-outline" onclick="closeReport()">Cancel</button></div></div></div>`;}
function openReport(trigger){const modal=document.querySelector('#report-modal');modal.classList.add('open');markOverlayTrigger(trigger);activateOverlay('#report-modal .modal-card','[data-overlay-return="true"]');}
function closeReport(){document.querySelector('#report-modal')?.classList.remove('open');releaseOverlay();}
function submitActivityReport(){closeReport();toast('Report submitted to HSS for review');}

function notificationsScreen(){
  const categories=[['Replies and mentions','When someone responds to your post or comment',true],['Registration confirmation','A simple confirmation without health details',true],['Event reminders','Upcoming HSS events you registered for',true],['Meetup changes','Time or broad-location updates',true],['AMA answers','When a submitted question is addressed',false],['Followed-topic updates','Occasional activity from your selected topics',false],['Significant HSS announcements','Important community-wide updates',true]];
  return shell(`<main class="page page-narrow"><button class="back-button" onclick="go('profile')">${icons.back} Back to Profile</button><header class="page-head"><div class="eyebrow">Your preferences</div><h1>Notifications</h1><p class="lede">Choose channels separately. Notification previews will avoid sensitive health information.</p></header><section class="card settings-section"><h2>Channels</h2><div class="preference-list"><div class="preference-card"><div><strong>WhatsApp</strong><span>Replies, reminders and selected updates</span></div><button class="switch on" role="switch" aria-checked="true" onclick="toggleSwitch(this)"></button></div><div class="preference-card"><div><strong>SMS</strong><span>Registration and important changes only</span></div><button class="switch" role="switch" aria-checked="false" onclick="toggleSwitch(this)"></button></div><div class="preference-card"><div><strong>Email</strong><span>Useful summaries and event materials</span></div><button class="switch on" role="switch" aria-checked="true" onclick="toggleSwitch(this)"></button></div></div></section><section class="card settings-section"><h2>Notify me about</h2><div class="preference-list">${categories.map(([name,desc,on])=>`<div class="preference-card"><div><strong>${name}</strong><span>${desc}</span></div><button class="switch ${on?'on':''}" role="switch" aria-checked="${on}" onclick="toggleSwitch(this)"></button></div>`).join('')}</div></section><div class="privacy-preview"><strong>Safe preview example</strong><p>“You have a new reply in Haemily.” The message does not include a condition, post title or child information.</p></div><div class="form-actions"><button class="button button-ghost" onclick="go('profile')">Cancel</button><button class="button button-primary" onclick="toast('Notification preferences saved')">Save preferences</button></div></main>`,'profile');
}
function toggleSwitch(button){const on=button.classList.toggle('on');button.setAttribute('aria-checked',String(on));}

function resourceSourceTag(resource){const icon=resource.source==='HSS'?icons.shield:icons.people;return `<span class="resource-source ${resource.source==='HSS'?'hss':'professional'}">${icon}${resource.source}</span>`;}
function resourceFormatIcon(format){return format==='Video'||format==='Recording'?icons.play:icons.file;}
function resourceRow(resource,options={}){
  const saved=state.savedResources.has(resource.id);
  const open=options.eventDetail?`state.resourceOrigin='eventDetail';go('resourceDetail','${resource.id}')`:options.profile?`state.resourceOrigin='profile';go('resourceDetail','${resource.id}')`:`go('resourceDetail','${resource.id}')`;
  const actionLabel=options.profile?'Remove saved':saved?'Saved':'Save';
  return `<article class="resource-row browse-row"><div class="resource-row-top">${resourceSourceTag(resource)}</div><a class="resource-title-link browse-row-primary" href="#/resourceDetail/${encodeURIComponent(resource.id)}" onclick="event.preventDefault();${open}"><h3>${resource.title}</h3></a><button class="resource-save browse-row-action ${saved?'saved':''}" aria-label="${options.profile?'Remove '+resource.title+' from saved resources':saved?'Remove '+resource.title+' from saved resources':'Save '+resource.title}" onclick="toggleResourceSave('${resource.id}')">${saved?icons.bookmarkFilled:icons.bookmark}<span>${actionLabel}</span></button><a class="resource-row-main resource-row-copy" href="#/resourceDetail/${encodeURIComponent(resource.id)}" onclick="event.preventDefault();${open}"><p>${resource.summary}</p><div class="resource-meta"><span>${resourceFormatIcon(resource.format)}${resource.format}</span><span>${resource.published}</span>${resource.eventName?`<span class="resource-event-origin">From: ${resource.eventName}</span>`:''}</div></a></article>`;
}
async function toggleResourceSave(id){
  const removing=state.savedResources.has(id);
  removing?state.savedResources.delete(id):state.savedResources.add(id);
  render();
  toast(removing?'Removed from saved resources.':'Saved to your profile.');
  try{
    if(removing) await api('DELETE',`/saves/resource/${encodeURIComponent(id)}`);
    else await api('POST',`/saves/resource/${encodeURIComponent(id)}`);
  }catch(err){
    removing?state.savedResources.add(id):state.savedResources.delete(id);
    render();
    toast('Could not update saved resources');
  }
}
function resourceQuickLinks(){
  const id='resource-quick-links';
  const links=[
    ['https://haemophilia.org.sg/','HSS website','Visit the Haemophilia Society of Singapore',icons.globe,''],
    ['https://www.moh.gov.sg/seeking-healthcare/getting-medical-help/','Emergency and A&E','Urgent-care guidance from MOH',icons.alert,'emergency'],
    ['https://www.singhealth.com.sg/symptoms-treatments/haemophilia','Hospital resources','Healthcare information about haemophilia',icons.shield,'']
  ];
  return `<section class="resource-section quick-links-section"><div class="section-row"><div><h2>Quick links</h2><p class="small muted">Useful services and official information</p></div>${carouselControls(id)}</div><div class="carousel-shell"><div class="quick-link-carousel carousel-track" id="${id}" role="region" aria-label="Quick resource links" tabindex="0" onkeydown="carouselKey(event,'${id}')">${links.map(([url,title,copy,icon,tone])=>`<a class="quick-resource-link carousel-card ${tone}" aria-label="${title}, opens an external website" href="${url}" target="_blank" rel="noopener noreferrer"><span class="quick-link-icon">${icon}</span><span><strong>${title}</strong><small>${copy}</small></span>${icons.external}</a>`).join('')}</div></div></section>`;
}
function placeResourceTabsAboveLatest(){
  const page=document.querySelector('.resources-page');
  const surface=page?.querySelector('.resources-document-surface');
  const strip=page?.querySelector('.document-tab-strip');
  const header=page?.querySelector(':scope > .compact-page-head');
  const latest=[...(surface?.querySelectorAll('.resource-section')||[])].find(section=>!section.classList.contains('quick-links-section'));
  if(!surface||!strip||!latest)return;
  const quickLinks=surface.querySelector(':scope > .quick-links-section');
  if(quickLinks){
    const intro=document.createElement('div');
    intro.className='resource-intro-gradient';
    surface.insertBefore(intro,quickLinks);
    if(header)intro.append(header);
    intro.append(quickLinks);
  }
  strip.classList.add('inline-resource-tabs');
  latest.classList.add('latest-resource-section');
  surface.insertBefore(strip,latest);
}
function exploreScreen(){
  setTimeout(()=>{placeResourceTabsAboveLatest();ensureActiveDocumentTab();initHomeCarousels();},0);
  const query=state.resourceSearch.trim().toLowerCase();
  let pageResources=resources.filter(resource=>(state.resourceSource==='All'||resource.source===state.resourceSource)&&(!query||[resource.title,resource.summary,...resource.keyPoints,resource.eventName||''].join(' ').toLowerCase().includes(query))).sort((a,b)=>new Date(b.published)-new Date(a.published));
  const eventResources=pageResources.filter(resource=>resource.eventId&&memberAttendedEvent(resource.eventId));
  const latest=pageResources.filter(resource=>!eventResources.some(eventResource=>eventResource.id===resource.id)).slice(0,3);
  const tabs=[['All','All'],['HSS','HSS'],['Healthcare professional','Healthcare professional']];
  const latestHeading=state.resourceSource==='HSS'?'Latest resources from HSS':state.resourceSource==='Healthcare professional'?'Latest resources from Healthcare professionals':'Latest resources';
  const results=latest.length?`<div class="resource-list">${latest.map(resourceRow).join('')}</div>`:`<div class="compact-empty"><h3>No resources found</h3><p>Try another search or select a different source.</p>${query?`<button class="button button-outline" onclick="state.resourceSearch='';render()">Clear search</button>`:''}</div>`;
  return shell(`<main class="page resources-page"><header class="compact-page-head"><h1>Resources</h1><p>Trusted information and materials from HSS and healthcare professionals.</p></header><div class="document-layout"><div class="document-tab-strip"><nav class="resource-library-tabs document-tabs" role="tablist" aria-label="Resource source">${tabs.map(([value,label])=>`<button role="tab" tabindex="${state.resourceSource===value?'0':'-1'}" aria-selected="${state.resourceSource===value}" class="${state.resourceSource===value?'active':''}" onclick="setResourceSource('${value}')">${label}</button>`).join('')}</nav></div><section class="document-surface resources-document-surface">${resourceQuickLinks()}<section class="resource-section"><div class="section-row"><div><h2>${latestHeading}</h2><p class="small muted">Recently published or reviewed</p></div><button class="text-button section-link" onclick="go('resourcesLibrary')"><span>See all resources</span>${icons.arrow}</button></div>${results}</section>${eventResources.length?`<section class="resource-section"><div class="section-row"><div><h2>Resources from events attended</h2><p class="small muted">Materials from sessions you attended</p></div></div><div class="resource-list">${eventResources.map(resource=>resourceRow(resource,{event:true})).join('')}</div></section>`:''}</section></div></main>`,'explore');
}

function filteredResources(){
  const query=state.resourceSearch.trim().toLowerCase();
  let list=resources.filter(resource=>(!state.resourceEventFilter||resource.eventId===state.resourceEventFilter)&&(state.resourceSource==='All'||resource.source===state.resourceSource)&&(state.resourceFormat==='All formats'||resource.format===state.resourceFormat));
  if(query)list=list.filter(resource=>[resource.title,resource.summary,...resource.keyPoints,resource.eventName||''].join(' ').toLowerCase().includes(query));
  if(state.resourceSort==='relevance'&&query){const score=resource=>(resource.title.toLowerCase().includes(query)?4:0)+(resource.summary.toLowerCase().includes(query)?2:0)+(resource.keyPoints.join(' ').toLowerCase().includes(query)?1:0)+(resource.eventName?.toLowerCase().includes(query)?1:0);list=[...list].sort((a,b)=>score(b)-score(a));}
  else list=[...list].sort((a,b)=>new Date(b.published)-new Date(a.published));
  return list;
}
function resourcesLibraryScreen(){
  setTimeout(ensureActiveDocumentTab,0);
  const matches=filteredResources(),shown=matches.slice(0,state.resourceVisible),tabs=[['All','All'],['HSS','HSS'],['Healthcare professional','Healthcare professional']];
  const resultContent=matches.length?`<div class="resource-list">${shown.map(resourceRow).join('')}</div>${shown.length<matches.length?`<div id="resource-sentinel" class="load-sentinel" aria-hidden="true"></div>`:''}`:`<div class="empty resource-empty"><div class="empty-icon">${icons.search}</div><h3>No resources match this search</h3><p>Try another phrase or clear the search.</p><button class="button button-outline" onclick="state.resourceSearch='';state.resourceVisible=4;render()">Clear search</button></div>`;
  return shell(`<main class="page page-narrow resources-library"><button class="back-button" onclick="go('explore')">${icons.back} Back to Resources</button><header class="compact-page-head"><h1>All resources</h1><p>Search trusted articles, PDFs, videos and event materials.</p></header><div class="document-layout"><div class="document-tab-strip"><nav class="resource-library-tabs document-tabs" role="tablist" aria-label="Resource source">${tabs.map(([value,label])=>`<button role="tab" tabindex="${state.resourceSource===value?'0':'-1'}" aria-selected="${state.resourceSource===value}" class="${state.resourceSource===value?'active':''}" onclick="setResourceSource('${value}')">${label}</button>`).join('')}</nav></div><section class="document-surface resource-results-surface"><div class="resource-search"><span>${icons.search}</span><label class="sr-only" for="resource-search">Search ${state.resourceSource==='All'?'all resources':state.resourceSource+' resources'}</label><input id="resource-search" value="${accessValue(state.resourceSearch)}" placeholder="Search ${state.resourceSource==='All'?'all resources':state.resourceSource+' resources'}" oninput="updateResourceSearch(this)"/>${state.resourceSearch?`<button aria-label="Clear search" onclick="state.resourceSearch='';state.resourceVisible=4;render()">${icons.x}</button>`:''}</div><div class="resource-result-head"><strong>${matches.length} ${matches.length===1?'resource':'resources'}</strong>${state.resourceSearch?`<button class="text-button" onclick="state.resourceSearch='';state.resourceVisible=4;render()">Clear search</button>`:''}</div>${resultContent}</section></div></main>`,'explore');
}
function setResourceSource(value){state.resourceSource=value;state.resourceVisible=4;updateTabUrl('resourceTab',value==='All'?'all':value==='HSS'?'hss':'professional');render();requestAnimationFrame(ensureActiveDocumentTab);}
function updateResourceSearch(input){state.resourceSearch=input.value;state.resourceVisible=4;const inputId=input.id;render();requestAnimationFrame(()=>{const next=document.getElementById(inputId);next?.focus();next?.setSelectionRange(next.value.length,next.value.length);});}
function clearResourceFilters(){state.resourceSearch='';state.resourceSource='All';state.resourceFormat='All formats';state.resourceSort='latest';state.resourceVisible=4;render();}
function initResourceLazyLoad(){const sentinel=document.querySelector('#resource-sentinel');if(!sentinel)return;const observer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){observer.disconnect();state.resourceVisible+=3;render();}},{rootMargin:'160px'});observer.observe(sentinel);}
function openExploreCategory(name,subtopic=null,view=state.exploreView,label=null){state.exploreView=view;state.selectedCollection=name;state.selectedSubtopic=subtopic;state.selectedSubtopicLabel=label||subtopic;state.collectionQuickFilter='All';state.collectionDetailedFilters=new Set();state.collectionFilterDraft=new Set();state.collectionSort='latest';go('collection');}

function amaThreadCard(thread){
  const tone=thread.status==='Open'?'active':thread.status==='Closed'?'complete':'info';
  return `<article class="card ama-thread-card" tabindex="0" onclick="go('amaDetail','${thread.id}')" onkeydown="if(event.key==='Enter')go('amaDetail','${thread.id}')"><div class="ama-thread-top"><div class="card-signals">${sourceBadge(thread.verified?'Verified guest':'Community experience',thread.verified)}${statusBadge(thread.status,tone)}</div><span class="small muted">${thread.date}</span></div><h3>${thread.title}</h3><p>${thread.guest}</p>${metadataLine([thread.format,thread.topic,thread.stage])}<div class="card-footer"><span>${icons.message} ${thread.questions} questions · ${thread.answers} AMA guest replies</span>${icons.arrow}</div></article>`;
}

function collectionScreen(){
  const name=state.selectedCollection || 'Newly diagnosed';
  if(name==='AMAs and community sharing'){
    const selected=state.collectionDetailedFilters;
    let threads=amaThreads.filter(thread=>state.collectionQuickFilter==='All'||(state.collectionQuickFilter==='Verified'&&thread.verified)||(state.collectionQuickFilter==='Community'&&!thread.verified)||(state.collectionQuickFilter==='Events'&&thread.id==='care-team-ama'));
    const selectedGroups=detailedFilterGroups.map(([group,options])=>[group,options.filter(value=>selected.has(value))]).filter(([,options])=>options.length);
    threads=threads.filter(thread=>selectedGroups.every(([group,options])=>options.some(value=>group==='Source'?(value==='Community experience'?!thread.verified:value==='Verified by HSS'&&thread.verified):group==='Content type'?value===(thread.format==='Community sharing'?'Discussion':'AMA'):group==='Life stage'?thread.stage===value||thread.stage==='All life stages':thread.topic===value)));
    if(state.collectionSort==='top') threads=[...threads].sort((a,b)=>(b.questions+b.answers)-(a.questions+a.answers));
    if(state.collectionSort==='discussed') threads=[...threads].sort((a,b)=>b.answers-a.answers);
    return shell(`<main class="page page-narrow collection-page"><button class="back-button" onclick="go('explore')">${icons.back} Back to Resources</button><nav class="explore-breadcrumb" aria-label="Breadcrumb"><span>Resources</span><span>›</span><strong>AMAs and community sharing</strong></nav><header class="compact-page-head"><h1>AMAs and community sharing</h1><p>Ask questions, read verified guest answers, and join community conversations.</p></header>${feedControls('collection')}<div class="ama-thread-list">${threads.length?threads.map(amaThreadCard).join(''):`<div class="card empty"><h3>No matching discussions</h3><p>Choose another filter to see AMA and community-sharing threads.</p></div>`}</div></main>`,'explore');
  }
  const isLife=lifeStages.some(([x])=>x===name);
  const normalizedName=name==='Treatment and infusion support'?'Treatment and infusion':name==='Sports and healthy living'?'Sports and exercise':name==='Emotional and caregiver wellbeing'?'Caregiver wellbeing':name;
  let matches=allFeedEntries().filter(entry=>(isLife?entry.stages:entry.topics).includes(normalizedName));
  if(isLife&&state.selectedSubtopic){const subtopic=state.selectedSubtopic==='Sports and healthy living'?'Sports and exercise':state.selectedSubtopic==='Emotional and caregiver wellbeing'?'Caregiver wellbeing':state.selectedSubtopic;matches=matches.filter(entry=>entry.topics.includes(subtopic));}
  const shown=sortFeedEntries(filterFeedEntries(matches,state.collectionQuickFilter,state.collectionDetailedFilters),state.collectionSort);
  const title=state.selectedSubtopicLabel||state.selectedSubtopic||name;
  const intro=state.selectedSubtopic?`Content for ${name.toLowerCase()} related to ${title.toLowerCase()}.`:isLife?`Guidance and community experiences for families navigating ${name.toLowerCase()}.`:`Guidance and community experiences related to ${name.toLowerCase()}.`;
  const breadcrumb=`<nav class="explore-breadcrumb" aria-label="Breadcrumb"><span>Resources</span><span>›</span><span>${name}</span>${state.selectedSubtopic?`<span>›</span><strong>${title}</strong>`:''}</nav>`;
  return shell(`<main class="page page-narrow collection-page"><button class="back-button" onclick="go('explore')">${icons.back} Back to Resources</button>${breadcrumb}<header class="compact-page-head"><h1>${title}</h1><p>${intro}</p></header>${feedControls('collection')}<div class="feed collection-feed">${shown.length?shown.map(renderFeedEntry).join(''):`<div class="card empty"><h3>No matching content</h3><p>Choose another filter to see content in this category.</p></div>`}</div></main>`,'explore');
}

function amaDetailScreen(){
  const thread=amaThreads.find(item=>item.id===state.selectedAma)||amaThreads[0];
  const open=thread.status==='Open';
  const closed=thread.status==='Closed';
  const scheduledEvent=events.find(item=>item.id===thread.id);
  const guestAnswer=`<article class="ama-answer guest-answer"><div class="author"><span class="author-avatar org">VG</span><div><div class="author-name">${thread.guest}</div><div class="verified-guest-line">${icons.shield} Verified healthcare guest · AMA guest reply · 1h</div></div></div><p>Start with a written list of questions and discuss what applies to your family with your own care team. This answer provides general information rather than individual medical advice.</p><div class="comment-actions"><button>Helpful · 14</button><button>Reply</button><button onclick="toast('Report options opened')">Report</button></div></article>`;
  const recap=closed?aiInsightPanel('AMA recap',`Updated from ${thread.answers} AMA guest replies`,`<p>Families asked about planning, communication, and preparing questions. Guest replies repeatedly encouraged checking individual circumstances with each family’s own care team.</p>`,'View referenced replies'):'';
  const ask=open?`<section class="ama-question-composer"><h2>Ask a question</h2><p class="small muted">Questions are moderated. Do not include names or identifying health details.</p><label class="sr-only" for="ama-thread-question">Your question for the AMA guest</label><textarea class="textarea" id="ama-thread-question" placeholder="What would you like the guest to address?"></textarea><button class="button button-primary" onclick="submitAmaThreadQuestion()">Ask a question</button></section>`:`<div class="closed-notice">${icons.info}<span><strong>${thread.status==='Upcoming'?'Questions are not open yet.':'This AMA is closed.'}</strong> ${thread.status==='Upcoming'?thread.date:'All questions and replies remain available to read.'}</span></div>`;
  const sessionLink=scheduledEvent?`<button class="button button-outline ama-session-link" onclick="go('eventDetail','${scheduledEvent.id}')">${icons.calendar} View scheduled event</button>`:'';
  const tone=open?'active':closed?'complete':'info';
  return shell(`<main class="detail-page thread-detail-page">${mobileDetailBar(`toast('AMA saved')`)}<div class="reading-column"><button class="back-button desktop-detail-back" onclick="backFromDetail()">${icons.back} Back</button><header class="detail-header"><div class="card-signals">${sourceBadge(thread.verified?'Verified healthcare guest':'Community experience',thread.verified)}${statusBadge(thread.status,tone)}</div><h1>${thread.title}</h1><p class="lede">Ask questions, follow the verified guest’s replies, and read the conversation in one place.</p><div class="author detail-author"><span class="author-avatar org">VG</span><div><div class="author-name">${thread.guest}</div><div class="meta">AMA guest · Published by HSS</div></div></div><div class="detail-dates"><span>${thread.date}</span><span>${thread.questions} questions · ${thread.answers} AMA guest replies</span></div>${metadataLine([thread.format,thread.topic,thread.stage])}${sessionLink}</header>${recap}${ask}<section class="comments-panel ama-questions"><div class="comments-title"><div><h2>Questions and replies</h2><p class="small muted">${thread.questions} questions · ${thread.answers} AMA guest replies</p></div></div><article class="ama-question"><div class="author"><span class="author-avatar">${accessValue(memberAvatar())}</span><div><div class="author-name">${accessValue(memberName())}</div><div class="meta">2 days ago</div></div></div><p>What is a helpful way to prepare questions before speaking with the care team?</p>${guestAnswer}<div class="comment-actions"><button>I relate · 8</button><button>Reply</button><button onclick="toast('Question editing opened')">Edit</button><button onclick="toast('Report options opened')">Report</button></div></article><article class="ama-question"><div class="author"><span class="author-avatar">RB</span><div><div class="author-name">RiverBird</div><div class="meta">3 days ago</div></div></div><p>Which information is most useful to keep together for future appointments?</p><div class="pending-answer">Awaiting AMA guest reply</div></article></section></div></main>`,'explore');
}
function submitAmaThreadQuestion(){const input=document.querySelector('#ama-thread-question');if(!input?.value.trim()){toast('Write your question first');input?.focus();return;}input.value='';toast('Your question was submitted for moderation');}

function mobileDetailBar(){return `<div class="mobile-detail-bar"><button class="icon-button" aria-label="Back" onclick="backFromDetail()">${icons.back}</button><div class="mobile-detail-actions"><button class="icon-button" aria-label="More actions" onclick="toast('More actions opened')">${icons.more}</button></div></div>`;}
function aiInsightPanel(title,updated,content,referenceLabel='View references'){return `<section class="ai-panel" aria-label="AI-generated ${title.toLowerCase()}"><div class="ai-panel-head">${icons.sparkles}<span>AI-generated · ${title}</span><details class="ai-panel-menu"><summary aria-label="More options">${icons.more}</summary><div class="ai-panel-menu-popover"><button onclick="this.closest('details').removeAttribute('open');toast('AI summary report opened')">${icons.flag}<span>Report inaccuracy</span></button></div></details></div><div class="ai-updated">${updated}</div>${content}<div class="ai-panel-footer"><button class="text-button" onclick="toast('Referenced content highlighted')">${referenceLabel}</button></div></section>`;}

function renderDetailEngagementRow(item){
  const engagement=document.querySelector('.content-detail-page .detail-engagement');
  if(!engagement)return;
  document.querySelector('.content-detail-page .mobile-detail-actions .icon-button[aria-label="More actions"]')?.remove();
  const saved=state.saved.has(item.id);
  engagement.innerHTML=`<div class="detail-action-row"><button class="detail-row-action" onclick="toggleReaction(this,'${item.id}')" aria-label="Support this post">${icons.heart}<span>Support · ${item.reactions}</span></button><button class="detail-row-action" onclick="document.querySelector('.comments-panel')?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})" aria-label="View ${item.comments} comments">${icons.message}<span>${item.comments} comments</span></button><button class="detail-row-action detail-row-save ${saved?'saved':''}" onclick="toggleDetailSave('${item.id}',this)">${saved?icons.bookmarkFilled:icons.bookmark}<span>${saved?'Saved':'Save'}</span></button></div>`;
}

function detailScreen(){
  const item=content.find(x=>x.id===state.selectedItem)||content[0];
  const verified=!!item.verified;
  const relatedVerified=content.filter(x=>x.verified&&x.id!==item.id).slice(0,2);
  const relatedCommunity=content.filter(x=>!x.verified&&x.id!==item.id).slice(0,2);
  const hasDiscussionSummary=item.comments>=8;
  const discussionSummary=hasDiscussionSummary?`<div class="ai-discussion-summary"><strong>From the discussion</strong><ul class="summary-list"><li><strong>Personal experiences:</strong> Families describe keeping documents and questions easy to access.</li><li><strong>Unverified suggestions:</strong> Some members suggest keeping duplicate digital copies.</li><li><strong>Unanswered question:</strong> No response yet covers what to prepare for a long journey.</li></ul></div>`:'';
  const atAGlance=aiInsightPanel('At a glance',hasDiscussionSummary?'Updated 8 minutes ago':'Updated 20 minutes ago',`<p>${verified?'This verified resource offers a preparation checklist and encourages families to confirm what applies to them with their healthcare team.':'This post shares one community member’s personal experience. It includes unverified suggestions and should not be read as medical guidance.'}</p>${discussionSummary}`,hasDiscussionSummary?'View source and 3 referenced comments':'View source');
  const discussion='';
  const communityReactions=verified?'':`<button class="reaction" onclick="toggleReaction(this)">◎ I relate · 18</button><button class="reaction" onclick="toggleReaction(this)">♡ Support · 26</button>`;
  const reviewed=verified?`<span>Reviewed 19 Sep 2026</span>`:'';
  queueMicrotask(()=>{renderDetailEngagementRow(item);loadCommentsInto('post',item.id);});
  const articleBody=item.body?`<p>${escapeHtml(item.body).replace(/\n+/g,'</p><p>')}</p>`:(verified?verifiedArticle(item):communityArticle(item));
  return shell(`<main class="detail-page content-detail-page">${mobileDetailBar(`toggleDetailSave('${item.id}',this)`,state.saved.has(item.id))}<div class="reading-column"><button class="back-button desktop-detail-back" onclick="backFromDetail()">${icons.back} Back</button><header class="detail-header"><div class="card-signals">${contentSource(item)}</div><h1>${item.title}</h1><p class="lede">${item.excerpt}</p><div class="author detail-author"><span class="author-avatar ${item.org?'org':''}">${item.initials}</span><div><div class="author-name">${item.author}</div><div class="meta">${item.org?'Publisher':'Community member'}</div></div></div><div class="detail-dates"><span>Published ${item.date} 2026</span>${reviewed}</div>${contentMetadata(item)}</header>${atAGlance}<div class="article-body">${articleBody}</div>${verified?`<div class="notice">${icons.info}<span>This resource provides general community information. For advice specific to your family, speak with your healthcare team.</span></div>`:`<div class="notice">${icons.info}<span>This is a personal experience from a community member. It should not be treated as medical advice or verified guidance.</span></div>`}<div class="detail-engagement"><div class="reaction-strip"><button class="reaction" onclick="toggleReaction(this,'${item.id}')">${icons.heart} Helpful · ${item.reactions}</button>${communityReactions}</div><div class="action-bar"><button class="button button-outline" onclick="toggleDetailSave('${item.id}',this)">${icons.bookmark} ${state.saved.has(item.id)?'Saved':'Save'}</button><button class="button button-ghost" onclick="shareItem()">${icons.share} Share</button><button class="button button-ghost quiet-report" onclick="toast('Choose a reason to report this content')">${icons.flag} Report</button></div></div>${discussion}<section class="comments-panel" data-target-type="post" data-target-id="${item.id}"><div class="comments-title"><div><h2>Comments</h2><p class="small muted">${item.comments} responses</p></div><label class="sort-control comment-sort-control"><span>Sort by:</span><select class="sort-select" aria-label="Sort comments" onchange="state.commentSort=this.value;toast('Comments sorted by '+this.options[this.selectedIndex].text)"><option value="helpful">Most helpful</option><option value="newest">Newest</option><option value="oldest">Oldest</option></select></label></div><div class="comment-list"><p class="small muted">Loading comments…</p></div><div class="comment-composer"><span class="comment-avatar">${accessValue(memberAvatar())}</span><label class="sr-only" for="new-comment">Add a comment</label><input class="input" id="new-comment" placeholder="Add a comment…"/><button class="button button-primary" aria-label="Post comment" onclick="postComment(this)">${icons.arrow}</button></div></section><section class="collection-section"><div class="section-row"><div><h2>Related verified guidance</h2><p class="small muted">Reviewed information from named sources</p></div></div><div class="horizontal-cards">${relatedVerified.map(x=>contentCard(x,true)).join('')}</div></section><section class="collection-section"><div class="section-row"><div><h2>Related lived experiences</h2><p class="small muted">Personal perspectives from community members</p></div></div><div class="horizontal-cards">${relatedCommunity.map(x=>contentCard(x,true)).join('')}</div></section></div></main>`, item.topics.includes('Explore')?'explore':'');
}

function verifiedArticle(item){return `<p>This resource is a preparation aid for families. It is intentionally focused on questions to ask and information to organise, without replacing advice from your healthcare team.</p><h2>Before you begin</h2><p>Start early enough to confirm what applies to your family and destination. Keep important information together and make it easy to access when needed.</p><h2>A simple preparation checklist</h2><ul><li>Write down the questions you want to discuss with your healthcare team.</li><li>Keep key contact details and documents together.</li><li>Plan how essential items will stay accessible during the journey.</li><li>Talk through the plan with the adults travelling with your child.</li></ul><h2>Keep the plan easy to use</h2><p>A short, familiar checklist is more useful than a long document no one can find. Review it together before leaving and update it after each trip.</p>`;}
function communityArticle(item){return `<p>When our family first faced this, I felt I had to understand everything immediately. What helped most was slowing down and dealing with one question at a time.</p><p>I started a simple note on my phone: questions for our next appointment, things we had learned, and the names of people we could contact. It made the situation feel more manageable.</p><h2>What helped our family</h2><ul><li>Writing questions down as they came up.</li><li>Asking trusted people for practical help.</li><li>Giving ourselves permission not to have every answer yet.</li></ul><p>This was only our experience. Every family’s circumstances are different, so we still checked decisions about our child’s care with the healthcare team.</p>`;}
async function toggleDetailSave(id,button){
  const wasSaved=state.saved.has(id);
  wasSaved?state.saved.delete(id):state.saved.add(id);
  const saved=state.saved.has(id);
  button.classList.toggle('saved',saved);
  button.innerHTML=saved?`${icons.bookmarkFilled} Saved`:`${icons.bookmark} Save`;
  toast(saved?'Saved for later':'Removed from saved');
  try{
    if(saved) await api('POST',`/saves/post/${encodeURIComponent(id)}`);
    else await api('DELETE',`/saves/post/${encodeURIComponent(id)}`);
  }catch(err){
    wasSaved?state.saved.add(id):state.saved.delete(id);
    const rolledBack=state.saved.has(id);
    button.classList.toggle('saved',rolledBack);
    button.innerHTML=rolledBack?`${icons.bookmarkFilled} Saved`:`${icons.bookmark} Save`;
    toast('Could not update saved posts');
  }
}
function shareItem(){ if(navigator.share){navigator.share({title:document.title,url:location.href}).catch(()=>{});}else{toast('Share link copied');} }
function toggleReply(button){ const comment=button.closest('.comment'); const composer=comment.querySelector(':scope > .reply-composer'); document.querySelectorAll('.reply-composer.open').forEach(x=>{if(x!==composer)x.classList.remove('open');}); composer?.classList.toggle('open'); composer?.querySelector('input')?.focus(); }
function toggleThread(button){ const thread=button.nextElementSibling; const opening=thread.hidden; thread.hidden=!opening; button.setAttribute('aria-expanded',String(opening)); button.innerHTML=`${opening?icons.chevronUp:icons.chevronDown} ${opening?'Hide replies':'View 2 replies'}`; }
async function toggleCommentLike(button){
  const id=button.dataset.commentId;
  const count=button.querySelector('span');
  const liked=button.classList.toggle('liked');
  count.textContent=Number(count.textContent)+(liked?1:-1);
  button.setAttribute('aria-label',liked?'Remove helpful reaction':'Mark as helpful');
  if(!id)return;
  try{
    if(liked) await api('POST',`/comments/${encodeURIComponent(id)}/like`);
    else await api('DELETE',`/comments/${encodeURIComponent(id)}/like`);
  }catch(err){
    button.classList.toggle('liked');
    count.textContent=Number(count.textContent)+(liked?-1:1);
    button.setAttribute('aria-label',!liked?'Remove helpful reaction':'Mark as helpful');
    toast('Could not update reaction');
  }
}
async function toggleReaction(button,postId){
  const active=button.classList.toggle('active');
  const match=button.textContent.match(/(\d+)\s*$/);
  if(match)button.innerHTML=button.innerHTML.replace(/\d+\s*$/,String(Number(match[1])+(active?1:-1)));
  if(!postId)return;
  try{
    if(active) await api('POST',`/posts/${encodeURIComponent(postId)}/reactions/helpful`);
    else await api('DELETE',`/posts/${encodeURIComponent(postId)}/reactions/helpful`);
    active?state.likedPosts.add(postId):state.likedPosts.delete(postId);
  }catch(err){
    button.classList.toggle('active');
    const match2=button.textContent.match(/(\d+)\s*$/);
    if(match2)button.innerHTML=button.innerHTML.replace(/\d+\s*$/,String(Number(match2[1])+(active?-1:1)));
    toast('Could not update reaction');
  }
}
// ---------- Generic comment rendering (posts, events, resources) ----------
function commentNode(c){
  const replies=c.replies||[];
  const repliesHtml=replies.map(commentNode).join('');
  const collapse=replies.length>=2;
  return `<div class="comment" data-comment-id="${c.id}"><div class="comment-row"><span class="comment-avatar">${accessValue(c.avatar)}</span><div class="comment-main"><div class="comment-byline"><strong>${accessValue(c.author)}</strong>${c.role_label?`<span class="byline-role">· ${accessValue(c.role_label)}</span>`:''}<span class="comment-time">· ${c.ageLabel}</span></div>${c.context?`<p class="comment-context">Regarding: ${accessValue(c.context)}</p>`:''}<p class="comment-text">${escapeHtml(c.text)}</p><button class="comment-reply" onclick="toggleReply(this)">Reply</button><button class="comment-reply" onclick="toast('Report options opened')">Report</button></div><button class="comment-like ${c.liked?'liked':''}" data-comment-id="${c.id}" aria-label="${c.liked?'Remove helpful reaction':'Mark as helpful'}" onclick="toggleCommentLike(this)">${icons.heart}<span>${c.likes}</span></button></div><div class="reply-composer"><label class="sr-only">Reply to ${accessValue(c.author)}</label><input class="input" placeholder="Reply to ${accessValue(c.author)}"/><button class="button button-primary" aria-label="Send reply" onclick="postReply(this)">${icons.arrow}</button></div>${collapse?`<button class="thread-toggle" aria-expanded="false" onclick="toggleThread(this)">${icons.chevronDown} View ${replies.length} replies</button><div class="reply-thread" hidden>${repliesHtml}</div>`:replies.length?`<div class="reply-thread">${repliesHtml}</div>`:''}</div>`;
}
function commentThread(comments){return comments.length?comments.map(commentNode).join(''):'<p class="small muted">No comments yet. Be the first to share something helpful.</p>';}
function commentRoot(el){return el.closest('[data-target-type]');}
async function loadCommentsInto(targetType,targetId,rootEl){
  const root=rootEl||document.querySelector(`[data-target-type="${targetType}"][data-target-id="${CSS.escape(String(targetId))}"]`);
  const list=root?.querySelector('.comment-list');
  if(!list)return;
  try{
    const {comments}=await api('GET',`/comments?target=${targetType}:${encodeURIComponent(targetId)}`);
    list.innerHTML=commentThread(comments);
  }catch(err){
    list.innerHTML='<p class="small muted">Comments could not be loaded.</p>';
  }
}
async function createComment(payload){return api('POST','/comments',payload);}
async function postComment(button){
  const root=commentRoot(button);
  if(!root)return;
  const {targetType,targetId}=root.dataset;
  const composer=button.closest('.comment-composer');
  const input=composer?.querySelector('input');
  const value=input?.value.trim();
  if(!value){toast('Write a comment first');input?.focus();return;}
  const context=targetType==='resource'?(state.resourceDiscussionContext||null):null;
  try{
    await createComment({targetType,targetId,text:value,context});
    input.value='';
    if(targetType==='resource'){
      state.resourceDiscussionContext='';
      const banner=root.querySelector('.resource-composer-context');
      if(banner){banner.classList.remove('show');banner.innerHTML='';}
    }
    await loadCommentsInto(targetType,targetId,root);
    if(targetType==='post')state.commentedPosts.add(targetId);
    toast('Comment posted');
  }catch(err){toast('Could not post your comment');}
}
async function postReply(button){
  const root=commentRoot(button);
  if(!root)return;
  const {targetType,targetId}=root.dataset;
  const composer=button.closest('.reply-composer');
  const input=composer?.querySelector('input');
  const value=input?.value.trim();
  if(!value){toast('Write a reply first');input?.focus();return;}
  const parentId=button.closest('.comment')?.dataset.commentId;
  try{
    await createComment({targetType,targetId,parentId,text:value});
    input.value='';
    composer.classList.remove('open');
    await loadCommentsInto(targetType,targetId,root);
    if(targetType==='post')state.commentedPosts.add(targetId);
    toast('Reply posted');
  }catch(err){toast('Could not post your reply');}
}

function resourceDetailScreen(){
  const resource=resources.find(item=>item.id===state.selectedResource)||resources[0];
  const saved=state.savedResources.has(resource.id);
  const event=events.find(item=>item.id===resource.eventId);
  const detailTopics=resource.detailTopics||resource.keyPoints.map((point,index)=>[`Topic ${index+1}`,point]);
  const topicDetails=`<section class="resource-detail-section resource-topic-details"><h2>Topics covered</h2><div class="resource-topic-list">${detailTopics.map(([title,copy])=>`<article class="resource-topic"><h3>${title}</h3><p>${copy}</p></article>`).join('')}</div></section>`;
  const actions=resource.actions.map(([label,url])=>`<a class="material-card" href="${url}" target="_blank" rel="noopener noreferrer"><span>${resourceFormatIcon(resource.format)}</span><span><strong>${label}</strong><small>${resource.format} material</small></span>${icons.external}</a>`).join('');
  queueMicrotask(()=>loadCommentsInto('resource',resource.id));
  return shell(`<main class="detail-page resource-detail-page"><div class="mobile-detail-bar"><button class="icon-button" aria-label="Back" onclick="backFromResource()">${icons.back}</button><button class="icon-button ${saved?'saved':''}" aria-label="${saved?'Remove from saved resources':'Save resource'}" onclick="toggleResourceSave('${resource.id}')">${icons.bookmark}</button></div><div class="reading-column"><button class="back-button desktop-detail-back" onclick="backFromResource()">${icons.back} Back</button><header class="resource-detail-header"><div class="resource-detail-top">${resourceSourceTag(resource)}<button class="button button-outline resource-detail-save" onclick="toggleResourceSave('${resource.id}')">${icons.bookmark}${saved?'Saved':'Save'}</button></div><h1>${resource.title}</h1><div class="resource-detail-dates"><span>Published ${resource.published}</span><span>Reviewed ${resource.updated}</span><span>${resourceFormatIcon(resource.format)}${resource.format}</span></div></header><section class="resource-summary"><h2>Summary</h2><p>${resource.summary}</p></section><section class="resource-detail-section"><h2>Key points</h2><div class="key-point-list">${resource.keyPoints.map(point=>`<div class="key-point"><p>${point}</p><button class="text-button" onclick="startResourceDiscussion('${point.replaceAll("'","\\'")}')">${icons.message} Discuss this point</button></div>`).join('')}</div></section>${topicDetails}<section class="resource-detail-section"><h2>Excerpts</h2>${resource.excerpts.map(excerpt=>`<blockquote>${excerpt}<button class="text-button" onclick="startResourceDiscussion('${excerpt.replaceAll("'","\\'").replaceAll('“','').replaceAll('”','')}')">${icons.message} Discuss this excerpt</button></blockquote>`).join('')}</section><section class="resource-detail-section resource-files"><h2>Available materials</h2><div class="resource-actions">${actions}</div></section>${event?`<section class="resource-detail-section"><h2>Related event</h2><button class="related-event-snapshot" onclick="go('eventDetail','${event.id}')"><span>${icons.calendar}</span><span><strong>${event.title}</strong><small>${event.date} · ${event.mode}</small></span>${icons.arrow}</button></section>`:''}<section class="comments-panel resource-discussion" data-target-type="resource" data-target-id="${resource.id}"><div class="comments-title"><div><h2>Discussion</h2><p class="small muted">Discuss the resource or a specific point</p></div></div><div class="comment-list"><p class="small muted">Loading comments…</p></div><div class="resource-composer-context ${state.resourceDiscussionContext?'show':''}">${state.resourceDiscussionContext?`<span>Regarding: ${accessValue(state.resourceDiscussionContext)}</span><button aria-label="Remove discussion context" onclick="state.resourceDiscussionContext='';render()">${icons.x}</button>`:''}</div><div class="comment-composer"><span class="comment-avatar">${accessValue(memberAvatar())}</span><label class="sr-only" for="resource-comment">Add to discussion</label><input class="input" id="resource-comment" placeholder="Add to discussion…"/><button class="button button-primary" aria-label="Post comment" onclick="postComment(this)">${icons.arrow}</button></div></section></div></main>`,'explore');
}
function startResourceDiscussion(context){state.resourceDiscussionContext=context;render();requestAnimationFrame(()=>document.querySelector('#resource-comment')?.focus());}

function profilePostRow(item,remove=false){
  return `<article class="profile-item-row browse-row"><a class="profile-item-main browse-row-primary" href="#/detail/${encodeURIComponent(item.id)}" onclick="event.preventDefault();go('detail','${item.id}')"><span class="topic-tag">${postTopic(item)}</span><strong>${item.title}</strong><p>${item.excerpt}</p><span class="profile-item-meta">${item.format} · ${relativePostTime(item)} · ${item.comments} comments</span></a>${remove?`<button class="button button-ghost profile-item-action browse-row-action" onclick="removeSavedPost('${item.id}')">Remove saved</button>`:''}</article>`;
}
function profileResourceRow(resource){
  return resourceRow(resource,{profile:true});
}
function removeSavedPost(id){state.saved.delete(id);render();toast('Removed from saved posts.');}
function ensureActiveProfileTab(){document.querySelectorAll('.tab-row,.saved-subtabs').forEach(row=>{const active=row.querySelector('.active');if(!active)return;const left=active.offsetLeft,right=left+active.offsetWidth;if(left<row.scrollLeft)row.scrollLeft=left;else if(right>row.scrollLeft+row.clientWidth)row.scrollLeft=right-row.clientWidth;});}

function profileScreen(){
  if(state.profileTab==='preferences')return editProfileScreen();
  setTimeout(ensureActiveProfileTab,0);
  const savedPosts=content.filter(item=>state.saved.has(item.id));
  const savedResourceItems=resources.filter(resource=>state.savedResources.has(resource.id));
  const postRow=item=>homePostRow(item,false);
  const profileResourceRow=resource=>resourceRow(resource,{profile:true});
  const savedRows=[...savedPosts.map(postRow),...savedResourceItems.map(profileResourceRow)];
  const authoredRows=content.filter(item=>state.authoredPosts.has(item.id)).map(postRow);
  const commentRows=myComments.map(c=>`<article class="community-post-row profile-comment-row"><div class="post-row-meta"><span class="topic-tag">Comment</span><span>· ${c.ageLabel}</span></div><p>${escapeHtml(c.text)}</p><strong>On “${accessValue(c.postTitle)}”</strong></article>`);
  const active=['saved','posts','comments'].includes(state.profileTab)?state.profileTab:'saved';
  const rows=active==='posts'?authoredRows:active==='comments'?commentRows:savedRows;
  const tabs=[['saved','Saved'],['posts','Posts'],['comments','Comments']];
  return shell(`<main class="page page-narrow profile-page"><section class="profile-showcase"><span class="profile-avatar-large">${accessValue(memberAvatar())}</span><h1>${accessValue(memberName())}</h1><p>@${accessValue(memberName()).toLowerCase()} · Community member since September 2026</p><p class="profile-bio">Saved conversations and trusted information, kept together in one place.</p><button class="button button-primary" onclick="state.profileTab='preferences';render()">Edit profile</button></section><section class="document-layout profile-document-layout"><div class="document-tab-strip"><nav class="document-tabs profile-content-tabs" role="tablist" aria-label="Profile content">${tabs.map(([id,label])=>`<button role="tab" tabindex="${active===id?'0':'-1'}" aria-selected="${active===id}" class="${active===id?'active':''}" onclick="state.profileTab='${id}';render()">${label}</button>`).join('')}</nav></div><section class="document-surface profile-content-surface">${rows.length?`<div class="profile-content-list">${rows.join('')}</div>`:`<div class="empty"><div class="empty-icon">${icons.bookmark}</div><h3>Nothing here yet</h3><p>Your activity will appear here.</p></div>`}</section></section></main>`,'profile');
}

function chooseProfileAvatar(button,value){
  state.onboarding.avatar=value;
  button.closest('.avatar-options')?.querySelectorAll('.avatar-option').forEach(option=>{const selected=option===button;option.classList.toggle('selected',selected);option.setAttribute('aria-pressed',String(selected));});
}
function toggleProfileTopicChoice(button,value){
  state.onboarding.topics.has(value)?state.onboarding.topics.delete(value):state.onboarding.topics.add(value);
  const selected=state.onboarding.topics.has(value);button.classList.toggle('selected',selected);button.setAttribute('aria-pressed',String(selected));
}
function chooseProfileLifeStage(button,value){
  state.onboarding.lifeStage=state.onboarding.lifeStage===value?'':value;
  button.closest('.chips')?.querySelectorAll('.chip').forEach(option=>{const selected=option===button&&state.onboarding.lifeStage===value;option.classList.toggle('selected',selected);option.setAttribute('aria-pressed',String(selected));});
}
async function saveProfileChanges(){
  const input=document.querySelector('#profile-username'),username=input?.value.trim();
  if(!username){input?.focus();toast('Username is required');return;}
  state.onboarding.username=username;
  try{
    const {member}=await api('PATCH','/auth/me',{username,avatar:state.onboarding.avatar,topics:[...state.onboarding.topics],lifeStage:state.onboarding.lifeStage});
    applyMember(member);
    state.profileTab='saved';render();toast('Profile updated');
  }catch(err){toast('Could not update your profile');}
}
function editProfileScreen(){
  const avatars=[['SK','Sunlit Koi'],['RB','River Bird'],['HM','Hope Moon'],['CF','Calm Finch']];
  const topics=['School and childcare','Travel','Sports and exercise','Caregiver wellbeing'];
  const stages=['Primary school','Secondary school and teenage years','National Service'];
  return shell(`<main class="page page-narrow edit-profile-page"><header class="edit-profile-header"><button class="back-button" onclick="state.profileTab='saved';render()">${icons.back} Profile</button><div><h1>Edit profile</h1><p>Update what the community sees and what Haemily recommends to you.</p></div></header><form class="edit-profile-form" onsubmit="event.preventDefault();saveProfileChanges()"><section class="edit-profile-section" aria-labelledby="public-profile-title"><div class="edit-profile-section-head"><h2 id="public-profile-title">Public profile</h2><p>Shown with your posts and comments.</p></div><div class="field"><label for="profile-username">Display name</label><input class="input" id="profile-username" value="${accessValue(memberName())}" autocomplete="nickname"/><p class="field-hint">Avoid using your full name or your child’s name.</p></div><fieldset class="edit-profile-fieldset"><legend>Avatar</legend><div class="avatar-options">${avatars.map(([value,label])=>`<button type="button" class="avatar-option ${state.onboarding.avatar===value?'selected':''}" aria-label="${label} avatar" aria-pressed="${state.onboarding.avatar===value}" onclick="chooseProfileAvatar(this,'${value}')">${value}</button>`).join('')}</div></fieldset></section><section class="edit-profile-section" aria-labelledby="interests-title"><div class="edit-profile-section-head"><h2 id="interests-title">Interests</h2><p>Choose what you want to see more often.</p></div><fieldset class="edit-profile-fieldset"><legend>Topics</legend><div class="chips">${topics.map(value=>`<button type="button" class="chip ${state.onboarding.topics.has(value)?'selected':''}" aria-pressed="${state.onboarding.topics.has(value)}" onclick="toggleProfileTopicChoice(this,'${value}')">${value}</button>`).join('')}</div></fieldset><fieldset class="edit-profile-fieldset"><legend>Life stage</legend><div class="chips">${stages.map(value=>`<button type="button" class="chip ${state.onboarding.lifeStage===value?'selected':''}" aria-pressed="${state.onboarding.lifeStage===value}" onclick="chooseProfileLifeStage(this,'${value}')">${value}</button>`).join('')}</div></fieldset></section><div class="privacy-note edit-profile-privacy">${icons.lock}<span>Your phone number and registered identity are never shown publicly.</span></div><div class="edit-profile-actions"><button type="button" class="button button-ghost" onclick="state.profileTab='saved';render()">Cancel</button><button type="submit" class="button button-primary">Save changes</button></div></form></main>`,'profile');
}

function legacyProfileScreen(){
  setTimeout(ensureActiveProfileTab,0);
  const tabs=[['saved','Saved'],['posts','My posts'],['comments','My comments'],['preferences','Preferences']];
  let panel='';
  if(state.profileTab==='saved'){
    const savedNav=`<nav class="saved-subtabs" role="tablist" aria-label="Saved items"><button role="tab" tabindex="${state.profileSavedTab==='posts'?'0':'-1'}" aria-selected="${state.profileSavedTab==='posts'}" class="${state.profileSavedTab==='posts'?'active':''}" onclick="state.profileSavedTab='posts';render()">Posts</button><button role="tab" tabindex="${state.profileSavedTab==='resources'?'0':'-1'}" aria-selected="${state.profileSavedTab==='resources'}" class="${state.profileSavedTab==='resources'?'active':''}" onclick="state.profileSavedTab='resources';render()">Resources</button></nav>`;
    if(state.profileSavedTab==='posts'){const items=content.filter(x=>state.saved.has(x.id));panel=`${savedNav}${items.length?`<div class="profile-item-list">${items.map(x=>profilePostRow(x,true)).join('')}</div>`:`<div class="card empty"><div class="empty-icon">${icons.bookmark}</div><h3>No saved posts</h3><p>Posts you save will appear here.</p><button class="button button-primary" onclick="go('home')">Browse community posts</button></div>`}`;}
    else{const items=resources.filter(resource=>state.savedResources.has(resource.id));panel=`${savedNav}${items.length?`<div class="resource-list">${items.map(profileResourceRow).join('')}</div>`:`<div class="card empty"><div class="empty-icon">${icons.bookmark}</div><h3>No saved resources</h3><p>Save trusted resources to find them here.</p><button class="button button-primary" onclick="go('explore')">Browse resources</button></div>`}`;}
  }
  if(state.profileTab==='posts') panel=`<div class="profile-item-list">${profilePostRow({...content[3],author:memberName(),initials:memberInitials()})}</div>`;
  if(state.profileTab==='comments') panel=`<article class="profile-comment-row"><div class="comment-byline"><strong>${accessValue(memberName())}</strong><span class="comment-time">1 day ago</span></div><p class="comment-text">Keeping a digital copy as well made a big difference for us.</p><p class="comment-origin">On “Travelling with haemophilia: a preparation checklist”</p><div class="report-actions"><button class="button button-ghost" onclick="go('detail','travel-checklist')">View thread</button><button class="button button-ghost" onclick="toast('Comment editing opened')">Edit</button></div></article>`;
  if(state.profileTab==='preferences') panel=`<section class="card settings-section"><h2>Profile</h2><div class="field"><label for="profile-username">Username</label><input class="input" id="profile-username" value="${accessValue(memberName())}"/><p class="field-hint">This is the name other community members see.</p></div><div class="field"><label>Avatar</label><div class="avatar-options">${[['SK','Sunlit Koi'],['RB','River Bird'],['HM','Hope Moon'],['CF','Calm Finch']].map(([value,label])=>`<button class="avatar-option ${state.onboarding.avatar===value?'selected':''}" aria-label="${label} avatar" onclick="selectAvatar(this)">${value}</button>`).join('')}</div></div><button class="button button-primary" onclick="toast('Profile changes saved')">Save profile</button></section><section class="card settings-section"><h2>Your interests</h2><div class="field-group"><div class="field-group-head"><strong>Topics</strong><span>Used to make Home and Resources more relevant</span></div><div class="chips">${['School and childcare','Travel','Sports and exercise','Caregiver wellbeing'].map(x=>`<button class="chip ${state.onboarding.topics.has(x)?'selected':''}" onclick="this.classList.toggle('selected')">${x}</button>`).join('')}</div></div><div class="field-group"><div class="field-group-head"><strong>Life stages</strong></div><div class="chips">${['Primary school','Secondary school and teenage years','National Service'].map(x=>`<button class="chip ${state.onboarding.lifeStage===x?'selected':''}" onclick="this.classList.toggle('selected')">${x}</button>`).join('')}</div></div><button class="button button-primary" onclick="toast('Interests updated')">Save interests</button></section><div class="privacy-note">${icons.lock}<span>Your phone number and registered identity are never displayed publicly.</span></div>`;
  return shell(`<main class="page page-narrow"><button class="back-button" onclick="go('home')">${icons.back} Back to Home</button><section class="card profile-hero"><span class="profile-avatar-large">${accessValue(memberAvatar())}</span><div class="profile-hero-copy"><h1>${accessValue(memberName())}</h1><p>Community member since September 2026</p></div><button class="button button-outline" onclick="state.profileTab='preferences';render()">Edit profile</button></section><nav class="tab-row" role="tablist" aria-label="Profile sections">${tabs.map(([id,label])=>`<button role="tab" tabindex="${state.profileTab===id?'0':'-1'}" aria-selected="${state.profileTab===id}" class="tab-button ${state.profileTab===id?'active':''}" onclick="state.profileTab='${id}';render()">${label}</button>`).join('')}</nav>${panel}</main>`,'profile');
}

function moderationScreen(){
  return shell(`<main class="page page-narrow"><button class="back-button" onclick="go('home')">${icons.back} Back to Home</button><section class="moderator-banner">${icons.shield}<div><strong>Moderator tools</strong><p>Keep decisions calm, clear and focused on community safety.</p></div></section><header class="page-head"><h1>Review queue</h1><p class="lede">Reports, resource updates and trust controls in one place.</p></header><div class="metric-grid"><div class="card metric"><strong>3</strong><span>Open reports</span></div><div class="card metric"><strong>2</strong><span>Needs review</span></div><div class="card metric"><strong>1</strong><span>Outdated</span></div></div><div class="tab-row"><button class="tab-button active">Reports</button><button class="tab-button" onclick="toast('Verified publishing queue opened')">Verified publishing</button><button class="tab-button" onclick="toast('Access review opened')">Access</button></div><div class="report-list">
    <article class="card report-card"><div class="report-head"><div><div class="eyebrow">Reported comment · 18 minutes ago</div><h3>Potentially misleading health suggestion</h3></div></div><p class="muted small">“This worked for us, so you probably do not need to check with anyone first…”</p><div class="card-signals">${sourceBadge('Community experience')}</div>${metadataLine(['Safety','1 report'])}<div class="report-actions"><button class="button button-primary" onclick="toast('Content removed with a calm notice to the author')">Remove content</button><button class="button button-outline" onclick="toast('Report closed — no action needed')">Keep content</button><button class="button button-ghost" onclick="toast('Member access review opened')">Review member</button></div></article>
    <article class="card report-card"><div class="report-head"><div><div class="eyebrow">Verified resource review</div><h3>Travelling with haemophilia: a preparation checklist</h3></div>${statusBadge('Review date passed','attention')}</div><p class="muted small">Last reviewed 12 months ago. Confirm the source and update date before keeping the verification label.</p><div class="report-actions"><button class="button button-primary" onclick="toast('Resource editor opened')">Review and update</button><button class="button button-outline" onclick="toast('Resource marked as outdated')">Mark outdated</button><button class="button button-ghost" onclick="toast('Verification label removed')">Remove verification</button></div></article>
    <article class="card report-card"><div class="report-head"><div><div class="eyebrow">AI summary report</div><h3>Discussion summary may overstate a suggestion</h3></div></div>${metadataLine(['AI accuracy'])}<p class="muted small">A community suggestion may read like general guidance. The original comments remain visible.</p><div class="report-actions"><button class="button button-primary" onclick="toast('Summary hidden while it is reviewed')">Hide summary</button><button class="button button-outline" onclick="toast('Correction editor opened')">Correct summary</button><button class="button button-ghost" onclick="toast('Report closed')">Keep summary</button></div></article>
    <article class="card report-card"><div class="report-head"><div><div class="eyebrow">Publishing</div><h3>Create verified information</h3></div></div>${metadataLine(['Moderators only'])}<p class="muted small">Publish on behalf of HSS or a named verified contributor. Source and review details are required.</p><div class="report-actions"><button class="button button-primary" onclick="toast('Verified resource editor opened')">New verified resource</button><button class="button button-outline" onclick="toast('Pinning options opened')">Manage pinned content</button></div></article>
  </div><section class="collection-section"><div class="section-row"><div><h2>Practical-help oversight</h2><p class="small muted">Pilot queue · not continuously monitored</p></div>${statusBadge('1 open request','active')}</div><article class="card report-card"><div class="report-head"><div><div class="eyebrow">Open request · Near Tampines MRT</div><h3>Collection or delivery</h3></div>${statusBadge('Open','active')}</div>${metadataLine(['Time-sensitive','Near Tampines MRT'])}<p class="muted small">General area and approved category only. No exact address or contact information is shown in the queue.</p><div class="report-actions"><button class="button button-primary" onclick="toast('Requester contact workflow opened')">Contact requester</button><button class="button button-outline" onclick="toast('Request closed with a clear safety notice')">Close request</button><button class="button button-ghost" onclick="toast('Interaction report history opened')">Review interaction</button><button class="button button-ghost" onclick="toast('Misuse review opened')">Review access</button></div></article><section class="card settings-section"><h3>Pilot controls</h3><div class="settings-row"><div><strong>Service availability</strong><span>${state.helpServiceAvailable?'Accepting approved requests':'Temporarily unavailable'}</span></div><button class="switch ${state.helpServiceAvailable?'on':''}" role="switch" aria-checked="${state.helpServiceAvailable}" onclick="state.helpServiceAvailable=!state.helpServiceAvailable;render();toast(state.helpServiceAvailable?'Practical help reopened':'Practical help temporarily paused')"></button></div><div class="settings-row"><div><strong>Permitted categories and safety wording</strong><span>Changes require policy-owner approval and an audit record.</span></div><button class="button button-outline" onclick="toast('Policy editor opened with approval history')">Review policy</button></div></section></section><section class="card settings-section" style="margin-top:18px"><h2>Access safety</h2><div class="settings-row"><div><strong>Suspend community access</strong><span>Use only where necessary to protect the community.</span></div><button class="button button-outline" onclick="toast('Suspension review requires a reason and duration')">Review access</button></div></section></main>`,'');
}

function toast(message){const region=document.querySelector('#toast-region');const el=document.createElement('div');const value=message.toLowerCase();const isError=/(error|invalid|unable|required|write .* first|not recognised)/.test(value);const isSuccess=/(saved|posted|published|added|updated|submitted|prepared|registered|joined|copied|complete)/.test(value);el.className=`toast ${isError?'toast-error':isSuccess?'toast-success':'toast-info'}`;el.innerHTML=`${isError?icons.alert:isSuccess?icons.check:icons.info}<span>${message}</span>`;region.appendChild(el);setTimeout(()=>el.remove(),2800);}

let l1TopbarLastY=window.scrollY,l1TopbarFrame=0;
function resetL1Topbar(){
  const isL1=['home','explore','create','events','profile'].includes(state.route);
  document.body.classList.toggle('l1-page',isL1);
  document.body.classList.remove('l1-topbar-hidden');
  l1TopbarLastY=window.scrollY;
}
function handleL1TopbarScroll(){
  if(l1TopbarFrame)return;
  l1TopbarFrame=requestAnimationFrame(()=>{
    l1TopbarFrame=0;
    const currentY=Math.max(0,window.scrollY),delta=currentY-l1TopbarLastY;
    if(!document.body.classList.contains('l1-page')||!matchMedia('(max-width: 767px)').matches||currentY<=12||delta<-4)document.body.classList.remove('l1-topbar-hidden');
    else if(delta>4&&currentY>56)document.body.classList.add('l1-topbar-hidden');
    l1TopbarLastY=currentY;
  });
}

function render(){
  if(!state.authed){app.innerHTML=accessScreen();document.body.classList.remove('has-fab','overlay-open','detail-view','create-view','l1-page','l1-topbar-hidden');document.title='Access · Haemily';return;}
  const routes={home:homeScreen,homeCollection:homeCollectionScreen,explore:exploreScreen,resourcesLibrary:resourcesLibraryScreen,resourceDetail:resourceDetailScreen,detail:detailScreen,create:createScreen,profile:profileScreen,events:eventsScreen,eventDetail:eventDetailScreen};
  app.innerHTML=(routes[state.route]||homeScreen)();document.body.classList.toggle('has-fab',!!app.querySelector('.mobile-fab'));document.body.classList.toggle('detail-view',['detail','eventDetail','resourceDetail'].includes(state.route));document.body.classList.toggle('create-view',state.route==='create');resetL1Topbar();if(state.route==='home')requestAnimationFrame(()=>{initHomeCarousels();if(state.homeTab==='all')initHomeLazyLoad();});if(state.route==='resourcesLibrary')requestAnimationFrame(initResourceLazyLoad);if(state.route==='eventDetail'&&state.eventScrollTarget==='resources'){state.eventScrollTarget=null;setTimeout(()=>document.querySelector('#event-resources')?.scrollIntoView({block:'start'}),30);} const titles={home:'Home',homeCollection:state.homeCollection||'Community posts',explore:'Resources',resourcesLibrary:'All resources',resourceDetail:'Resource',eventDetail:'Event',profile:'Profile'}; document.title=`${titles[state.route]||state.route[0].toUpperCase()+state.route.slice(1)} · Haemily`;
}

window.addEventListener('click',e=>{const menu=document.querySelector('#profile-menu');if(menu?.classList.contains('open')&&!e.target.closest('.avatar-button')&&!e.target.closest('.profile-menu')){menu.classList.remove('open');document.querySelector('.avatar-button')?.setAttribute('aria-expanded','false');}});
document.addEventListener('keydown',event=>{if(event.target.closest('[role="tab"]'))moveTabFocus(event);});
window.addEventListener('focus',handleEventJourneyReturn);
window.addEventListener('scroll',handleL1TopbarScroll,{passive:true});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')handleEventJourneyReturn();});
window.addEventListener('pageshow',handleEventJourneyReturn);
window.addEventListener('resize',()=>requestAnimationFrame(()=>{ensureActiveDocumentTab();ensureActiveProfileTab();}));
window.addEventListener('popstate',()=>{const url=new URL(location.href),homeTab=url.searchParams.get('homeTab'),resourceTab=url.searchParams.get('resourceTab');state.homeTab=homeTab==='topics'?'topics':'all';state.resourceSource=resourceTab==='hss'?'HSS':resourceTab==='professional'?'Healthcare professional':'All';render();});
async function boot(){
  const deepLink=location.hash.match(/^#\/(detail|eventDetail|resourceDetail)\/([^/]+)$/);
  const resourceTabParam=new URL(location.href).searchParams.get('resourceTab');
  if(resourceTabParam)state.resourceSource=resourceTabParam==='hss'?'HSS':resourceTabParam==='professional'?'Healthcare professional':'All';
  const homeTabParam=new URL(location.href).searchParams.get('homeTab');
  if(homeTabParam)state.homeTab=homeTabParam==='topics'?'topics':'all';
  try{
    const {member}=await api('GET','/auth/me');
    applyMember(member);
    if(member.onboarded){
      state.authed=true;
      await loadBootstrap();
      state.route='home';
      if(deepLink){
        state.route=deepLink[1];
        const value=decodeURIComponent(deepLink[2]);
        if(state.route==='detail')state.selectedItem=value;
        if(state.route==='eventDetail')state.selectedEvent=value;
        if(state.route==='resourceDetail')state.selectedResource=value;
      }
    } else {
      state.accessStep=2;
    }
  }catch(err){
    state.authed=false;
  }
  render();
}
boot();
