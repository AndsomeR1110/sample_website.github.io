export interface Poem {
  id: number;
  title: string;
  author: string;
  dynasty: string;
  content: string[];
  tags: string[];
  image: string;
}

export const poems: Poem[] = [
  {
    id: 1,
    title: "元日",
    author: "王安石",
    dynasty: "宋代",
    content: [
      "爆竹声中一岁除，",
      "春风送暖入屠苏。",
      "千门万户曈曈日，",
      "总把新桃换旧符。"
    ],
    tags: ["春节", "元日", "爆竹"],
    image: "/images/firecracker.jpg"
  },
  {
    id: 2,
    title: "除夜雪",
    author: "陆游",
    dynasty: "宋代",
    content: [
      "北风吹雪四更初，",
      "嘉瑞天教及岁除。",
      "半盏屠苏犹未举，",
      "灯前小草写桃符。"
    ],
    tags: ["除夕", "雪", "屠苏"],
    image: "/images/plum-blossom.jpg"
  },
  {
    id: 3,
    title: "除夜作",
    author: "高适",
    dynasty: "唐代",
    content: [
      "旅馆寒灯独不眠，",
      "客心何事转凄然。",
      "故乡今夜思千里，",
      "霜鬓明朝又一年。"
    ],
    tags: ["除夕", "思乡", "羁旅"],
    image: "/images/eaves.jpg"
  },
  {
    id: 4,
    title: "守岁",
    author: "苏轼",
    dynasty: "宋代",
    content: [
      "欲知垂尽岁，有似赴壑蛇。",
      "修鳞半已没，去意谁能遮。",
      "况欲系其尾，虽勤知奈何。",
      "儿童强不睡，相守夜欢哗。",
      "晨鸡且勿唱，更鼓畏添挝。",
      "坐久灯烬落，起看北斗斜。",
      "明年岂无年，心事恐蹉跎。",
      "努力尽今夕，少年犹可夸。"
    ],
    tags: ["除夕", "守岁", "励志"],
    image: "/images/lantern.jpg"
  },
  {
    id: 5,
    title: "除夜宿石头驿",
    author: "戴叔伦",
    dynasty: "唐代",
    content: [
      "旅馆谁相问，寒灯独可亲。",
      "一年将尽夜，万里未归人。",
      "寥落悲前事，支离笑此身。",
      "愁颜与衰鬓，明日又逢春。"
    ],
    tags: ["除夕", "思乡", "羁旅"],
    image: "/images/eaves.jpg"
  },
  {
    id: 6,
    title: "田家元日",
    author: "孟浩然",
    dynasty: "唐代",
    content: [
      "昨夜斗回北，今朝岁起东。",
      "我年已强仕，无禄尚忧农。",
      "桑野就耕父，荷锄随牧童。",
      "田家占气候，共说此年丰。"
    ],
    tags: ["元日", "田园", "丰收"],
    image: "/images/bamboo.jpg"
  },
  {
    id: 7,
    title: "新年作",
    author: "刘长卿",
    dynasty: "唐代",
    content: [
      "乡心新岁切，天畔独潸然。",
      "老至居人下，春归在客先。",
      "岭猿同旦暮，江柳共风烟。",
      "已似长沙傅，从今又几年。"
    ],
    tags: ["新年", "思乡", "羁旅"],
    image: "/images/cloud.jpg"
  },
  {
    id: 8,
    title: "除夜",
    author: "文天祥",
    dynasty: "宋代",
    content: [
      "乾坤空落落，岁月去堂堂。",
      "末路惊风雨，穷边饱雪霜。",
      "命随年欲尽，身与世俱忘。",
      "无复屠苏梦，挑灯夜未央。"
    ],
    tags: ["除夕", "悲壮", "气节"],
    image: "/images/lantern.jpg"
  },
  {
    id: 9,
    title: "己酉新正",
    author: "叶颙",
    dynasty: "元代",
    content: [
      "天地风霜尽，乾坤气象和。",
      "历添新岁月，春满旧山河。",
      "梅柳芳容徲，松篁老态多。",
      "屠苏成醉饮，欢笑白云窝。"
    ],
    tags: ["新正", "春回", "喜庆"],
    image: "/images/plum-blossom.jpg"
  },
  {
    id: 10,
    title: "守岁",
    author: "李世民",
    dynasty: "唐代",
    content: [
      "暮景斜芳殿，年华丽绮宫。",
      "寒辞去冬雪，暖带入春风。",
      "阶馥舒梅素，盘花卷烛红。",
      "共欢新故岁，迎送一宵中。"
    ],
    tags: ["除夕", "守岁", "宫廷"],
    image: "/images/lantern.jpg"
  },
  {
    id: 11,
    title: "除夜对酒赠少章",
    author: "陈师道",
    dynasty: "宋代",
    content: [
      "岁晚身何托，灯前客未空。",
      "半生忧患里，一梦有无中。",
      "发短愁催白，颜衰酒借红。",
      "我歌君起舞，潦倒略相同。"
    ],
    tags: ["除夕", "饮酒", "感慨"],
    image: "/images/bamboo.jpg"
  },
  {
    id: 12,
    title: "除夜",
    author: "戴复古",
    dynasty: "宋代",
    content: [
      "扫除茅舍涤尘嚣，一炷清香拜九霄。",
      "万物迎春送残腊，一年结局在今宵。",
      "生盆火烈轰鸣竹，守岁筵开听颂椒。",
      "野客预知农事好，三冬瑞雪未全消。"
    ],
    tags: ["除夕", "迎春", "农事"],
    image: "/images/firecracker.jpg"
  },
  {
    id: 13,
    title: "元日述怀",
    author: "卢照邻",
    dynasty: "唐代",
    content: [
      "筮仕无中秩，归耕有外臣。",
      "人歌小岁酒，花舞大唐春。",
      "草色迷三径，风光动四邻。",
      "愿得长如此，年年物候新。"
    ],
    tags: ["元日", "祝福", "新春"],
    image: "/images/plum-blossom.jpg"
  },
  {
    id: 14,
    title: "应诏赋得除夜",
    author: "史青",
    dynasty: "唐代",
    content: [
      "今岁今宵尽，明年明日催。",
      "寒随一夜去，春逐五更来。",
      "气色空中改，容颜暗里回。",
      "风光人不觉，已著后园梅。"
    ],
    tags: ["除夕", "辞旧迎新", "梅花"],
    image: "/images/plum-blossom.jpg"
  },
  {
    id: 15,
    title: "探春令·笙歌间错华筵启",
    author: "赵长卿",
    dynasty: "宋代",
    content: [
      "笙歌间错华筵启。喜新春新岁。",
      "菜传纤手青丝细。和气入、东风里。",
      "幡儿胜儿都姑媂。戴得更忔戏。",
      "愿新春以后，吉吉利利。百事都如意。"
    ],
    tags: ["新春", "祝福", "喜庆"],
    image: "/images/cloud.jpg"
  },
  {
    id: 16,
    title: "癸巳除夕偶成",
    author: "黄景仁",
    dynasty: "清代",
    content: [
      "千家笑语漏迟迟，忧患潜从物外知。",
      "悄立市桥人不识，一星如月看多时。"
    ],
    tags: ["除夕", "孤独", "感慨"],
    image: "/images/lantern.jpg"
  },
  {
    id: 17,
    title: "客中除夕",
    author: "袁凯",
    dynasty: "明代",
    content: [
      "今夕为何夕，他乡说故乡。",
      "看人儿女大，为客岁年长。",
      "戎马无休歇，关山正渺茫。",
      "一杯柏叶酒，未敌泪千行。"
    ],
    tags: ["除夕", "思乡", "羁旅"],
    image: "/images/eaves.jpg"
  },
  {
    id: 18,
    title: "双雁儿·除夕",
    author: "杨无咎",
    dynasty: "宋代",
    content: [
      "穷阴急景暗推迁。减绿鬓，损朱颜。",
      "利名牵役几时闲。又还惊，一岁圆。",
      "劝君今夕不须眠。且满满，泛觥船。",
      "大家沉醉对芳筵。愿新年，胜旧年。"
    ],
    tags: ["除夕", "祝福", "辞旧迎新"],
    image: "/images/bamboo.jpg"
  },
  {
    id: 19,
    title: "除夜立春",
    author: "吴文英",
    dynasty: "宋代",
    content: [
      "翦红情，裁绿意，花信上钗股。",
      "残日东风，不放岁华去。",
      "有人添烛西窗，不眠侵晓，笑声转、新年莺语。"
    ],
    tags: ["除夕", "立春", "喜庆"],
    image: "/images/plum-blossom.jpg"
  },
  {
    id: 20,
    title: "玉楼春·己卯岁元日",
    author: "毛滂",
    dynasty: "宋代",
    content: [
      "一年滴尽莲花漏。碧井酴酥沈冻酒。",
      "晓寒料峭尚欺人，春态苗条先到柳。",
      "佳人重劝千长寿。柏叶椒花芬翠袖。",
      "醉乡深处少相知，只与东君偏故旧。"
    ],
    tags: ["元日", "饮酒", "迎春"],
    image: "/images/bamboo.jpg"
  },
  {
    id: 21,
    title: "拜年",
    author: "文征明",
    dynasty: "明代",
    content: [
      "不求见面惟通谒，名纸朝来满敝庐。",
      "我亦随人投数纸，世情嫌简不嫌虚。"
    ],
    tags: ["春节", "拜年", "习俗"],
    image: "/images/cloud.jpg"
  },
  {
    id: 22,
    title: "除夜太原寒甚",
    author: "于谦",
    dynasty: "明代",
    content: [
      "寄语天涯客，轻寒底用愁。",
      "春风来不远，只在屋东头。"
    ],
    tags: ["除夕", "寒夜", "希望"],
    image: "/images/eaves.jpg"
  },
  {
    id: 23,
    title: "新年",
    author: "真山民",
    dynasty: "宋代",
    content: [
      "妆点新年，喜庆洋溢。",
      "杏桃催换新颜色，惟有寒梅老一年。"
    ],
    tags: ["新年", "梅花", "岁月"],
    image: "/images/plum-blossom.jpg"
  },
  {
    id: 24,
    title: "岁夜咏怀",
    author: "刘禹锡",
    dynasty: "唐代",
    content: [
      "弥年不得意，新岁又如何？",
      "念昔同游者，而今有几多。",
      "以闲为自在，将寿补蹉跎。",
      "春色无情故，幽居亦见过。"
    ],
    tags: ["新岁", "感慨", "人生"],
    image: "/images/bamboo.jpg"
  },
  {
    id: 25,
    title: "巴山道中除夜书怀",
    author: "崔涂",
    dynasty: "唐代",
    content: [
      "迢递三巴路，羁危万里身。",
      "乱山残雪夜，孤烛异乡人。",
      "渐与骨肉远，转于僮仆亲。",
      "那堪正飘泊，明日岁华新。"
    ],
    tags: ["除夕", "思乡", "羁旅"],
    image: "/images/eaves.jpg"
  },
  {
    id: 26,
    title: "除夜有怀",
    author: "崔涂",
    dynasty: "唐代",
    content: [
      "迢递三巴路，羁危万里身。",
      "乱山残雪夜，孤独异乡人。"
    ],
    tags: ["除夕", "思乡", "孤独"],
    image: "/images/lantern.jpg"
  },
  {
    id: 27,
    title: "元旦口占用柳亚子怀人韵",
    author: "董必武",
    dynasty: "近代",
    content: [
      "共庆新年笑语哗，红岩士女赠梅花。",
      "举杯互敬屠苏酒，散席分尝胜利茶。",
      "只有精忠能报国，更无乐土可为家。",
      "陪都歌舞迎佳节，遥祝延安景物华。"
    ],
    tags: ["元旦", "喜庆", "革命"],
    image: "/images/plum-blossom.jpg"
  },
  {
    id: 28,
    title: "思佳客·癸卯除夜",
    author: "吴文英",
    dynasty: "宋代",
    content: [
      "十年旧梦无寻处，几度新春不在家。",
      "衣懒换，酒难赊。可怜此夕看梅花。"
    ],
    tags: ["除夕", "思乡", "梅花"],
    image: "/images/plum-blossom.jpg"
  },
  {
    id: 29,
    title: "除夕",
    author: "于谦",
    dynasty: "明代",
    content: [
      "今宵是除夕，明日又新年。",
      "爆竹惊残梦，寒镫照独眠。"
    ],
    tags: ["除夕", "辞旧迎新", "爆竹"],
    image: "/images/firecracker.jpg"
  },
  {
    id: 30,
    title: "除夜书怀",
    author: "范成大",
    dynasty: "宋代",
    content: [
      "有怀怜雁断，无思惜梅疏。",
      "除夕夜沉沉，孤灯照客心。"
    ],
    tags: ["除夕", "思乡", "孤灯"],
    image: "/images/lantern.jpg"
  },
  {
    id: 31,
    title: "除夜自石湖归苕溪",
    author: "姜夔",
    dynasty: "宋代",
    content: [
      "细草穿沙雪半销，吴宫烟冷水迢迢。",
      "梅花竹里无人见，一夜吹香过石桥。"
    ],
    tags: ["除夕", "梅花", "归途"],
    image: "/images/plum-blossom.jpg"
  },
  {
    id: 32,
    title: "除夕吴子充诸人集旅寓有感",
    author: "谢榛",
    dynasty: "明代",
    content: [
      "一年忧喜今宵过，两鬓风霜明日新。",
      "感谢诸君相伴意，且同守岁醉芳辰。"
    ],
    tags: ["除夕", "守岁", "友谊"],
    image: "/images/bamboo.jpg"
  }
];

export default poems;
