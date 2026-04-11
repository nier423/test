const dimensions = {
  anchor: {
    label: "内核锚点",
    short: "锚点型",
    color: "#d7a95d",
    soft: "rgba(215, 169, 93, 0.16)",
    description: "向内扎根的自我关照力、情绪接纳力与内在稳定性。",
    behavior: "你擅长先把自己安放好，再用稳定的心绪面对外界。",
  },
  edge: {
    label: "边界锋芒",
    short: "锋芒型",
    color: "#cb694d",
    soft: "rgba(203, 105, 77, 0.14)",
    description: "向外守护的边界感、拒绝力与人生掌控感。",
    behavior: "你更容易在关键时刻划清界限，守住自己真正认同的原则。",
  },
  connect: {
    label: "微光联结",
    short: "联结型",
    color: "#6cae98",
    soft: "rgba(108, 174, 152, 0.16)",
    description: "向他共情的女性互助力、温柔善意与群体联结感。",
    behavior: "你会自然地关注他人的感受，也愿意把善意落到具体行动里。",
  },
  growth: {
    label: "旷野生长",
    short: "生长型",
    color: "#7e9c65",
    soft: "rgba(126, 156, 101, 0.16)",
    description: "向远探索的成长力、创造力与无畏试错的勇气。",
    behavior: "你对可能性保持敏感，愿意为更广阔的生活主动尝试。",
  },
};

const tiePriority = ["connect", "anchor", "edge", "growth"];

const questions = [
  {
    id: "Q01",
    prompt: "结束一整天高强度的忙碌，拖着疲惫的身体回到家，你会优先做什么？",
    options: [
      { key: "A", text: "甩掉鞋子外套直接窝进沙发，什么都不做、什么都不想，先让自己彻底放空十分钟", dimension: "anchor", weight: 1 },
      { key: "B", text: "放一首舒缓的音乐，烧一壶热水泡个澡，用温柔的仪式感卸下一身的疲惫", dimension: "growth", weight: 1 },
      { key: "C", text: "给最亲近的好朋友打个电话，一起吐槽今天的糟心事", dimension: "connect", weight: 1 },
      { key: "D", text: "先把杂乱的房间简单收拾干净，在整洁的环境里，让紧绷的神经慢慢放松下来", dimension: "edge", weight: 1 },
    ],
  },
  {
    id: "Q02",
    prompt: "身体已经发出明显的疲惫、不适信号，但你还有未完成的待办事项，你会怎么选择？",
    options: [
      { key: "A", text: "立刻停下手里的事，优先躺下休息，身体永远是第一位的，事情可以往后放", dimension: "anchor", weight: 1 },
      { key: "B", text: "把待办事项拆成最简单的小步骤，慢慢做完最紧急的部分，就立刻休息", dimension: "growth", weight: 1 },
      { key: "C", text: "坦然与自己和解，把事情延期到状态更好的时候，绝不硬撑着消耗自己", dimension: "connect", weight: 1 },
      { key: "D", text: "集中注意力快速把事情收尾，然后给自己留一段完整的、不被打扰的休息时间", dimension: "edge", weight: 1 },
    ],
  },
  {
    id: "Q03",
    prompt: "刚认识不久的人，过度打探你的收入、感情、家庭等私人信息，你会怎么应对？",
    options: [
      { key: "A", text: "笑着用「也就那样吧」「还没定呢」打太极，温和地绕开话题，不给对方追问的机会", dimension: "connect", weight: 1 },
      { key: "B", text: "直接反问对方「你问这个干什么？」，用一句话划清边界，让对方意识到自己的越界", dimension: "edge", weight: 1 },
      { key: "C", text: "立刻岔开话题，转头和别人聊起别的内容，用行动表明自己不想回答这个问题", dimension: "growth", weight: 1 },
      { key: "D", text: "坦诚地告诉对方「我没有告知你的义务」，直接拒绝回答，不内耗、不勉强自己迎合", dimension: "anchor", weight: 1 },
    ],
  },
  {
    id: "Q04",
    prompt: "朋友频繁找你帮忙，提出的请求已经超出你的能力范围和心理舒适区，你会怎么做？",
    options: [
      { key: "A", text: "温和地向对方说明自己的难处，坦诚自己帮不上忙，同时表达歉意", dimension: "connect", weight: 1 },
      { key: "B", text: "不直接插手，但提供可行的解决思路和替代方案，相信她自己可以处理好", dimension: "growth", weight: 1 },
      { key: "C", text: "明确告诉对方自己的边界，说明这类事情自己以后无法再提供帮助，守住自己的底线", dimension: "edge", weight: 1 },
      { key: "D", text: "直接拒绝，不找多余的借口，不因为对方的期待而委屈自己去承接超出能力的事", dimension: "anchor", weight: 1 },
    ],
  },
  {
    id: "Q05",
    prompt: "在公共场合，看到陌生女性正遭遇尴尬或不公的处境，你会怎么做？",
    options: [
      { key: "A", text: "悄悄上前，用「姐妹，我找你半天了」的方式帮她解围，不动声色地把她带离尴尬的处境", dimension: "connect", weight: 1 },
      { key: "B", text: "直接站出来发声，有理有据地帮她说话，制止不公的行为，给她撑腰", dimension: "edge", weight: 1 },
      { key: "C", text: "默默在一旁录下现场的情况，留好证据，事后如果她需要，可以随时提供帮助", dimension: "growth", weight: 1 },
      { key: "D", text: "等事情结束后，上前给她递一瓶水，陪她说说话，安抚她的情绪，告诉她这不是她的错", dimension: "anchor", weight: 1 },
    ],
  },
  {
    id: "Q06",
    prompt: "职场/校园里，刚入行的女性后辈/学妹因缺乏经验陷入慌乱，向你求助，你会怎么做？",
    options: [
      { key: "A", text: "耐心地带她一步步梳理问题，手把手教她解决的方法，帮她稳住慌乱的情绪", dimension: "connect", weight: 1 },
      { key: "B", text: "先不直接告诉她该怎么办，而是一起梳理核心逻辑和处理框架，让她今后也能举一反三", dimension: "growth", weight: 1 },
      { key: "C", text: "先坐下来听她倾诉焦虑，安抚好她的情绪，再和她一起想办法", dimension: "anchor", weight: 1 },
      { key: "D", text: "主动向她分享自己刚入行时的踩坑经验，告诉她犯错很正常，帮她放下心理负担", dimension: "edge", weight: 1 },
    ],
  },
  {
    id: "Q07",
    prompt: "你心里有一个很想尝试的新鲜爱好，但完全是零基础，你会怎么做？",
    options: [
      { key: "A", text: "立刻买好入门工具，从最简单的内容开始尝试，不怕出错，先动手再说", dimension: "growth", weight: 1 },
      { key: "B", text: "先花时间做足功课，看入门教程、了解相关知识，做好准备再慢慢开始摸索", dimension: "edge", weight: 1 },
      { key: "C", text: "找同样感兴趣的姐妹一起组队学习，互相鼓励、分享心得，把爱好发展成高质量的社交", dimension: "connect", weight: 1 },
      { key: "D", text: "完全不追求成果和进度，把它当成纯粹的解压方式，想起来就玩一会儿，开心就好", dimension: "anchor", weight: 1 },
    ],
  },
  {
    id: "Q08",
    prompt: "在多人讨论的场合，你有一个和大多数人都不一样的观点，你会怎么选择？",
    options: [
      { key: "A", text: "等大家都发言结束，找到合适的时机，清晰、有条理地说出自己的想法和依据", dimension: "edge", weight: 1 },
      { key: "B", text: "先私下和核心相关的人沟通自己的观点，得到认可后，再看是否要公开发言", dimension: "connect", weight: 1 },
      { key: "C", text: "直接大方地表达自己的观点，哪怕和所有人都不一样，也相信自己的思考有价值", dimension: "growth", weight: 1 },
      { key: "D", text: "先把观点记录下来，不急于发表，看后续讨论的发展，再决定是否要分享出来", dimension: "anchor", weight: 1 },
    ],
  },
  {
    id: "Q09",
    prompt: "有人用「女生就该怎样怎样」「你这个年纪就该做什么」的刻板言论评价你，你会怎么回应？",
    options: [
      { key: "A", text: "笑一笑不接话，根本不往心里去，你的人生只由自己定义，没有向别人解释的义务", dimension: "anchor", weight: 1 },
      { key: "B", text: "温和但坚定地反驳对方，告诉对方「女生没有必须要走的路，我想怎么活就怎么活」", dimension: "edge", weight: 1 },
      { key: "C", text: "不做口舌之争，用自己的实际成果和生活状态，直接打破对方的刻板偏见", dimension: "growth", weight: 1 },
      { key: "D", text: "顺着对方的话调侃过去，用尴尬化解尴尬，也让对方下不来台然后吃瘪", dimension: "connect", weight: 1 },
    ],
  },
  {
    id: "Q10",
    prompt: "你在社交平台分享了自己的生活，却收到了恶意的负面评论和人身攻击，你会怎么处理？",
    options: [
      { key: "A", text: "直接删除评论、拉黑账号，不浪费一丝一毫的情绪在无关的陌生人身上", dimension: "anchor", weight: 1 },
      { key: "B", text: "截图留证，反手举报违规内容，平台不处理就继续申诉，守住自己的网络阵地", dimension: "edge", weight: 1 },
      { key: "C", text: "根本不点开评论区，眼不见心不烦，别人的恶意根本影响不到你对生活的热爱", dimension: "growth", weight: 1 },
      { key: "D", text: "有理有据地怼回去，绝不忍气吞声，让对方知道你不好惹", dimension: "connect", weight: 1 },
    ],
  },
  {
    id: "Q11",
    prompt: "你精心筹备了很久的计划，因为突发意外状况彻底被打乱，你会第一时间怎么做？",
    sharedDimension: "connect",
    options: [
      { key: "A", text: "先深呼吸让自己冷静下来，再重新梳理现有条件，调整出可执行的新方案", dimension: "edge", weight: 0.8 },
      { key: "B", text: "先给自己一点时间消化坏情绪，允许自己难过一会儿", dimension: "anchor", weight: 0.8 },
      { key: "C", text: "立刻寻找新的替代方案，随机应变，把意外带来的损失和影响降到最低", dimension: "growth", weight: 0.8 },
    ],
  },
  {
    id: "Q12",
    prompt: "你付出了很多努力去做的一件事，最终却失败了，没有得到预期的结果，你会怎么面对？",
    options: [
      { key: "A", text: "认真复盘整件事情经过，把这次的经验和教训，变成下一次出发的底气", dimension: "growth", weight: 1 },
      { key: "B", text: "允许自己难过、低落一阵子，等情绪过去了，再收拾心情重新出发", dimension: "anchor", weight: 1 },
      { key: "C", text: "换个角度看问题，哪怕没有拿到预期的结果，你也在这个过程里收获了成长和经历", dimension: "connect", weight: 1 },
      { key: "D", text: "干脆放下这件事，转头去做新的事情，不困在过去的失败里，人生永远有新的可能", dimension: "edge", weight: 1 },
    ],
  },
  {
    id: "Q13",
    prompt: "在亲密关系中，对方提出的要求和你的个人需求、底线发生了冲突，你会怎么处理？",
    sharedDimension: "growth",
    options: [
      { key: "A", text: "坦诚地和对方沟通你的底线、感受和顾虑，一起寻找让双方都舒服的平衡点", dimension: "connect", weight: 0.8 },
      { key: "B", text: "明确拒绝对方的要求，你的底线和原则不容退让，哪怕是亲密的人也不行", dimension: "edge", weight: 0.8 },
      { key: "C", text: "不急于回应，观察对方的态度和真实意图，再决定是否要深入沟通这件事", dimension: "anchor", weight: 0.8 },
    ],
  },
  {
    id: "Q14",
    prompt: "身边的亲友都在催你结婚/生子，给你施加了很大的压力，你会怎么应对？",
    options: [
      { key: "A", text: "打太极或者岔开话题，不接话不争论", dimension: "anchor", weight: 1 },
      { key: "B", text: "坦诚说明你的人生规划和想法，希望他们尊重你的选择", dimension: "edge", weight: 1 },
      { key: "C", text: "用玩笑话怼回去，化解尴尬的同时，也让对方知道你不想聊这个话题，守住自己的边界", dimension: "connect", weight: 1 },
      { key: "D", text: "根本不往心里去，日子是自己过的，别人的看法和期待，根本左右不了你的人生选择", dimension: "growth", weight: 1 },
    ],
  },
  {
    id: "Q15",
    prompt: "出门散步时，你无意间发现了一处很美的小众风景，你会怎么做？",
    sharedDimension: "edge",
    options: [
      { key: "A", text: "停下脚步，安安静静地站着看一会儿，把这份不期而遇的美好，悄悄藏在心里", dimension: "anchor", weight: 0.8 },
      { key: "B", text: "拿出手机，认真拍下不同角度的好看照片，分享给同样喜欢美好事物的人", dimension: "connect", weight: 0.8 },
      { key: "C", text: "默默记住这个地方，规划好下次要带的东西，约上朋友一起来感受这份美好", dimension: "growth", weight: 0.8 },
    ],
  },
  {
    id: "Q16",
    prompt: "你想给自己打造一个专属的「治愈角落」，你会更倾向于怎么布置它？",
    options: [
      { key: "A", text: "堆满柔软的抱枕和绒毯，配上暖黄的小台灯，主打极致的松弛感和安全感", dimension: "anchor", weight: 1 },
      { key: "B", text: "摆满自己喜欢的书、鲜活的绿植和喜欢的香薰，每一个细节都藏着你对生活的热爱", dimension: "growth", weight: 1 },
      { key: "C", text: "留足大面积的空白，只放最必要的东西，主打干净清爽的放空感，不被杂物打扰", dimension: "edge", weight: 1 },
      { key: "D", text: "挂满自己画的画、拍的照片和亲手做的手作，每一处都藏着独属于你的故事和回忆", dimension: "connect", weight: 1 },
    ],
  },
  {
    id: "Q17",
    prompt: "开会时，你的男同事抢了你的工作成果和创意，在领导面前邀功，你会怎么处理？",
    options: [
      { key: "A", text: "等他发言结束，立刻补充创意的核心思路和落地细节，不动声色地拿回属于自己的功劳", dimension: "edge", weight: 1 },
      { key: "B", text: "会后第一时间找他和领导沟通，拿出你前期的工作记录和创意素材，明确权责和归属", dimension: "growth", weight: 1 },
      { key: "C", text: "当场直接戳穿，有理有据地说明这是你的创意和工作成果，绝不忍气吞声吃哑巴亏", dimension: "connect", weight: 1 },
      { key: "D", text: "默默收集好所有的工作证据，不急于一时争辩，在更重要的项目里拿出成果，用实力证明自己", dimension: "anchor", weight: 1 },
    ],
  },
  {
    id: "Q18",
    prompt: "公司给了你一个全新的、有挑战的工作机会，但需要你完全跳出舒适区，你会怎么选择？",
    options: [
      { key: "A", text: "果断接下这个机会，想看看自己能做到什么程度", dimension: "growth", weight: 1 },
      { key: "B", text: "全面评估机会的风险、收益和自己的能力边界，做好万全准备再决定是否接手", dimension: "edge", weight: 1 },
      { key: "C", text: "找有相关经验的前辈请教，摸清楚核心难点和应对方法，再做最终决定", dimension: "connect", weight: 1 },
      { key: "D", text: "先接下其中一部分基础工作，慢慢上手熟悉，步调灵活的稳扎稳打", dimension: "anchor", weight: 1 },
    ],
  },
  {
    id: "Q19",
    prompt: "面对人生的岔路口，身边所有人都给你指了「更稳妥、更正确」的路，但你心里想走另一条少有人走的路，你会怎么选？",
    options: [
      { key: "A", text: "遵从内心，哪怕前路未知、不被理解，也坚定地走自己想走的路", dimension: "growth", weight: 1 },
      { key: "B", text: "做好风险预案，在保障基本生活的前提下，预留足够的试错空间", dimension: "edge", weight: 1 },
      { key: "C", text: "认真听取别人的建议，筛选出有价值的部分，但最终的决定权，永远握在自己手里", dimension: "anchor", weight: 1 },
      { key: "D", text: "先给自己一段试错期，不合适再调整，不给人生留遗憾", dimension: "connect", weight: 1 },
    ],
  },
  {
    id: "Q20",
    prompt: "面对「年龄增长」这件事，你内心最认同的想法是什么？",
    sharedDimension: "anchor",
    options: [
      { key: "A", text: "坦然接受每一个阶段的自己，你可以同时拥有温柔与锋芒", dimension: "connect", weight: 0.8 },
      { key: "B", text: "根本不在意数字的增长，只在意有没有活成自己喜欢的样子", dimension: "growth", weight: 0.8 },
      { key: "C", text: "年龄增长带来的，是更清醒的自我认知、更坚定的内心内核，和更自由的人生选择", dimension: "edge", weight: 0.8 },
    ],
  },
  {
    id: "Q21",
    prompt: "职场中，你发现女同事因性别被男同事轻视，对方陷入尴尬又无力反驳，你会怎么做？",
    options: [
      { key: "A", text: "不动声色地加入话题，结合工作实例肯定女同事的专业能力，巧妙化解尴尬", dimension: "connect", weight: 1 },
      { key: "B", text: "当场站出来发声，有理有据地反驳男同事的言论，明确维护女同事的尊严", dimension: "edge", weight: 1 },
      { key: "C", text: "会后悄悄找到女同事，安抚她的情绪，告诉她对方的轻视不代表她的能力不足", dimension: "anchor", weight: 1 },
      { key: "D", text: "默默记下男同事的言论，后续在团队合作中，主动配合女同事，用实际行动认可她的能力", dimension: "growth", weight: 1 },
    ],
  },
  {
    id: "Q22",
    prompt: "校园里，你看到同学被小团体孤立、背后议论，她独自坐在角落神情低落，你会怎么做？",
    options: [
      { key: "A", text: "走到她身边坐下，陪她安静待一会儿，用陪伴传递温暖", dimension: "anchor", weight: 1 },
      { key: "B", text: "主动和她搭话，聊一些轻松的话题，慢慢拉近距离，让她知道自己不是孤单一人", dimension: "connect", weight: 1 },
      { key: "C", text: "找到议论她的同学，严肃提醒她们不要随意议论别人，尊重每个人的特性", dimension: "edge", weight: 1 },
      { key: "D", text: "把自己的小零食、笔记本送给她，让她感到一些小小的善意", dimension: "growth", weight: 1 },
    ],
  },
  {
    id: "Q23",
    prompt: "刷社交平台时，你看到一位陌生网友分享职场性别不公经历，却被网友嘲讽“玻璃心”“小题大做”，你会怎么做？",
    options: [
      { key: "A", text: "在评论区留言声援她，告诉她“你的感受很重要，不是你玻璃心，是不公真实存在”", dimension: "connect", weight: 1 },
      { key: "B", text: "截图留存嘲讽评论，帮她举报违规内容，同时私信她，安抚她的情绪", dimension: "edge", weight: 1 },
      { key: "C", text: "不直接留言，默默给她的分享点赞、收藏，用无声的支持告诉她有人懂她", dimension: "anchor", weight: 1 },
      { key: "D", text: "转发她的分享，并配文呼吁大家尊重女性的发声，拒绝性别偏见和网络嘲讽", dimension: "growth", weight: 1 },
    ],
  },
  {
    id: "Q24",
    prompt: "在女性社群里，有女生倾诉自己因是新手妈妈被职场排挤，不知如何平衡育儿与工作，寻求帮助，你会怎么做？",
    options: [
      { key: "A", text: "结合自己或身边人的经历，分享具体的平衡方法和应对职场排挤的小技巧", dimension: "growth", weight: 1 },
      { key: "B", text: "先认真倾听她的倾诉，共情她的难处，告诉她“你已经做得很好了，不用过度自责”", dimension: "anchor", weight: 1 },
      { key: "C", text: "整理相关的职场权益、育儿支持资源，私信发给她，帮她减少迷茫", dimension: "edge", weight: 1 },
      { key: "D", text: "号召社群里有类似经历的姐妹一起留言分享经验，让她感受到群体的支撑", dimension: "connect", weight: 1 },
    ],
  },
  {
    id: "Q25",
    prompt: "你刷到一位女性博主分享自己的创业经历，评论区有女生留言求助相关问题，博主无暇一一回复，你会怎么做？",
    options: [
      { key: "A", text: "结合自己了解的创业知识或相关经验，认真回复女生的求助，尽量帮她解决疑问", dimension: "connect", weight: 1 },
      { key: "B", text: "告诉求助的女生，自己可以帮她整理博主分享的踩坑重点，后续发给她参考", dimension: "growth", weight: 1 },
      { key: "C", text: "留言引导求助的女生查看博主过往的分享，同时提醒她结合自身情况谨慎参考", dimension: "edge", weight: 1 },
      { key: "D", text: "私信求助的女生，进一步了解她的具体困惑，针对性地给她一些可行的建议", dimension: "anchor", weight: 1 },
    ],
  },
];

const resultLibrary = {
  "anchor-connect": {
    title: "温灯引路人",
    code: "WL",
    archetype: "内核锚点 × 微光联结",
    headline: "你先稳住自己，再把温柔递给别人。",
    tagline: "内心温柔有力量，是自己和他人的情绪避风港。",
    core: [
      "你的力量来自一种很稳的情绪承接感。你不会急着证明自己，却总能在关键时刻给人可靠、柔和、被理解的安全感。",
      "你对他人的照顾不是讨好，而是建立在自我安放之后的主动善意。很多人会在你这里感到被看见，也愿意把真实情绪交给你。",
    ],
    highlights: [
      "能接住复杂情绪，也知道什么时候该先照顾自己的感受",
      "温和但不软弱，给人稳定、可信赖的陪伴感",
      "擅长把细碎生活打理成让人放松的安全空间",
      "在人际关系里自带柔韧度，既能理解也能安抚",
    ],
    growthTip: "你很会照亮别人，但别总把自己放在最后。允许自己先休息、先松弛、先被照顾，并不会削弱你的温柔，反而会让你的力量更长久。",
    message: "你不是勉强发光的人，你是那盏先照见自己、也照亮别人的灯。",
    companions: { bestFriend: "connect-anchor", bestAlly: "anchor-growth", challenge: "edge-growth" },
  },
  "anchor-edge": {
    title: "静水深流者",
    code: "JS",
    archetype: "内核锚点 × 边界锋芒",
    headline: "看起来温和松弛，骨子里却很有原则。",
    tagline: "外表松弛温和，内心有不可撼动的原则与底线。",
    core: [
      "你不是高调的强势型，但你知道什么可以接受、什么必须拒绝。你的稳定感和边界感一起出现，让你在复杂关系里很少失掉自己。",
      "你处理问题时往往先稳住情绪，再做判断。正因为不轻易摇晃，所以一旦做出决定，也很少会被外界轻易改变。",
    ],
    highlights: [
      "温柔表达里带着清晰底线，不容易被情绪裹挟",
      "遇到冒犯或越界时，能用冷静方式守住自己",
      "内心自洽，不需要靠过度解释来换取认同",
      "越是关键时刻，越能显出沉着和笃定",
    ],
    growthTip: "你的边界已经很清楚了，可以试着让“表达需求”这件事更早发生。不是等到触底才说不，而是在轻微不舒服的时候就把自己说清楚。",
    message: "你的温柔从来不是退让，而是带着分寸感的坚定。",
    companions: { bestFriend: "edge-anchor", bestAlly: "anchor-connect", challenge: "growth-connect" },
  },
  "anchor-growth": {
    title: "自在生根者",
    code: "ZZ",
    archetype: "内核锚点 × 旷野生长",
    headline: "你按自己的节奏长大，也给自己留出广阔空间。",
    tagline: "不慌不忙扎根生长，在自己的节奏里活成万种可能。",
    core: [
      "你不喜欢被催促式成长，更相信在安稳与探索之间找到自己的节奏。你的进步不是喧闹的，而是一边扎根、一边向外打开的。",
      "你对生活有温和的掌控欲，也保留着对新鲜事物的好奇心。你会慢慢靠近更喜欢的自己，而不是被外界推着跑。",
    ],
    highlights: [
      "遇到变化时，能先照顾状态再继续前进",
      "不盲目赶路，擅长找到适合自己的成长方式",
      "既重视舒适感，也不会放弃对世界的好奇",
      "很懂得把小步前进积累成长期力量",
    ],
    growthTip: "你已经很会用自己的节奏前进了，下一步可以更勇敢一点，把那些“我再准备一下”的时刻，慢慢变成真正的开始。",
    message: "你不需要被谁推着走，属于你的花，会在你自己的时区里盛开。",
    companions: { bestFriend: "growth-anchor", bestAlly: "anchor-connect", challenge: "connect-edge" },
  },
  "edge-anchor": {
    title: "清醒掌舵人",
    code: "QZ",
    archetype: "边界锋芒 × 内核锚点",
    headline: "你足够清醒，也足够稳，所以方向盘一直在自己手里。",
    tagline: "头脑清醒内心坚定，人生的方向盘永远握在自己手里。",
    core: [
      "你处理事情时很少模糊。该分清的界限、该说清的立场、该守住的原则，你往往比周围人更早意识到，也更敢落实。",
      "但你的清醒不是强硬压人，而是带着自我稳定感的判断力。你知道自己是谁，所以不太容易被别人的声音带偏。",
    ],
    highlights: [
      "面对压力和杂音时，依然能保持判断清晰",
      "不迎合、不逞强，能把选择权稳稳拿回自己手里",
      "表达拒绝时不失分寸，强硬与松弛兼具",
      "越是复杂局面，越能迅速抓住关键",
    ],
    growthTip: "你已经很会掌控方向了，也别忘了给自己留一点柔软空间。偶尔把速度放慢，让情绪先被看见，会让你的清醒更有余裕。",
    message: "你不靠喧闹赢得主导权，你靠清醒和稳定定义自己的航向。",
    companions: { bestFriend: "anchor-edge", bestAlly: "edge-connect", challenge: "growth-connect" },
  },
  "edge-connect": {
    title: "带刺玫瑰",
    code: "DC",
    archetype: "边界锋芒 × 微光联结",
    headline: "你既能护住自己，也愿意为别人站出来。",
    tagline: "有锋芒也有温柔，护得住自己，也撑得起同伴。",
    core: [
      "你并不回避冲突，因为你清楚很多重要的善意，需要有人真正站出来守护。你的锋芒通常不是为了赢，而是为了让不合理的事停下来。",
      "与此同时，你又保留着细腻的共情力。你不是冰冷地说不，而是知道什么时候该安抚，什么时候该发声，什么时候该替别人挡一下风。",
    ],
    highlights: [
      "有很强的正义感，看到不公很难完全沉默",
      "敢表达立场，也懂得把力量用在需要的地方",
      "既不容易委屈自己，也不会轻易忽略别人的难处",
      "在人际关系里自带保护感和可靠感",
    ],
    growthTip: "你为别人撑腰的时候很有力量，也记得把同样的支持给自己。不是所有战场都必须独自上阵，适时求助会让你的锋芒更持久。",
    message: "你的温柔不是妥协，而是有方向、有分寸、有力量的站立。",
    companions: { bestFriend: "connect-edge", bestAlly: "edge-growth", challenge: "anchor-growth" },
  },
  "edge-growth": {
    title: "旷野破局者",
    code: "KP",
    archetype: "边界锋芒 × 旷野生长",
    headline: "你很会开路，也很敢换路。",
    tagline: "不被规则定义，敢闯敢试，永远能为自己开辟新的路。",
    core: [
      "你对人生有很强的主体感。面对不合理的框架，你的第一反应往往不是适应，而是思考有没有别的解法，甚至重新定义规则。",
      "你愿意承担试错成本，也能在变化里维持清晰判断。这让你拥有天然的破局气质，适合走出属于自己的版本。",
    ],
    highlights: [
      "不轻易被既定轨道说服，习惯主动寻找新可能",
      "有行动力也有判断力，冒险并不是冲动",
      "遇到阻力时，更容易被激发出突破欲",
      "你对未来有自己的想象，不爱复制别人的人生模板",
    ],
    growthTip: "你的开路能力很强，但也可以多给自己留一点阶段性停靠点。边走边复盘，不会削弱你的野心，反而会让每一步更扎实。",
    message: "你的人生不是被安排好的轨道，而是一片由你亲手走出来的旷野。",
    companions: { bestFriend: "growth-edge", bestAlly: "edge-connect", challenge: "anchor-connect" },
  },
  "connect-anchor": {
    title: "人间摆渡人",
    code: "BD",
    archetype: "微光联结 × 内核锚点",
    headline: "你天生懂得共情，也懂得怎样把温柔落地。",
    tagline: "共情力拉满，用温柔的善意，照亮自己也温暖他人。",
    core: [
      "你很容易察觉别人的情绪变化，也愿意把理解、陪伴和细致照顾化成行动。你不是抽象地善良，而是会真正伸手的人。",
      "同时，你并不只是向外付出。你也拥有稳定的内在底盘，知道如何让自己不被他人的情绪完全卷走，这让你的温柔更有韧性。",
    ],
    highlights: [
      "共情力强，很会接住他人的局促和失落",
      "在人际细节里有分寸感，让人感到舒服和安心",
      "善意具体而真实，不是口头安慰而已",
      "能够把照顾别人和照顾自己慢慢平衡起来",
    ],
    growthTip: "你的善意很珍贵，也别忘了练习把需求说出来。被需要固然温暖，但你不必只有在照顾别人时才显得有价值。",
    message: "你带来的不是喧闹的存在感，而是那种让人愿意靠近的温暖光线。",
    companions: { bestFriend: "anchor-connect", bestAlly: "connect-growth", challenge: "edge-growth" },
  },
  "connect-edge": {
    title: "微光守护者",
    code: "WG",
    archetype: "微光联结 × 边界锋芒",
    headline: "你会先理解别人，也知道何时替别人挡风。",
    tagline: "温柔但有力量，是女性群体里最可靠的同行者与撑腰人。",
    core: [
      "你很适合成为群体里那个能把温柔和行动结合起来的人。你不只是安慰别人，更会在需要的时候站出来，把支持变成具体的保护。",
      "你知道共情并不等于无限退让，所以你的善意往往带着边界感。正因如此，你给人的安全感既柔软，又很能扛事。",
    ],
    highlights: [
      "能敏锐地发现别人没说出口的委屈和窘迫",
      "关键时刻敢开口，愿意替不公正发声",
      "有强烈的守护意识，也懂得为自己留边界",
      "适合在团队、社群、关系里做可靠的支持者",
    ],
    growthTip: "你总想保护很多人，也别忘了不是每一次都要亲自扛。选择重要的战场，把精力放在真正值得守护的地方，会更轻松也更有力量。",
    message: "你是一束会移动的光，照到哪里，哪里就会多一点底气。",
    companions: { bestFriend: "edge-connect", bestAlly: "connect-anchor", challenge: "growth-anchor" },
  },
  "connect-growth": {
    title: "星火同行者",
    code: "XH",
    archetype: "微光联结 × 旷野生长",
    headline: "你会一边向前走，一边把同行的人也照亮。",
    tagline: "自己热烈生长，也不忘拉着身边的人一起奔赴前路。",
    core: [
      "你对生活很有热情，也很愿意把这种热情传递出去。你不是独自奔跑型的人，而是更喜欢在成长途中与人互相点亮、互相带动。",
      "你的社交不是消耗式热闹，而是建立在共同探索、共同进步上的联结。你会因为自己变得更好而开心，也会因为别人被激发而快乐。",
    ],
    highlights: [
      "热情外放，容易把氛围带活，也容易给人鼓励",
      "很适合做发起者、召集者、同行者",
      "喜欢把新鲜体验和有用经验分享给别人",
      "成长不是独角戏，而是你与世界的互动过程",
    ],
    growthTip: "你有很强的带动感，也记得偶尔停下来，确认自己是真的想走这条路，而不是一直在回应外界的热情。把节奏重新收回自己手里，会让你更舒服。",
    message: "你像一簇星火，先点亮自己，也自然照亮身边愿意同行的人。",
    companions: { bestFriend: "growth-connect", bestAlly: "connect-anchor", challenge: "edge-anchor" },
  },
  "growth-anchor": {
    title: "风里生根者",
    code: "FL",
    archetype: "旷野生长 × 内核锚点",
    headline: "你喜欢向外探索，也知道如何把自己稳稳安住。",
    tagline: "永远对世界保持好奇，走得再远，也有锚定自己的内心力量。",
    core: [
      "你不是为了刺激而变化，而是因为内心真的有想去看的风景。你的探索欲并不漂浮，它往往建立在对自己状态很敏锐的觉察上。",
      "这让你在成长时既保留冒险感，也带着温柔的自我安放。你不需要把自己逼到极限，依然能一步步走到更开阔的地方。",
    ],
    highlights: [
      "好奇心强，但不会失去自己的节奏",
      "面对新机会时，既敢尝试也会照顾状态",
      "容易在探索中形成独特而稳定的生活方式",
      "有能力把远方的吸引力和当下的安稳感兼顾起来",
    ],
    growthTip: "你已经很会让成长变得柔韧了，可以再试着更明确地表达野心。你想去更远的地方，这件事本身就值得被认真看见。",
    message: "你不是随风漂流的人，你是在风里慢慢长出根的人。",
    companions: { bestFriend: "anchor-growth", bestAlly: "growth-connect", challenge: "connect-edge" },
  },
  "growth-edge": {
    title: "无界冒险家",
    code: "WJ",
    archetype: "旷野生长 × 边界锋芒",
    headline: "你对未来有自己的想象，也有守住方向的胆量。",
    tagline: "不被年龄、身份、世俗期待束缚，人生是旷野不是轨道。",
    core: [
      "你很少满足于“照着做就好”的生活。你想知道边界之外还有什么，也愿意为了更自由的可能性重新选择、重新开始、重新定义自己。",
      "与此同时，你并不是毫无原则地冲。你知道如何保留判断、评估成本、守住主动权，所以你的冒险感往往伴随着很强的清醒感。",
    ],
    highlights: [
      "独立、自驱，很少把人生选择完全交给外界",
      "敢突破旧框架，也懂得为自己争取空间",
      "碰到限制时更容易激发行动力和创造力",
      "对身份、年龄、规则有自己的理解，不轻易被定义",
    ],
    growthTip: "你的外扩力量已经很强了，也给自己留一点“慢下来确认感受”的时间。把情绪带上路，而不是把它丢在身后，会让你更完整。",
    message: "你要的从来不是被允许，而是亲手走出属于自己的边界之外。",
    companions: { bestFriend: "edge-growth", bestAlly: "growth-anchor", challenge: "anchor-connect" },
  },
  "growth-connect": {
    title: "繁花引路者",
    code: "FH",
    archetype: "旷野生长 × 微光联结",
    headline: "你会用自己的生长，给别人递出勇气。",
    tagline: "自己活成一束繁花，也愿意为后来的人照亮前行的路。",
    core: [
      "你很容易把个人成长和群体关系连接起来。你不是只想成为更好的自己，而是希望当自己变好时，也能带给别人启发、勇气和可能性。",
      "你的热情带着开放感，愿意分享、愿意联结、愿意把路上的经验交给更多人。这让你的成长很有感染力，也很容易形成带动效应。",
    ],
    highlights: [
      "有生命力，也有分享欲，容易成为群体里的鼓舞者",
      "你喜欢新鲜体验，也愿意把经验回馈给别人",
      "对世界保持开放，人与机会都能被你看见",
      "成长带着温度，不会只顾自己向前冲",
    ],
    growthTip: "你很会把热情变成感染力，但也要给自己留出独处的整理时间。不是所有光都要立刻分享，有些阶段先长在自己身上也很好。",
    message: "你活成一束花的时候，也自然把前路照得更亮。",
    companions: { bestFriend: "connect-growth", bestAlly: "growth-anchor", challenge: "anchor-edge" },
  },
};

const companionRoleLabels = {
  bestFriend: "最佳闺蜜",
  bestAlly: "最佳同行者",
  challenge: "相处需多磨合",
};

const storageKey = "female-power-quiz-state-v1";

const screens = {
  hero: document.getElementById("hero-screen"),
  quiz: document.getElementById("quiz-screen"),
  result: document.getElementById("result-screen"),
};

const startButton = document.getElementById("start-button");
const resumeButton = document.getElementById("resume-button");
const clearButton = document.getElementById("clear-button");
const homeButton = document.getElementById("home-button");
const prevButton = document.getElementById("prev-button");
const restartButton = document.getElementById("restart-button");
const shareButton = document.getElementById("share-button");
const saveButton = document.getElementById("save-button");
const progressLabel = document.getElementById("progress-label");
const progressFill = document.getElementById("progress-fill");
const questionNumber = document.getElementById("question-number");
const questionTitle = document.getElementById("question-title");
const optionsContainer = document.getElementById("options");
const optionTemplate = document.getElementById("option-template");
const toast = document.getElementById("toast");

const resultTitle = document.getElementById("result-title");
const resultCode = document.getElementById("result-code");
const resultArchetype = document.getElementById("result-archetype");
const resultHeadline = document.getElementById("result-headline");
const resultSummary = document.getElementById("result-summary");
const resultPills = document.getElementById("result-pills");
const scoreboard = document.getElementById("scoreboard");
const resultCoreCopy = document.getElementById("result-core-copy");
const highlightList = document.getElementById("highlight-list");
const companionGrid = document.getElementById("companion-grid");
const growthTip = document.getElementById("growth-tip");
const powerQuote = document.getElementById("power-quote");

const posterSize = {
  width: 1080,
  height: 1920,
};

const posterFonts = {
  sans: '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',
  serif: '"STSong", "Songti SC", "Noto Serif SC", serif',
};

let state = loadState();
let currentResultBundle = null;
let autoAdvanceHandle = 0;

function createInitialState() {
  return {
    currentIndex: 0,
    answers: {},
  };
}

function loadState() {
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) {
      return createInitialState();
    }
    return normalizeState(JSON.parse(raw));
  } catch (error) {
    return createInitialState();
  }
}

function normalizeState(candidate) {
  const normalized = createInitialState();

  if (candidate && typeof candidate === "object" && candidate.answers && typeof candidate.answers === "object") {
    questions.forEach((question) => {
      const answer = candidate.answers[question.id];
      const valid = question.options.some((option) => option.key === answer);
      if (valid) {
        normalized.answers[question.id] = answer;
      }
    });
  }

  const firstUnanswered = questions.findIndex((question) => !normalized.answers[question.id]);
  const fallbackIndex = firstUnanswered === -1 ? questions.length - 1 : firstUnanswered;
  const candidateIndex = Number.isInteger(candidate?.currentIndex) ? candidate.currentIndex : fallbackIndex;
  normalized.currentIndex = Math.max(0, Math.min(candidateIndex, questions.length - 1));

  if (firstUnanswered !== -1 && normalized.currentIndex > firstUnanswered) {
    normalized.currentIndex = firstUnanswered;
  }

  return normalized;
}

function persistState() {
  window.localStorage.setItem(storageKey, JSON.stringify(state));
}

function clearState() {
  window.localStorage.removeItem(storageKey);
  state = createInitialState();
  currentResultBundle = null;
}

function answeredCount() {
  return Object.keys(state.answers).length;
}

function isComplete() {
  return answeredCount() === questions.length;
}

function formatScore(value) {
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.hideHandle);
  showToast.hideHandle = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1800);
}

function showScreen(screenName) {
  Object.entries(screens).forEach(([key, element]) => {
    element.classList.toggle("hidden", key !== screenName);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function syncHeroActions() {
  const count = answeredCount();
  startButton.textContent = count > 0 ? "从头开始测试" : "开始测试";

  if (count === 0) {
    resumeButton.classList.add("hidden");
    clearButton.classList.add("hidden");
    return;
  }

  resumeButton.classList.remove("hidden");
  clearButton.classList.remove("hidden");
  resumeButton.textContent = count === questions.length ? "查看上次结果" : `继续上次进度（${count}/25）`;
}

function getCurrentQuestion() {
  return questions[state.currentIndex];
}

function setAnswer(questionId, optionKey) {
  state.answers[questionId] = optionKey;
  persistState();
  syncHeroActions();
}

function renderQuestion() {
  const question = getCurrentQuestion();
  const currentAnswer = state.answers[question.id];
  const progress = ((state.currentIndex + 1) / questions.length) * 100;

  questionNumber.textContent = `Question ${String(state.currentIndex + 1).padStart(2, "0")}`;
  questionTitle.textContent = question.prompt;
  progressLabel.textContent = `${String(state.currentIndex + 1).padStart(2, "0")} / ${questions.length}`;
  progressFill.style.width = `${progress}%`;
  prevButton.disabled = state.currentIndex === 0;

  optionsContainer.innerHTML = "";

  question.options.forEach((option) => {
    const fragment = optionTemplate.content.cloneNode(true);
    const button = fragment.querySelector(".option-card");
    const keyNode = fragment.querySelector(".option-card__key");
    const textNode = fragment.querySelector(".option-card__text");

    keyNode.textContent = option.key;
    textNode.textContent = option.text;
    button.classList.toggle("is-selected", currentAnswer === option.key);
    button.setAttribute("aria-pressed", String(currentAnswer === option.key));
    button.addEventListener("click", () => {
      setAnswer(question.id, option.key);
      renderQuestion();
      window.clearTimeout(autoAdvanceHandle);
      autoAdvanceHandle = window.setTimeout(() => {
        goNext();
      }, 180);
    });

    optionsContainer.appendChild(fragment);
  });
}

function calculateScores() {
  const scores = {
    anchor: 0,
    edge: 0,
    connect: 0,
    growth: 0,
  };

  questions.forEach((question) => {
    const answerKey = state.answers[question.id];
    if (!answerKey) {
      return;
    }

    const selected = question.options.find((option) => option.key === answerKey);
    if (!selected) {
      return;
    }

    scores[selected.dimension] += selected.weight;

    if (question.sharedDimension) {
      scores[question.sharedDimension] += 0.2;
    }
  });

  Object.keys(scores).forEach((key) => {
    scores[key] = Math.round(scores[key] * 10) / 10;
  });

  return scores;
}

function sortDimensions(scores) {
  return [...tiePriority].sort((left, right) => {
    const delta = scores[right] - scores[left];
    if (Math.abs(delta) > 0.0001) {
      return delta;
    }
    return tiePriority.indexOf(left) - tiePriority.indexOf(right);
  });
}

function buildResultBundle() {
  const scores = calculateScores();
  const ranked = sortDimensions(scores);
  const primary = ranked[0];
  const secondary = ranked.find((dimension) => dimension !== primary);
  const key = `${primary}-${secondary}`;

  return {
    key,
    profile: resultLibrary[key],
    primary,
    secondary,
    scores,
    ranked,
  };
}

function setResultTheme(primary) {
  document.documentElement.style.setProperty("--result-accent", dimensions[primary].color);
}

function appendParagraph(target, text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  target.appendChild(paragraph);
}

function createPill(title, subtitle, background) {
  const pill = document.createElement("div");
  const name = document.createElement("span");
  const sub = document.createElement("small");

  pill.className = "pill";
  pill.style.background = background;
  name.textContent = title;
  sub.textContent = subtitle;

  pill.append(name, sub);
  return pill;
}

function renderPills(primary, secondary) {
  resultPills.innerHTML = "";
  resultPills.appendChild(
    createPill(
      `核心主型 · ${dimensions[primary].label}`,
      dimensions[primary].description,
      dimensions[primary].soft
    )
  );
  resultPills.appendChild(
    createPill(
      `气质副型 · ${dimensions[secondary].label}`,
      dimensions[secondary].description,
      dimensions[secondary].soft
    )
  );
}

function renderScoreboard(scores, ranked) {
  scoreboard.innerHTML = "";
  const maxScore = Math.max(...Object.values(scores), 1);

  ranked.forEach((dimensionId) => {
    const row = document.createElement("div");
    const label = document.createElement("span");
    const bar = document.createElement("div");
    const fill = document.createElement("div");
    const value = document.createElement("span");

    row.className = "score-row";
    label.className = "score-row__label";
    bar.className = "score-row__bar";
    fill.className = "score-row__fill";
    value.className = "score-row__value";

    label.textContent = dimensions[dimensionId].label;
    fill.style.width = `${(scores[dimensionId] / maxScore) * 100}%`;
    fill.style.background = `linear-gradient(90deg, ${dimensions[dimensionId].color}, rgba(255, 255, 255, 0.88))`;
    value.textContent = `${formatScore(scores[dimensionId])} 分`;

    bar.appendChild(fill);
    row.append(label, bar, value);
    scoreboard.appendChild(row);
  });
}

function getCompanionReason(role, sourceKey, targetKey) {
  const [sourcePrimary, sourceSecondary] = sourceKey.split("-");
  const [targetPrimary, targetSecondary] = targetKey.split("-");

  if (role === "bestFriend") {
    return "你们的力量顺序像镜像一样互相呼应，彼此很容易听懂对方真正重视的东西。";
  }

  if (role === "bestAlly") {
    if (sourcePrimary === targetPrimary || sourceSecondary === targetSecondary) {
      return "你们气质底色相近，但发力方向不同，很适合一起推进事情、互相补位。";
    }
    return "你们在节奏和视角上形成互补，既能理解彼此，也能把对方往更开阔的方向带。";
  }

  if (sourcePrimary !== targetPrimary && sourceSecondary !== targetSecondary) {
    return "你们都很有主见，只是处理问题的方式差异较大。多解释动机，彼此会舒服很多。";
  }

  return "你们并非不适合，只是对安全感和行动方式的理解不同，需要更多耐心磨合。";
}

function renderCompanions(bundle) {
  companionGrid.innerHTML = "";

  Object.entries(bundle.profile.companions).forEach(([role, targetKey]) => {
    const target = resultLibrary[targetKey];
    const card = document.createElement("article");
    const roleNode = document.createElement("span");
    const titleNode = document.createElement("h4");
    const copyNode = document.createElement("p");

    card.className = "companion-card";
    roleNode.className = "companion-card__role";
    roleNode.textContent = companionRoleLabels[role];
    titleNode.textContent = `${target.title} · ${target.code}`;
    copyNode.textContent = getCompanionReason(role, bundle.key, targetKey);

    card.append(roleNode, titleNode, copyNode);
    companionGrid.appendChild(card);
  });
}

function renderResult() {
  currentResultBundle = buildResultBundle();
  const { profile, primary, secondary, scores, ranked } = currentResultBundle;

  setResultTheme(primary);
  resultTitle.textContent = profile.title;
  resultCode.textContent = `${profile.code} · ${profile.archetype}`;
  resultArchetype.textContent = profile.archetype;
  resultHeadline.textContent = profile.headline;
  resultSummary.textContent = profile.tagline;
  growthTip.textContent = profile.growthTip;
  powerQuote.textContent = profile.message;

  renderPills(primary, secondary);
  renderScoreboard(scores, ranked);

  resultCoreCopy.innerHTML = "";
  appendParagraph(resultCoreCopy, profile.core[0]);
  appendParagraph(resultCoreCopy, profile.core[1]);

  highlightList.innerHTML = "";
  profile.highlights.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    highlightList.appendChild(listItem);
  });

  renderCompanions(currentResultBundle);
  showScreen("result");
}

function showQuiz(startIndex = 0) {
  state.currentIndex = Math.max(0, Math.min(startIndex, questions.length - 1));
  persistState();
  renderQuestion();
  showScreen("quiz");
}

function goNext() {
  const question = getCurrentQuestion();
  if (!state.answers[question.id]) {
    showToast("先选择一个最贴近你的答案");
    return;
  }

  if (state.currentIndex === questions.length - 1) {
    renderResult();
    return;
  }

  state.currentIndex += 1;
  persistState();
  renderQuestion();
}

function goPrev() {
  if (state.currentIndex === 0) {
    return;
  }

  state.currentIndex -= 1;
  persistState();
  renderQuestion();
}

function resumeFlow() {
  if (isComplete()) {
    renderResult();
    return;
  }

  const firstUnanswered = questions.findIndex((question) => !state.answers[question.id]);
  const targetIndex = firstUnanswered === -1 ? state.currentIndex : firstUnanswered;
  showQuiz(targetIndex);
}

function restartQuiz() {
  clearState();
  persistState();
  syncHeroActions();
  showQuiz(0);
}

// --- Poster Generation Logic ---

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function drawRoundedRect(ctx, { x, y, width, height, radius, fill, stroke }) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (fill) {
    ctx.fillStyle = fill;
    ctx.fill();
  }
  if (stroke) {
    ctx.strokeStyle = stroke;
    ctx.stroke();
  }
}

function drawTextBlock(ctx, { text, x, y, maxWidth, font, fillStyle, lineHeight, maxLines }) {
  ctx.font = font;
  ctx.fillStyle = fillStyle;
  const words = Array.from(text);
  let line = "";
  let lineCount = 0;
  let currentY = y;

  for (let n = 0; words.length > 0; n++) {
    let testLine = line + words[0];
    let metrics = ctx.measureText(testLine);
    let testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, currentY);
      line = words.shift();
      currentY += lineHeight;
      lineCount++;
      if (maxLines && lineCount >= maxLines) break;
    } else {
      line = testLine;
      words.shift();
    }
  }
  if (words.length === 0 || (maxLines && lineCount < maxLines)) {
    ctx.fillText(line, x, currentY);
  }
  return currentY + lineHeight;
}

function drawPosterHighlight(ctx, { x, y, width, text, color, index }) {
  const padding = 28;
  const iconSize = 42;
  const height = 100;
  const radius = 24;

  drawRoundedRect(ctx, {
    x,
    y,
    width,
    height,
    radius,
    fill: "rgba(255, 255, 255, 0.7)",
    stroke: hexToRgba(color, 0.1),
  });

  ctx.fillStyle = color;
  ctx.font = `700 28px ${posterFonts.sans}`;
  ctx.fillText(String(index + 1).padStart(2, "0"), x + padding, y + 62);

  ctx.fillStyle = "#1f2937";
  ctx.font = `500 30px ${posterFonts.sans}`;
  ctx.fillText(text, x + padding + iconSize + 16, y + 62);

  return height;
}

async function buildPosterAsset(bundle) {
  const canvas = document.createElement("canvas");
  canvas.width = posterSize.width;
  canvas.height = posterSize.height;
  const context = canvas.getContext("2d");
  const { profile, primary, secondary } = bundle;
  const primaryColor = dimensions[primary].color;
  const secondaryColor = dimensions[secondary].color;

  // Background
  const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "#fbfbfc");
  gradient.addColorStop(0.5, "#f8f6fa");
  gradient.addColorStop(1, "#f4f1f7");
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Decorative Glows
  context.save();
  context.filter = "blur(120px)";
  context.fillStyle = hexToRgba(primaryColor, 0.15);
  context.beginPath();
  context.arc(100, 100, 300, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = hexToRgba(secondaryColor, 0.12);
  context.beginPath();
  context.arc(canvas.width - 100, canvas.height - 100, 350, 0, Math.PI * 2);
  context.fill();
  context.restore();

  const margin = 64;
  const contentWidth = canvas.width - margin * 2;
  const cardY = margin;
  const cardHeight = canvas.height - margin * 2;

  // Main Card
  drawRoundedRect(context, {
    x: margin,
    y: cardY,
    width: contentWidth,
    height: cardHeight,
    radius: 48,
    fill: "#ffffff",
    stroke: "rgba(255, 255, 255, 0.8)",
  });

  let cursorY = cardY + 84;
  const contentX = margin + 64;
  const innerContentWidth = contentWidth - 128;

  // Header
  context.fillStyle = hexToRgba(primaryColor, 0.8);
  context.font = `600 28px ${posterFonts.sans}`;
  context.fillText("女性力量人格图鉴", contentX, cursorY);

  cursorY += 92;
  context.fillStyle = "#111827";
  context.font = `500 84px ${posterFonts.serif}`;
  context.fillText(profile.title, contentX, cursorY);

  cursorY += 72;
  context.fillStyle = "#667085";
  context.font = `500 34px ${posterFonts.sans}`;
  context.fillText(`${profile.code} · ${profile.archetype}`, contentX, cursorY);

  cursorY += 100;
  cursorY = drawTextBlock(context, {
    text: profile.headline,
    x: contentX,
    y: cursorY,
    maxWidth: innerContentWidth,
    font: `500 48px ${posterFonts.serif}`,
    fillStyle: "#111827",
    lineHeight: 68,
    maxLines: 2,
  });

  cursorY += 24;
  cursorY = drawTextBlock(context, {
    text: profile.tagline,
    x: contentX,
    y: cursorY,
    maxWidth: innerContentWidth,
    font: `400 32px ${posterFonts.sans}`,
    fillStyle: "#667085",
    lineHeight: 48,
    maxLines: 2,
  });

  cursorY += 64;
  // Pills
  const pillHeight = 68;
  const drawPill = (text, x, color) => {
    const textWidth = context.measureText(text).width;
    const pWidth = textWidth + 48;
    drawRoundedRect(context, {
      x,
      y: cursorY,
      width: pWidth,
      height: pillHeight,
      radius: 34,
      fill: hexToRgba(color, 0.12),
    });
    context.fillStyle = color;
    context.font = `700 26px ${posterFonts.sans}`;
    context.fillText(text, x + 24, cursorY + 44);
    return pWidth;
  };

  context.font = `700 26px ${posterFonts.sans}`;
  const p1Width = drawPill(`主力 · ${dimensions[primary].label}`, contentX, primaryColor);
  drawPill(`辅助 · ${dimensions[secondary].label}`, contentX + p1Width + 24, secondaryColor);

  cursorY += pillHeight + 84;
  // Divider
  context.strokeStyle = "rgba(17, 24, 39, 0.06)";
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(contentX, cursorY);
  context.lineTo(contentX + innerContentWidth, cursorY);
  context.stroke();

  cursorY += 84;
  // Highlights Section
  context.fillStyle = "#111827";
  context.font = `700 32px ${posterFonts.sans}`;
  context.fillText("你的闪光点", contentX, cursorY);

  cursorY += 48;
  profile.highlights.slice(0, 3).forEach((item, index) => {
    cursorY += drawPosterHighlight(context, {
      x: contentX,
      y: cursorY,
      width: innerContentWidth,
      text: item,
      color: index % 2 === 0 ? primaryColor : secondaryColor,
      index,
    });
    cursorY += 16;
  });

  cursorY += 64;
  // Message Section
  drawRoundedRect(context, {
    x: contentX,
    y: cursorY,
    width: innerContentWidth,
    height: 240,
    radius: 32,
    fill: "rgba(248, 246, 255, 0.5)",
    stroke: hexToRgba(primaryColor, 0.1),
  });

  drawTextBlock(context, {
    text: "专属力量寄语",
    x: contentX + 32,
    y: cursorY + 52,
    maxWidth: innerContentWidth - 64,
    font: `700 28px ${posterFonts.sans}`,
    fillStyle: primaryColor,
    lineHeight: 36,
    maxLines: 1,
  });

  drawTextBlock(context, {
    text: `“${profile.message}”`,
    x: contentX + 32,
    y: cursorY + 112,
    maxWidth: innerContentWidth - 64,
    font: `500 38px ${posterFonts.serif}`,
    fillStyle: "#111827",
    lineHeight: 58,
    maxLines: 2,
  });

  // Footer Tag
  context.fillStyle = "#8b95a7";
  context.font = `600 24px ${posterFonts.sans}`;
  context.fillText("#女性力量人格图鉴  #测试结果", contentX, cardY + cardHeight - 64);

  return {
    blob: await new Promise(r => canvas.toBlob(r, "image/png", 0.95)),
    filename: `FemalePower-${profile.title}-${profile.code}.png`
  };
}

function setButtonLoading(button, loading, text) {
  button.disabled = loading;
  button.classList.toggle("is-loading", loading);
  if (loading) {
    button.dataset.originalText = button.textContent;
    button.textContent = text;
  } else {
    button.textContent = button.dataset.originalText || button.textContent;
  }
}

async function handleSavePoster() {
  if (!currentResultBundle) return;
  setButtonLoading(saveButton, true, "正在生成...");
  try {
    const asset = await buildPosterAsset(currentResultBundle);
    const url = URL.createObjectURL(asset.blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = asset.filename;
    link.click();
    URL.revokeObjectURL(url);
    showToast("海报已开始下载");
  } catch (e) {
    showToast("保存失败，请稍后重试");
  } finally {
    setButtonLoading(saveButton, false);
  }
}

async function handleShareResult() {
  if (!currentResultBundle) return;
  if (navigator.share) {
    setButtonLoading(shareButton, true, "请稍候...");
    try {
      const asset = await buildPosterAsset(currentResultBundle);
      const file = new File([asset.blob], asset.filename, { type: "image/png" });
      await navigator.share({
        title: "女性力量人格图鉴",
        text: `我的测试结果是：${currentResultBundle.profile.title}。快来测测你的专属女性力量！`,
        files: [file],
      });
    } catch (e) {
      if (e.name !== "AbortError") handleSavePoster();
    } finally {
      setButtonLoading(shareButton, false);
    }
  } else {
    handleSavePoster();
  }
}

startButton.addEventListener("click", () => {
  clearState();
  persistState();
  syncHeroActions();
  showQuiz(0);
});

resumeButton.addEventListener("click", resumeFlow);

clearButton.addEventListener("click", () => {
  if (!window.confirm("要清空当前测试进度吗？")) {
    return;
  }
  clearState();
  persistState();
  syncHeroActions();
  showScreen("hero");
  showToast("本地记录已清空");
});

homeButton.addEventListener("click", () => {
  showScreen("hero");
});

prevButton.addEventListener("click", goPrev);
restartButton.addEventListener("click", restartQuiz);
shareButton.addEventListener("click", handleShareResult);
saveButton.addEventListener("click", handleSavePoster);

document.addEventListener("keydown", (event) => {
  const quizVisible = !screens.quiz.classList.contains("hidden");
  if (!quizVisible) {
    return;
  }

  if (event.key === "ArrowLeft") {
    goPrev();
  }

  if (event.key === "ArrowRight") {
    goNext();
  }
});

syncHeroActions();
showScreen("hero");
