"use client"

export interface SentencePair {
  id: string
  english: string
  korean: string
  hint?: string
  showHint?: boolean
}

export interface KeywordOption {
  english: string
  korean: string
}

export interface KeywordList {
  id: string
  name: string
  options: KeywordOption[]
}

const DEFAULT_SENTENCES: SentencePair[] = [
  {
    id: "1762748382896",
    english: "What is your name?",
    korean: "이름이 뭐에요?",
    hint: "",
    showHint: false,
  },
  {
    id: "1762744019842",
    english: "My name is [p = name.selectOne]",
    korean: "저는 [p = name.selectOne]에요.",
  },
  {
    id: "1762745180062",
    english: "What country are you from?",
    korean: "어느 나라 사람이에요?",
  },
  {
    id: "1762743496370",
    english: "I am from [p = country.selectOne]",
    korean: "저는 [p = country.selectOne] 사람이에요",
  },
  {
    id: "1762747446092",
    english: "Maria is from [p = country.selectOne]",
    korean: "마리아 씨는 [p = country.selectOne]예요",
  },
  {
    id: "1762752393179",
    english: "Are you from [p = country.selectOne]?",
    korean: "[p = country.selectOne] 사람이에요?",
  },
  {
    id: "1762752850897",
    english: "No, I'm not from [p = country.selectOne]",
    korean: "아니요, [p = country.selectOne] 사람이 아니에요.",
  },
  {
    id: "1762745271853",
    english: "What is your job?",
    korean: "직업이 뭐예요?",
  },
  {
    id: "1762744392602",
    english: "I am a [p = job.selectOne]",
    korean: "저는 [p = job.selectOne]에요",
    hint: "subject + noun + is",
    showHint: true,
  },
  {
    id: "1762747617621",
    english: "Maria is a [p = job.selectOne]",
    korean: "마리아 씨는 [p = job.selectOne]에요",
    hint: "subject + noun + is",
    showHint: true,
  },
  {
    id: "1762836472059",
    english: "Are you a [p = job.selectOne]?",
    korean: "[p = job.selectOne]에요",
  },
  {
    id: "1762748888578",
    english: "What is your hobby?",
    korean: "취미가 뭐예요?",
  },
  {
    id: "1762748966824",
    english: "My hobby is [p = hobby.selectOne]",
    korean: "취미는 [p = hobby.selectOne]에요",
  },
  {
    id: "1762748491788",
    english: "What is your phone number?",
    korean: "전화 번호가 뭐에요?",
  },
  {
    id: "1762817688756",
    english: "My phone number is [p = phonenumber.selectOne]",
    korean: "전화번호는[p = phonenumber.selectOne]에요",
  },
  {
    id: "1762827973241",
    english: "How old are you?",
    korean: "몇 살이에요?",
  },
  {
    id: "1762827987805",
    english: "I am [p = agenumber.selectOne]",
    korean: "저는 [p = agenumber.selectOne] 살이에요",
  },
  {
    id: "1762753103157",
    english: "How have you been?",
    korean: "잘 지냈어요?",
  },
  {
    id: "1762752321029",
    english: "Nice to meet you",
    korean: "만나서 반가워요",
  },
  {
    id: "1762836778527",
    english: "What is it?",
    korean: "뭐예요?",
  },
  {
    id: "1762836596761",
    english: "It's a [p = objectsubjectparticle.selectOne]",
    korean: "[p = objectsubjectparticle.selectOne]에요.",
    hint: "Object + is",
    showHint: true,
  },
  {
    id: "1762749631271",
    english: "What is this?",
    korean: "이것은 뭐예요?",
  },
  {
    id: "1762754130412",
    english: "[p = name.selectOne], what is this?",
    korean: "[p = name.selectOne] 씨, 이것은 뭐예요?",
  },
  {
    id: "1762749713830",
    english: "What is that?",
    korean: "그것은 뭐예요?",
    hint: "",
    showHint: true,
  },
  {
    id: "1762749733404",
    english: "What is that (over there)?",
    korean: "저것은 뭐예요?",
    hint: "",
    showHint: true,
  },
  {
    id: "1762749775322",
    english: "This is a [p = objectsubjectparticle.selectOne]",
    korean: "이것은  [p = objectsubjectparticle.selectOne]에요",
  },
  {
    id: "1762749828766",
    english: "That is a [p = objectsubjectparticle.selectOne]",
    korean: "그것은 [p = objectsubjectparticle.selectOne]에요",
  },
  {
    id: "1762822536973",
    english: "That (over there) is a [p = objectsubjectparticle.selectOne]",
    korean: "저것은[p = objectsubjectparticle.selectOne]",
  },
  {
    id: "1762754538641",
    english: "[p = name.selectOne], is this a [p = objectsubjectparticle.selectOne]?",
    korean: "[p = name.selectOne] 씨, 이것은 [p = objectsubjectparticle.selectOne]예요?",
  },
  {
    id: "1762815973880",
    english: "This is not [p = food.selectOne]",
    korean: "이것은 [p = food.selectOne] 아니예요",
  },
  {
    id: "1762752484624",
    english: "Do you have [p = food.selectOne]?",
    korean: "[p = food.selectOne] 있어요?",
  },
  {
    id: "1762749851776",
    english: "How much is this?",
    korean: "이거 얼마예요?",
  },
  {
    id: "1762749867113",
    english: "How much is that?",
    korean: "그거 얼마예요?",
  },
  {
    id: "1762749887872",
    english: "How much is that (over there)?",
    korean: "저거 얼마예요?",
  },
  {
    id: "1762752957839",
    english: "How much is the [p = objectsubjectparticle.selectOne]?",
    korean: "[p = objectsubjectparticle.selectOne] 얼마예요?",
  },
  {
    id: "1762753419226",
    english: "Who is that?",
    korean: "저 사람은 누구예요?",
  },
  {
    id: "1762813565150",
    english: "Whose [p = objectsubjectparticle.selectOne] is this?",
    korean: "누구의 [p = objectsubjectparticle.selectOne]에요?",
  },
  {
    id: "1762816824752",
    english: "I have a [p = fruit.selectOne]",
    korean: "[p = fruit.selectOne] 있어요",
  },
  {
    id: "1762816310386",
    english: "I don't have a [p = animal.selectOne]",
    korean: "[p = animal.selectOne] 없어요",
  },
  {
    id: "1762818457834",
    english: "Please give me a [p = fruit.selectOne]",
    korean: "[p = fruit.selectOne] 주세요",
  },
  {
    id: "1762819548433",
    english: "Who is it?",
    korean: "누구예요?",
  },
  {
    id: "1762820175245",
    english: "How many family members do you have?",
    korean: "가족이 몇 명이에요?",
  },
  {
    id: "1762820257393",
    english: "There are [p = nativenumber.selectOne] members in my family",
    korean: "우리 가족은 [p = nativenumber.selectOne] 명이에요.",
  },
  {
    id: "1762820580480",
    english: "Where is the [p = location.selectOne]?",
    korean: "[p = location.selectOne] 어디예요?",
  },
  {
    id: "1762827226536",
    english: "How much is [p = nativenumber.selectOne] [p = fruit.selectOne]?",
    korean: "[p = fruit.selectOne] [p = nativenumber.selectOne] 개에 얼마예요?",
  },
  {
    id: "1762827215592",
    english: "[p = nativenumber.selectOne] [p = fruit.selectOne] please",
    korean: "[p = fruit.selectOne] [p = nativenumber.selectOne] 개 주세요",
  },
  {
    id: "1762831608580",
    english: "[p = itemswithcounter.selectOne] and [p = itemswithcounter.selectOne] please",
    korean: "[p = itemswithcounter.selectOne] 하고 [p = itemswithcounter.selectOne]  주세요",
  },
  {
    id: "1762827723352",
    english: "Where is the [p = objectsubjectparticle.selectOne]?",
    korean: "[p = objectsubjectparticle.selectOne] 어디에 있어요?",
  },
  {
    id: "1762827238168",
    english:
      "The [p = objectsubjectparticle.selectOne] is [p = placement.selectOne] the [p = objectsnoparticle.selectOne]",
    korean:
      "[p = objectsubjectparticle.selectOne]  [p = objectsnoparticle.selectOne] [p = placement.selectOne]에 있어요",
    hint: "subject – object – verb",
    showHint: true,
  },
  {
    id: "1762839479979",
    english: "Where are you going?",
    korean: "어디에 가요?",
  },
  {
    id: "1762839834448",
    english: "I'm going to the [p = placeslocationmarker.selectOne]",
    korean: "[p = placeslocationmarker.selectOne]에가요",
  },
  {
    id: "1762840118828",
    english: "Teacher, we are at the [p = placeslocationmarker.selectOne]",
    korean: "선생님, 우리는 [p = placeslocationmarker.selectOne]에 있어요.",
  },
  {
    id: "1762814302420",
    english: "Do you like [p = hobby.selectOne]?",
    korean: "[p = hobby.selectOne] 좋아해요?",
  },
  {
    id: "1762840780425",
    english: "[p = name.selectOne] is [p = presenttense.selectOne]",
    korean: "[p = name.selectOne]씨는 [p = presenttense.selectOne]",
  },
  {
    id: "1762840807357",
    english: "I am [p = presenttense.selectOne]",
    korean: "저는 [p = presenttense.selectOne]",
    hint: "Subject + verb",
    showHint: true,
  },
  {
    id: "1762841654835",
    english: "I like drinking [p = liquidobjectmarker.selectOne]",
    korean: "저는 [p = liquidobjectmarker.selectOne]  마시어요",
  },
  {
    id: "1762844191342",
    english:
      "The [p = objectsnoparticle.selectOne] are on the [p = placement2.selectOne] of the [p = objectsubjectparticle.selectOne]",
    korean:
      "[p = objectsnoparticle.selectOne] [p = placement2.selectOne]에 [p = objectsubjectparticle.selectOne] 있어요.",
  },
  {
    id: "1762845868148",
    english: "What day is it?",
    korean: "오늘 무슨 요일이에요?",
  },
  {
    id: "1762845478828",
    english: "What do you do on [p = weekday.selectOne]?",
    korean: "[p = weekday.selectOne]에 뭐 해요?",
  },
  {
    id: "1762845890731",
    english: "When do you [p = present2.selectOne]?",
    korean: "언제 [p = present2.selectOne]?",
  },
  {
    id: "1762845953406",
    english: "What day do you [p = dayhobbies.selectOne]?",
    korean: "무슨 요일에 [p = dayhobbies.selectOne]?",
  },
  {
    id: "1762845527637",
    english: "I [p = present2.selectOne] on [p = weekday.selectOne]",
    korean: "저는 [p = weekday.selectOne]에 [p = present2.selectOne]",
  },
  {
    id: "1762846119147",
    english: "Is [p = name.selectOne] [p = foodwithmarker.selectOne]?",
    korean: "[p = name.selectOne] 씨가 [p = foodwithmarker.selectOne]?",
  },
  {
    id: "1762847048055",
    english: "No, [p = name.selectOne] [p = negate.selectOne]",
    korean: "아니요, [p = name.selectOne] 씨가 [p = negate.selectOne]",
  },
  {
    id: "1762845992128",
    english: "What are you doing [p = timesday.selectOne]?",
    korean: "[p = timesday.selectOne]에 뭐 해요?",
  },
  {
    id: "1762914097573",
    english: "Do you [p = activitymarket.selectOne] on weekdays?",
    korean: "평일에 [p = activitymarket.selectOne] 해요?",
    hint: "",
    showHint: true,
  },
  {
    id: "1762922372789",
    english: "I [p = frequency.selectOne] drink [p = liquidobjectmarker.selectOne]",
    korean: "[p = liquidobjectmarker.selectOne] 마셔요 [p = frequency.selectOne]",
    hint: "",
    showHint: true,
  },
];


const DEFAULT_KEYWORDS: KeywordList[] = [
  {
    id: "weekday",
    name: "weekday",
    options: [
      { english: "Monday", korean: "월요일" },
      { english: "Tuesday", korean: "화요일" },
      { english: "Wednesday", korean: "수요일" },
      { english: "Thursday", korean: "목요일" },
      { english: "Friday", korean: "금요일" },
      { english: "Saturday", korean: "토요일" },
      { english: "Sunday", korean: "일요일" },
    ],
  },
  {
    id: "food",
    name: "food",
    options: [
      { english: "pizza", korean: "피자" },
      { english: "ramen", korean: "라면" },
      { english: "friend chicken", korean: "치킨" },
      { english: "juice", korean: "주스" },
      { english: "coffee", korean: "커피" },
      { english: "kimchi", korean: "김치" },
      { english: "milk", korean: "우유" },
      { english: "rice", korean: "밥" },
    ],
  },
  {
    id: "country",
    name: "country",
    options: [
      { english: "Australia", korean: "호주" },
      { english: "Japan", korean: "일본" },
      { english: "Korean", korean: "한국" },
      { english: "China", korean: "중국" },
      { english: "New Zealand", korean: "뉴질랜드" },
      { english: "America", korean: "미국" },
      { english: "Vietnam", korean: "베트남" },
      { english: "Thailand", korean: "태국" },
    ],
  },
  {
    id: "name",
    name: "name",
    options: [
      { english: "Jessica", korean: "제시카" },
      { english: "Jane", korean: "제인이" },
      { english: "Rebecca", korean: "레베카" },
      { english: "Mabel", korean: "메이브" },
    ],
  },
  {
    id: "job",
    name: "job",
    options: [
      { english: "Police Officer", korean: "경찰이" },
      { english: "office employee", korean: "회사원 " },
      { english: "doctor", korean: "의사" },
      { english: "chef", korean: "요리사 " },
      { english: "housewife", korean: " 주부" },
      { english: "nurse", korean: "간호사" },
      { english: "actor", korean: "배우" },
    ],
  },
  {
    id: "places",
    name: "places",
    options: [
      { english: "school", korean: "학교" },
      { english: "Restaurant ", korean: "식당" },
      { english: "pub", korean: "술집" },
      { english: "karaoke ", korean: "노래방" },
      { english: "internet cafe ", korean: "피시방" },
    ],
  },
  {
    id: "hobbies",
    name: "hobby",
    options: [
      { english: "reading", korean: "독서" },
      { english: "hiking", korean: "등산" },
      { english: "cooking", korean: "요리" },
      { english: "swimming", korean: "수영" },
      { english: "travelling", korean: "여행" },
      { english: "singing", korean: "노래하" },
      { english: "horse riding", korean: "승마" },
    ],
  },
  {
    id: "objects",
    name: "objectsubjectparticle",
    options: [
      { english: "desk", korean: "책상이" },
      { english: "book", korean: "책이" },
      { english: "pen", korean: "펜이" },
      { english: "pencil", korean: "연필이" },
      { english: "computer", korean: "컴퓨터" },
      { english: "bag", korean: "가방이" },
      { english: "clock", korean: "시계" },
      { english: "chair", korean: "의자" },
      { english: "wallet", korean: "지갑이" },
      { english: "mirror", korean: "거울이" },
      { english: "calendar", korean: "달력이" },
    ],
  },
  {
    id: "animal",
    name: "animal",
    options: [
      { english: "dog", korean: "개" },
      { english: "puppy", korean: "강아지" },
      { english: "cat", korean: " 고양이" },
      { english: "horse", korean: "말" },
    ],
  },
  {
    id: "objecttopicparticle",
    name: "objecttopicparticle",
    options: [
      { english: "shoes", korean: "구두는" },
      { english: "magazine", korean: "잡지는" },
      { english: "socks", korean: "양말은" },
      { english: "newspaper", korean: "신문은" },
      { english: "bed", korean: "침대는" },
      { english: "guitar", korean: "기타는" },
      { english: "coat", korean: "코트는" },
      { english: "mobile phone", korean: "핸드폰은" },
    ],
  },
  {
    id: "fruit",
    name: "fruit",
    options: [
      { english: "banana", korean: " 바나나" },
      { english: "apple", korean: "사과" },
      { english: " strawberry", korean: "딸기" },
      { english: "watermellon", korean: "수박" },
      { english: "grape", korean: "포도" },
      { english: "pineapple", korean: "파인애플" },
      { english: "tomato", korean: "토마토" },
      { english: "potato", korean: "감자 " },
      { english: "carrot", korean: "당근" },
      { english: "orange", korean: "오렌지" },
    ],
  },
  {
    id: "phonenumber",
    name: "phonenumber",
    options: [
      { english: "0415-781-923", korean: "공사일오 에 칠팔일 에 구삼이" },
    ],
  },
  {
    id: "family",
    name: "family",
    options: [
      { english: "mother", korean: "어머니" },
      { english: "father", korean: "아버지" },
      { english: "wife", korean: "아내" },
      { english: "husband", korean: "남편" },
      { english: "son", korean: "아들" },
      { english: "daughter", korean: "딸" },
      { english: "family", korean: "가족" },
      { english: "grandmother", korean: "할머니" },
      { english: "granfather", korean: "할아버지" },
      { english: "younger brother", korean: "남동생" },
      { english: "younger sister", korean: "여동생" },
    ],
  },
  {
    id: "location",
    name: "location",
    options: [
      { english: "toilet", korean: "화장실" },
      { english: "airport", korean: "공항" },
      { english: "market", korean: "시장" },
      { english: "hotel", korean: "호텔" },
      { english: "park", korean: "공원" },
      { english: "coffee shop", korean: "커피숍" },
    ],
  },
  {
    id: "nativenumber",
    name: "nativenumber",
    options: [
      { english: "one", korean: "하나 " },
      { english: "two", korean: "둘" },
      { english: "three", korean: "셋" },
      { english: "four", korean: "넷" },
      { english: "five", korean: "다섯 " },
      { english: "six", korean: "여섯" },
      { english: "seven", korean: "일곱 " },
      { english: "eight", korean: "여덟 " },
      { english: "nine", korean: "아홉" },
      { english: "ten", korean: "열 " },
    ],
  },
  {
    id: "sinonumber",
    name: "sinonumber",
    options: [
      { english: "one", korean: "일" },
      { english: "two", korean: "이" },
      { english: "three", korean: "삼" },
      { english: "four", korean: "사" },
      { english: "five", korean: "오" },
      { english: "six", korean: "육" },
      { english: "seven", korean: "칠" },
      { english: "eight", korean: "팔" },
      { english: "nine", korean: "구 " },
      { english: "ten", korean: "십" },
    ],
  },
  {
    id: "placement",
    name: "placement",
    options: [
      { english: "above", korean: "위에" },
      { english: "under", korean: "아래에" },
      { english: "in front", korean: "앞에" },
      { english: "behind", korean: "뒤에" },
      { english: "inside", korean: "안에" },
      { english: "beside", korean: "옆에" },
    ],
  },
  {
    id: "placement2",
    name: "placement2",
    options: [
      { english: "left", korean: "왼쪽" },
      { english: "right", korean: "오른쪽" },
    ],
  },
  {
    id: "agenumber",
    name: "agenumber",
    options: [
      { english: "20", korean: "스무" },
      { english: "34", korean: "서른네 " },
      { english: "40", korean: "마흔" },
      { english: "27", korean: "스물일곱" },
      { english: "19", korean: "열아홉" },
    ],
  },
  {
    id: "itemswithcounter",
    name: "itemswithcounter",
    options: [
      { english: "one coffee", korean: "커피 하나 잔" },
      { english: "two cake", korean: "케이크 둘 개" },
      { english: "three water", korean: "물 셋 병" },
    ],
  },
  {
    id: "objectsnoparticle",
    name: "objectsnoparticle",
    options: [
      { english: "computer ", korean: "컴퓨터" },
      { english: "book ", korean: "책상" },
      { english: "bed ", korean: "침대" },
      { english: "glasses", korean: "안경" },
      { english: "shoes", korean: "구두" },
    ],
  },
  {
    id: "placeslocationmarker",
    name: "placeslocationmarker",
    options: [
      { english: "school", korean: "학교" },
      { english: "resturant", korean: "식당" },
      { english: "hospital", korean: "병원" },
      { english: "bank", korean: "은행" },
      { english: "flower shop", korean: "꽃집" },
      { english: "library", korean: "도서관" },
    ],
  },
  {
    id: "presenttense",
    name: "presenttense",
    options: [
      { english: "reading", korean: "읽어요" },
      { english: "eating", korean: "먹어요" },
      { english: "drinking", korean: "마셔요" },
      { english: "working", korean: "일해요" },
      { english: "sleeping", korean: "자요" },
    ],
  },
  {
    id: "liquidobjectmarker",
    name: "liquidobjectmarker",
    options: [
      { english: "coffee", korean: " 커피를" },
      { english: "soju", korean: "소주를" },
      { english: "juice", korean: "맥주를" },
      { english: "water", korean: "물을" },
    ],
  },
  {
    id: "present2",
    name: "present2",
    options: [
      { english: "shower", korean: "샤워해요" },
      { english: "exercise", korean: " 운동해요" },
      { english: "rest", korean: "쉬어요" },
      { english: "study", korean: "공부해요" },
    ],
  },
  {
    id: "dayhobbies",
    name: "dayhobbies",
    options: [
      { english: "study korean", korean: "한국어를 공부해요" },
      { english: "drink coffee", korean: "커피를 마셔요" },
      { english: "exercise at the gym ", korean: "헬스장에서 운동해요" },
      { english: "take the dog for a walk", korean: "개를 산책해요" },
      { english: "listen to music", korean: "음악을 들어요" },
      { english: "clean the house ", korean: "집을 청소해요" },
      { english: "go to work", korean: "일해요" },
    ],
  },
  {
    id: "foodwithmarker",
    name: "foodwithmarker",
    options: [
      { english: "eating bread", korean: "빵을 먹어요" },
      { english: "eating rice", korean: "밥을 먹어요" },
      { english: "drinking tea", korean: "차를 마셔요" },
      { english: "drinking milk", korean: "우유를 마셔요" },
      { english: "eating pasta", korean: "파스타를 먹어요" },
      { english: "eating ramen", korean: "라면을 먹어요" },
      { english: "eating pizza", korean: "피자를 먹어요" },
      { english: "eating avacado", korean: "아보카도를 먹어요" },
      { english: "drinking soju", korean: "소주를 마셔요" },
    ],
  },
  {
    id: "negate",
    name: "negate",
    options: [
      { english: "isn't eating bread ", korean: "빵을 안 먹어요" },
      { english: "isn't eating rice", korean: "밥을 안 먹어요 " },
      { english: "isn't drinking tea ", korean: "차를 안 마셔요" },
      { english: "isn't drinking milk", korean: "우유를 안 마셔요" },
    ],
  },
  {
    id: "timesday",
    name: "timesday",
    options: [
      { english: "in the morning", korean: "아침" },
      { english: "in the afternoon", korean: "오후" },
      { english: "in the evening", korean: "저녁" },
      { english: "at night ", korean: "밤" },
      { english: "on the weekend", korean: "주말" },
      { english: "tomorrow", korean: "내일" },
      { english: "now", korean: "지금" },
      { english: "at dawn", korean: "새벽" },
      { english: "at noon", korean: "점심" },
    ],
  },
  {
    id: "activitymarket",
    name: "activitymarket",
    options: [
      { english: "shower", korean: "샤워를" },
      { english: "cook", korean: "요리를" },
      { english: "date", korean: "데이트를" },
      { english: "eat out ", korean: "외식을" },
    ],
  },
  {
    id: "frequency",
    name: "frequency",
    options: [
      { english: "always", korean: "항상" },
      { english: "usually", korean: "보통" },
      { english: "often", korean: " 자주" },
      { english: "sometimes", korean: "각끔" },
      { english: "rarely", korean: "거의 안" },
      { english: "never", korean: "절대 안" },
    ],
  },
];


const STORAGE_KEY = "sentence-pairs"
const KEYWORDS_STORAGE_KEY = "keyword-lists"

export function getSentences(): SentencePair[] {
  if (typeof window === "undefined") return DEFAULT_SENTENCES

  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    return JSON.parse(stored)
  }
  return DEFAULT_SENTENCES
}

export function saveSentences(sentences: SentencePair[]): void {
  if (typeof window === "undefined") return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sentences))
}

export function getKeywords(): KeywordList[] {
  if (typeof window === "undefined") return DEFAULT_KEYWORDS

  const stored = localStorage.getItem(KEYWORDS_STORAGE_KEY)
  if (stored) {
    return JSON.parse(stored)
  }
  return DEFAULT_KEYWORDS
}

export function saveKeywords(keywords: KeywordList[]): void {
  if (typeof window === "undefined") return
  localStorage.setItem(KEYWORDS_STORAGE_KEY, JSON.stringify(keywords))
}

export function addKeywordList(name: string, options: KeywordOption[]): KeywordList {
  const keywords = getKeywords()
  const newKeyword: KeywordList = {
    id: name.toLowerCase().replace(/\s+/g, "-"),
    name,
    options,
  }
  keywords.push(newKeyword)
  saveKeywords(keywords)
  return newKeyword
}

export function updateKeywordList(id: string, name: string, options: KeywordOption[]): void {
  const keywords = getKeywords()
  const index = keywords.findIndex((k) => k.id === id)
  if (index !== -1) {
    keywords[index] = { id, name, options }
    saveKeywords(keywords)
  }
}

export function deleteKeywordList(id: string): void {
  const keywords = getKeywords()
  const filtered = keywords.filter((k) => k.id !== id)
  saveKeywords(filtered)
}

export function moveSentence(id: string, direction: "up" | "down"): void {
  const sentences = getSentences()
  const index = sentences.findIndex((s) => s.id === id)

  if (index === -1) return

  if (direction === "up" && index > 0) {
    ;[sentences[index], sentences[index - 1]] = [sentences[index - 1], sentences[index]]
    saveSentences(sentences)
  } else if (direction === "down" && index < sentences.length - 1) {
    ;[sentences[index], sentences[index + 1]] = [sentences[index + 1], sentences[index]]
    saveSentences(sentences)
  }
}

export function addSentence(english: string, korean: string, hint?: string, showHint?: boolean): SentencePair {
  const sentences = getSentences()
  const newSentence: SentencePair = {
    id: Date.now().toString(),
    english,
    korean,
    hint,
    showHint,
  }
  sentences.push(newSentence)
  saveSentences(sentences)
  return newSentence
}

export function updateSentence(id: string, english: string, korean: string, hint?: string, showHint?: boolean): void {
  const sentences = getSentences()
  const index = sentences.findIndex((s) => s.id === id)
  if (index !== -1) {
    sentences[index] = { id, english, korean, hint, showHint }
    saveSentences(sentences)
  }
}

export function deleteSentence(id: string): void {
  const sentences = getSentences()
  const filtered = sentences.filter((s) => s.id !== id)
  saveSentences(filtered)
}

export function moveKeywordList(id: string, direction: "up" | "down"): void {
  const keywords = getKeywords()
  const index = keywords.findIndex((k) => k.id === id)

  if (index === -1) return

  if (direction === "up" && index > 0) {
    ;[keywords[index], keywords[index - 1]] = [keywords[index - 1], keywords[index]]
    saveKeywords(keywords)
  } else if (direction === "down" && index < keywords.length - 1) {
    ;[keywords[index], keywords[index + 1]] = [keywords[index + 1], keywords[index]]
    saveKeywords(keywords)
  }
}

export function getRandomSentence(): SentencePair | null {
  const sentences = getSentences()
  if (sentences.length === 0) return null
  const randomIndex = Math.floor(Math.random() * sentences.length)
  const template = sentences[randomIndex]

  const selectionMap = generateSelectionMap()

  return {
    id: template.id,
    english: processTemplate(template.english, "english", selectionMap),
    korean: processTemplate(template.korean, "korean", selectionMap),
    hint: template.hint,
    showHint: template.showHint,
  }
}

function generateSelectionMap(): Map<string, number> {
  const selectionMap = new Map<string, number>()
  return selectionMap
}

function processTemplate(text: string, language: "english" | "korean", selectionMap: Map<string, number>): string {
  const keywords = getKeywords()
  const keywordMap = new Map(keywords.map((k) => [k.name, k.options]))

  // Match pattern: [p = keywordName.selectOne]
  const regex = /\[p\s*=\s*([a-zA-Z0-9_-]+)\.selectOne\]/g

  return text.replace(regex, (match, keywordName) => {
    const options = keywordMap.get(keywordName)
    if (options && options.length > 0) {
      // Get or create a consistent random index for this keyword
      const selectionKey = keywordName
      let randomIndex = selectionMap.get(selectionKey)

      if (randomIndex === undefined) {
        randomIndex = Math.floor(Math.random() * options.length)
        selectionMap.set(selectionKey, randomIndex)
      }

      const selectedOption = options[randomIndex]
      return language === "english" ? selectedOption.english : selectedOption.korean
    }
    return match // Return original if keyword not found
  })
}
