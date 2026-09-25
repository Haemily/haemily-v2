// Seed data lifted verbatim from the Claude Design handoff (public/app.js),
// so the demo shows exactly what the design showed — now persisted in the DB
// instead of hardcoded in the client.
'use strict';

const content = [
  { id:'travel-checklist', author:'HSS Resource Team', initials:'HSS', org:true, verified:'Verified by HSS', format:'Guide', title:'Travelling with haemophilia: a preparation checklist', topics:['Travel'], stages:['Primary school','Secondary school and teenage years'], excerpt:'A practical checklist to help families plan documents, supplies and support before a trip.', reactions:42, comments:8, date:'18 Sep', helpful:'Keep both printed and digital copies of important documents in separate bags.' },
  { id:'first-trip', author:'CalmOtter', initials:'CO', verified:null, format:'Story', title:'What helped us during our first family trip', topics:['Travel','Practical help'], stages:['Infants and toddlers','Primary school'], excerpt:'The small planning decisions that helped one caregiver feel more prepared for a first trip overseas.', reactions:31, comments:12, date:'17 Sep', helpful:'We made one checklist for packing and another for the travel day itself.' },
  { id:'starting-preschool', author:'GentleMoon', initials:'GM', verified:null, format:'Discussion', title:'What helped when we first spoke with preschool', topics:['School and childcare'], stages:['Preschool and kindergarten'], excerpt:'Caregivers share simple ways they prepared educators and helped their children settle into new routines.', reactions:16, comments:8, date:'16 Sep', helpful:'A short conversation before the first day helped us understand what information the educators needed.' },
  { id:'teachers', author:'HSS Resource Team', initials:'HSS', org:true, verified:'Verified by HSS', format:'Resource', title:'Talking to teachers about haemophilia', topics:['School and childcare'], stages:['Preschool and kindergarten','Primary school'], excerpt:'A conversation guide for sharing the information school staff need, while protecting your child’s privacy.', reactions:56, comments:15, date:'15 Sep', helpful:'Arranging one main school contact made updates much easier for our family.' },
  { id:'primary-school', author:'BrightKite', initials:'BK', verified:null, format:'Question', title:'Starting primary school: what should we prepare?', topics:['School and childcare','Newly diagnosed'], stages:['Primary school'], excerpt:'Our child starts Primary 1 next year. What conversations helped your family prepare with the school?', reactions:18, comments:24, date:'14 Sep', helpful:'We asked for a short meeting before term started and brought a one-page summary.' },
  { id:'sport', author:'Community Health Contributor', initials:'HC', org:true, verified:'Healthcare reviewed', format:'Guide', title:'Finding a suitable sport', topics:['Sports and exercise'], stages:['Primary school','Secondary school and teenage years'], excerpt:'Questions families can use when discussing physical activity with their own healthcare team.', reactions:45, comments:9, date:'11 Sep', helpful:null },
  { id:'everyday-safety', author:'HSS Resource Team', initials:'HSS', org:true, verified:'Verified by HSS', format:'Guide', title:'Everyday safety with infants and toddlers', topics:['Bleeds and everyday safety','Treatment and infusion'], stages:['Infants and toddlers'], excerpt:'A concise guide to preparing for everyday routines and bringing questions to your child’s care team.', reactions:38, comments:7, date:'10 Sep', helpful:null },
  { id:'after-diagnosis', author:'QuietMango', initials:'QM', verified:null, format:'Story', title:'What I wish I knew after diagnosis', topics:['Newly diagnosed','Understanding haemophilia','Caregiver wellbeing'], stages:['Newly diagnosed','Infants and toddlers'], excerpt:'A caregiver reflects on asking for help, keeping notes and taking the first few weeks one day at a time.', reactions:67, comments:19, date:'9 Sep', helpful:'You do not need to understand everything at once. Keep one place for your questions.' },
  { id:'growing-up', author:'NorthStar', initials:'NS', verified:null, format:'Story', title:'Growing up with haemophilia', topics:['Caregiver wellbeing','Sports and exercise'], stages:['Secondary school and teenage years'], excerpt:'An adult community member shares what helped them build confidence and talk openly with caregivers.', reactions:83, comments:22, date:'7 Sep', helpful:'The best support gave me room to learn, while making it safe to ask for help.' },
  { id:'national-service', author:'MorningFern', initials:'MF', verified:null, format:'Discussion', title:'Questions about National Service', topics:['Financial and practical support','Treatment and infusion','Caregiver wellbeing'], stages:['National Service'], excerpt:'A place for caregivers to collect questions and learn where to find current, official information.', reactions:21, comments:27, date:'5 Sep', helpful:'It helped us to write our questions down before speaking with the care team.' }
];

const postImages = {
  'first-trip': { alt:'A small travel bag, checklist and passport arranged on a table', src:'assets/community-travel-preview.svg' },
  'starting-preschool': { alt:'A backpack, educator note, and building blocks prepared for preschool', src:'assets/community-preschool-preview.svg' }
};

const events = [
  {id:'caregiver-checkin',title:'Caregiver community check-in',type:'Support session',date:'22 Sep 2026',time:'12:00–1:00 PM',start:'2026-09-22T12:00:00+08:00',end:'2026-09-22T13:00:00+08:00',mode:'Online',venue:'Online',audience:'All caregivers',stage:'All life stages',host:'HSS Community Team',description:'A facilitated session for caregivers to share what is on their minds and connect with one another.',registrationUrl:'https://haemophilia.org.sg/',manageUrl:'https://haemophilia.org.sg/'},
  {id:'school-webinar',title:'Preparing for Primary 1',type:'Webinar',date:'26 Sep 2026',time:'10:00–11:00 AM',start:'2026-09-26T10:00:00+08:00',end:'2026-09-26T11:00:00+08:00',mode:'Online',venue:'Online',audience:'Caregivers',stage:'Primary school',host:'HSS Resource Team',description:'A practical webinar for caregivers preparing for the transition to primary school.',registrationDeadline:'25 Sep 2026',registrationUrl:'https://haemophilia.org.sg/',manageUrl:'https://haemophilia.org.sg/',privateOnlineUrl:'https://haemophilia.org.sg/'},
  {id:'confidence-talk',title:'Helping children build everyday confidence',type:'Talk',date:'30 Sep 2026',time:'7:30–8:30 PM',start:'2026-09-30T19:30:00+08:00',end:'2026-09-30T20:30:00+08:00',mode:'Hybrid',venue:'HSS community room and online',audience:'Caregivers',stage:'Primary school',host:'HSS Community Team',description:'A conversation about supporting confidence through routines at home and school.',registrationDeadline:'20 Sep 2026',registrationUrl:'https://haemophilia.org.sg/',manageUrl:'https://haemophilia.org.sg/'},
  {id:'care-team-ama',title:'Ask a healthcare professional',type:'AMA',date:'12 Oct 2026',time:'8:00–9:00 PM',start:'2026-10-12T20:00:00+08:00',end:'2026-10-12T21:00:00+08:00',mode:'Online',venue:'Online',audience:'All caregivers',stage:'All life stages',host:'HSS with a verified guest',description:'Submit questions in advance and join a moderated community conversation.',registrationDeadline:'10 Oct 2026',registrationUrl:'https://haemophilia.org.sg/',manageUrl:'https://haemophilia.org.sg/',privateOnlineUrl:'https://haemophilia.org.sg/'},
  {id:'family-workshop',title:'Building confidence through everyday routines',type:'Workshop',date:'24 Oct 2026',time:'10:00 AM–12:00 PM',start:'2026-10-24T10:00:00+08:00',end:'2026-10-24T12:00:00+08:00',mode:'Physical',venue:'HSS community room',audience:'Families',stage:'Preschool and kindergarten',host:'HSS Community Team',description:'A small-group workshop focused on confidence, routines and caregiver wellbeing.',registrationDeadline:'20 Oct 2026',registrationUrl:'https://haemophilia.org.sg/',manageUrl:'https://haemophilia.org.sg/'},
  {id:'treatment-conversation',title:'Preparing questions for the care team',type:'Webinar',date:'7 Nov 2026',time:'2:00–3:00 PM',start:'2026-11-07T14:00:00+08:00',end:'2026-11-07T15:00:00+08:00',mode:'Online',venue:'Online',audience:'Members and caregivers',stage:'All life stages',host:'HSS Resource Team',description:'A guided session on organising questions before conversations with the healthcare team.',registrationDeadline:'5 Nov 2026',registrationUrl:'https://haemophilia.org.sg/',manageUrl:'https://haemophilia.org.sg/',privateOnlineUrl:'https://haemophilia.org.sg/'},
  {id:'travel-talk',title:'Planning family travel',type:'Healthcare talk',date:'6 Sep 2026',time:'7:30–8:30 PM',start:'2026-09-06T19:30:00+08:00',end:'2026-09-06T20:30:00+08:00',mode:'Online',venue:'Online',audience:'Caregivers',stage:'All life stages',host:'HSS Resource Team',description:'A recorded discussion about questions families can consider when preparing for travel.',recording:true},
  {id:'school-support-talk',title:'Working with schools and childcare teams',type:'Talk',date:'16 Aug 2026',time:'10:00–11:00 AM',start:'2026-08-16T10:00:00+08:00',end:'2026-08-16T11:00:00+08:00',mode:'Hybrid',venue:'HSS community room and online',audience:'Caregivers',stage:'School years',host:'HSS Resource Team',description:'A session about sharing useful information with educators while protecting privacy.'},
  {id:'sports-session',title:'Sports and healthy living conversation',type:'Webinar',date:'18 Jul 2026',time:'2:00–3:00 PM',start:'2026-07-18T14:00:00+08:00',end:'2026-07-18T15:00:00+08:00',mode:'Online',venue:'Online',audience:'Members and caregivers',stage:'All life stages',host:'HSS with a healthcare guest',description:'General information and questions families can bring to their own healthcare team.'},
  {id:'newly-diagnosed-session',title:'Starting out after diagnosis',type:'Support session',date:'20 Jun 2026',time:'10:00–11:00 AM',start:'2026-06-20T10:00:00+08:00',end:'2026-06-20T11:00:00+08:00',mode:'Online',venue:'Online',audience:'Members and caregivers',stage:'Newly diagnosed',host:'HSS Community Team',description:'A calm introduction to HSS support and common questions from newly diagnosed families.'}
];
const eventStatusMap = {'caregiver-checkin':'Live','school-webinar':'Upcoming','confidence-talk':'Upcoming','care-team-ama':'Upcoming','family-workshop':'Upcoming','treatment-conversation':'Upcoming','travel-talk':'Past','school-support-talk':'Past','sports-session':'Past','newly-diagnosed-session':'Past'};
events.forEach(event => { event.status = eventStatusMap[event.id] || 'Upcoming'; });

const resources = [
  {id:'travel-session-recording',source:'HSS',title:'Planning family travel: session recording',summary:'A practical discussion about preparing documents, treatment supplies and questions before travelling.',format:'Recording',published:'7 Sep 2026',updated:'8 Sep 2026',keyPoints:['Start planning early enough to confirm what applies to your family.','Keep essential documents and supplies accessible during the journey.','Discuss destination-specific questions with your healthcare team.'],excerpts:['“A short checklist that your family knows how to use is more useful than a long document.”'],actions:[['Watch recording','https://haemophilia.org.sg/']],eventId:'travel-talk',eventName:'Planning family travel'},
  {id:'school-conversation-guide',source:'HSS',title:'Talking to schools about haemophilia',summary:'A concise conversation guide for sharing useful information with educators while protecting a child’s privacy.',format:'PDF',published:'18 Sep 2026',updated:'20 Sep 2026',keyPoints:['Agree on one main school contact.','Share only the information staff need for everyday support.','Review the plan when routines or activities change.'],excerpts:['“A clear point of contact helps families and schools keep updates consistent.”'],actions:[['Open PDF','https://haemophilia.org.sg/resources/publications/']],eventId:'school-webinar',eventIds:['school-webinar','school-support-talk'],eventName:'Preparing for Primary 1'},
  {id:'travel-session-slides',source:'HSS',title:'Planning family travel: presentation slides',summary:'Slides covering documents, treatment supplies and questions families can consider before travelling.',format:'PDF',published:'7 Sep 2026',updated:'8 Sep 2026',keyPoints:['Confirm what applies to your family before travelling.','Keep essential information accessible.','Bring destination-specific questions to the care team.'],excerpts:['“Prepare the information your family will need before the journey begins.”'],actions:[['Open PDF','https://haemophilia.org.sg/resources/publications/']],eventId:'travel-talk',eventName:'Planning family travel'},
  {id:'understanding-haemophilia',source:'Healthcare professional',title:'Understanding haemophilia',summary:'A plain-language introduction to haemophilia, common symptoms and the role of specialist care.',format:'Article',published:'16 Sep 2026',updated:'16 Sep 2026',keyPoints:['Haemophilia affects the way blood clots.','Individual treatment and care plans differ.','Speak with the care team about symptoms or changes.'],excerpts:['“Care plans are individual and should be discussed with the treating healthcare team.”'],actions:[['Visit source','https://www.singhealth.com.sg/symptoms-treatments/haemophilia']],eventIds:['newly-diagnosed-session']},
  {id:'infusion-routines-video',source:'HSS',title:'Building a calmer infusion routine',summary:'Families share practical ways to prepare the environment and make treatment routines more predictable.',format:'Video',published:'12 Sep 2026',updated:'12 Sep 2026',keyPoints:['Use a familiar preparation sequence.','Keep questions for the care team in one place.','Adjust routines as children become more independent.'],excerpts:['“Predictability can make a routine feel more manageable for the whole family.”'],actions:[['Watch video','https://haemophilia.org.sg/']]},
  {id:'sports-questions',source:'Healthcare professional',title:'Questions to ask about sports and exercise',summary:'A discussion aid for speaking with the healthcare team about physical activity and individual circumstances.',format:'PDF',published:'10 Sep 2026',updated:'14 Sep 2026',keyPoints:['Ask about the specific activity, frequency and environment.','Review plans when circumstances change.','Do not use general guidance as an individual medical plan.'],excerpts:['“The right questions help a care team understand the activity in context.”'],actions:[['Open PDF','https://www.singhealth.com.sg/symptoms-treatments/haemophilia']],eventIds:['sports-session']},
  {id:'living-with-haemophilia-study',source:'HSS',title:'Living with haemophilia in Singapore',summary:'The HSS national study explores care, lived experiences and outcomes across the Singapore community.',format:'PDF',published:'9 Apr 2026',updated:'9 Apr 2026',keyPoints:['The study considers wellbeing beyond clinical indicators.','Caregiver and member experiences are represented.','Findings support continued community and care conversations.'],excerpts:['“Living well includes physical, emotional and practical realities.”'],actions:[['Open PDF','https://haemophilia.org.sg/resources/publications/']]},
  {id:'caregiver-wellbeing-video',source:'Healthcare professional',title:'Caregiver wellbeing: making room for support',summary:'A short video about recognising caregiver strain and finding appropriate sources of support.',format:'Video',published:'2 Sep 2026',updated:'5 Sep 2026',keyPoints:['Caregiver wellbeing matters.','Small check-ins can make support easier to request.','Professional support may be useful when strain persists.'],excerpts:['“Support for caregivers is part of supporting the whole family.”'],actions:[['Watch video','https://www.singhealth.com.sg/']],eventIds:['caregiver-checkin']}
];

const resourceTopics = {
  'school-conversation-guide':[
    ['Choosing a consistent school contact','Agree on a primary staff contact and a backup person, then decide how routine updates and urgent questions should be shared.'],
    ['Sharing useful information with care','Focus on practical information educators need for daily support, while agreeing with your family and care team what should remain private.'],
    ['Keeping the plan current','Revisit the arrangement when timetables, activities, school staff or the child’s individual care plan change.']
  ],
  'travel-session-recording':[
    ['Documents and preparation','Review the documents, letters and contact information your family may need before the journey.'],
    ['Treatment supplies in transit','Plan how essential supplies will be packed, carried and kept accessible throughout the trip.'],
    ['Questions for the care team','Bring destination, activity and contingency questions to the treating team early enough to make an individual plan.']
  ],
  'travel-session-slides':[
    ['Before the trip','Use the slides as a prompt for confirming documents, supplies and destination-specific considerations.'],
    ['During the journey','Keep key information and essential items somewhere the family can reach easily.'],
    ['When plans change','Know who to contact and which parts of the plan should be reviewed with the care team.']
  ],
  'understanding-haemophilia':[
    ['How clotting is affected','A plain-language overview explains why bleeding may last longer and why experiences differ between people.'],
    ['Recognising changes','The article outlines the kinds of symptoms or changes that should be raised with a healthcare professional.'],
    ['Individual care','Treatment choices and everyday guidance depend on the person’s diagnosis, circumstances and specialist care plan.']
  ],
  'infusion-routines-video':[
    ['Preparing the environment','Families describe how a familiar setup and a predictable order can make the routine easier to follow.'],
    ['Supporting participation','The video explores age-appropriate ways for children to understand and gradually take part in the routine.'],
    ['Reviewing what works','Keep questions together and revisit the routine with the care team as needs and confidence change.']
  ],
  'sports-questions':[
    ['Describing the activity','Consider the activity, frequency, setting and level of contact so the care team has useful context.'],
    ['Planning together','Use the prompts to discuss individual preparation, warning signs and what to do when circumstances change.'],
    ['Reviewing participation','Return to the conversation when the activity, intensity or individual care plan changes.']
  ],
  'living-with-haemophilia-study':[
    ['Everyday wellbeing','The study looks beyond clinical measures to the practical and emotional realities of daily life.'],
    ['Community perspectives','Experiences from people with haemophilia and caregivers are considered alongside care outcomes.'],
    ['Using the findings','The findings can support future conversations about services, support and community priorities.']
  ],
  'caregiver-wellbeing-video':[
    ['Recognising strain','The video describes everyday signs that a caregiver may need more rest, support or space to talk.'],
    ['Starting a check-in','Small, regular conversations can make it easier to say what is difficult and ask for practical help.'],
    ['Finding further support','Persistent strain can be discussed with an appropriate healthcare or support professional.']
  ]
};
resources.forEach(resource => { resource.detailTopics = resourceTopics[resource.id] || resource.keyPoints.map((point, index) => [`Topic ${index + 1}`, point]); });

// Starting like counts for the new resource-likes feature, taken from the
// design's own placeholder numbers so the demo starts out looking lived-in.
const resourceEngagement = {
  'travel-session-recording': 42,
  'school-conversation-guide': 56,
  'travel-session-slides': 31,
  'understanding-haemophilia': 38,
  'infusion-routines-video': 47,
  'sports-questions': 34,
  'living-with-haemophilia-study': 63,
  'caregiver-wellbeing-video': 45
};

// Personas referenced in the design's hardcoded comment threads. They are
// not logins — just display identities for seeded comments, exactly as the
// static handoff showed them.
const personas = {
  RiverBird: 'RB', GentleMoon: 'GM', QuietMango: 'QM', CalmOtter: 'CO',
  NorthStar: 'NS', MorningFern: 'MF', BrightKite: 'BK'
};

// Comment threads that were hardcoded per-screen in the design (detailScreen,
// eventDiscussion, resourceDetailScreen). Re-created here per target so every
// post/event/resource gets the same seeded discussion the design showed.
function seededThreadFor(targetType, targetId) {
  if (targetType === 'post') {
    return [
      { author: 'GentleMoon', roleLabel: 'Most helpful', text: 'Thank you for sharing this so clearly. It gave our family a useful place to start.', likes: 12, ageMinutes: 2880,
        replies: [{ author: 'BrightKite', text: 'Keeping a digital copy as well made a big difference for us.', likes: 4, ageMinutes: 1440 }] },
      { author: 'RiverBird', roleLabel: 'Verified contributor', text: 'We found it helpful to keep our questions in one note so we could revisit them together.', likes: 7, ageMinutes: 1440,
        replies: [
          { author: 'QuietMango', text: 'That is a useful idea. We also add questions as soon as they come to mind.', likes: 2, ageMinutes: 1200 },
          { author: 'RiverBird', text: 'Yes, it means we are not trying to remember everything during the appointment.', likes: 1, ageMinutes: 1080 }
        ] }
    ];
  }
  if (targetType === 'event') {
    return [
      { author: 'RiverBird', text: 'Will the joining details be sent on the day?', likes: 3, ageMinutes: 1440,
        replies: [{ author: 'GentleMoon', text: '@RiverBird HSS usually shares private joining information with registered members.', likes: 0, ageMinutes: 1200 }] }
    ];
  }
  // resource
  return [
    { author: 'RiverBird', text: 'Keeping this in one shared note helped our family prepare questions together.', likes: 3, ageMinutes: 2880, context: '__firstKeyPoint__',
      replies: [{ author: 'GentleMoon', text: 'We do this too and review it before appointments.', likes: 0, ageMinutes: 1440 }] }
  ];
}

module.exports = { content, postImages, events, resources, personas, seededThreadFor, resourceEngagement };
