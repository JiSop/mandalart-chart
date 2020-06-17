import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const reducerName = 'mandalart';

// SECTION : action types
const CHANGE_MAIN_GOAL = `${reducerName}/CHANGE_GOAL`;
const CHANGE_SUB_GOAL = `${reducerName}/CHANGE_SUB_GOAL`;
const CHANGE_PLAN = `${reducerName}/CHANGE_PLAN`;

// SECTION : action creators
export const changeMainGoal = createAction(
  CHANGE_MAIN_GOAL,
  mainGoal => mainGoal,
);
export const changeSubGoal = createAction(
  CHANGE_SUB_GOAL,
  ({ index, value }) => ({
    index,
    subGoal: value,
  }),
);
export const changePlan = createAction(CHANGE_PLAN, ({ id, name, value }) => ({
  id,
  name,
  value,
}));

// SECTION : reducer
const initialState = {
  mainGoal: '건강한 서른',
  subGoals: [
    {
      id: 1,
      goal: '건강',
      plans: [
        '12시 취침 07시 기상',
        '식단일기 기록하기',
        '음주량 줄이기',
        '9시 이후 금식',
        '과일 가까이하기',
        '체중 감량(-10kg)',
        '하루 만보 걷기',
        '탄산음료 멀리하기',
      ],
    },
    {
      id: 2,
      goal: '관계',
      plans: [
        '불필요한 관계 정리',
        '감사함, 미안함 자주 표현하기',
        '자주 연락하기',
        '경조사 챙기기',
        '다양한 분야 사람 만나기',
        '약속시간 지키기',
        '의미없는 만남 줄이기',
        '칭찬에 인색하지 않기',
      ],
    },
    {
      id: 3,
      goal: '재정',
      plans: [
        '가계부 작성하기',
        '30대 재정 로드맵',
        '신용카드 줄이기',
        '불필요한 소비 자제',
        '분산 관리',
        '급하게 구입하지 않기',
        '부수입 창출하기',
        '트렌드 공부',
      ],
    },
    {
      id: 4,
      goal: '생활양식',
      plans: [
        '방 깨끗이 유지',
        '존재 지향 소유 지향',
        '많이 실패하기',
        '온종일 일에 묶여있지 않기',
        '한 번에 한 가지씩 하기',
        '느린 리듬으로 살아보기',
        '쓰지않는 물건 나눠주기',
        '물건 자주 버리기',
      ],
    },
    {
      id: 5,
      goal: '성장',
      plans: [
        '독서 40권',
        '영화 100편',
        '온라인 프로젝트',
        '중요한 일 매일 15분 투자',
        '독립서적 출간',
        '생산성 도구 강연',
        '사이드 프로젝트',
        '영상 공부',
      ],
    },
    {
      id: 6,
      goal: '삶의 질',
      plans: [
        '파이썬',
        '일상기록',
        '거절',
        '글쓰기',
        '와인, 위스키',
        '예술영화',
        '재능기부',
        '소설',
      ],
    },
    {
      id: 7,
      goal: '자기다움',
      plans: [
        '유튜브 채널',
        '취향 에세이',
        '안 가본 곳 여행하기',
        '주간 모닥불',
        '종이책 출간',
        '공간 탐사',
        '운동 하나 배우기',
        'Do',
      ],
    },
    {
      id: 8,
      goal: '습관',
      plans: [
        '필사',
        '기상',
        '가계부',
        '운동',
        '워크 플로위',
        '영어',
        '글쓰기',
        '바인더',
      ],
    },
  ],
};

const reducerMap = {
  [CHANGE_MAIN_GOAL]: (state, { payload: mainGoal }) => ({
    ...state,
    mainGoal,
  }),
  [CHANGE_SUB_GOAL]: (state, { payload: { index, subGoal } }) =>
    produce(state, draft => {
      draft.subGoals[index].goal = subGoal;
    }),
  [CHANGE_PLAN]: (state, { payload: { id, name, value } }) =>
    produce(state, draft => {
      draft.subGoals[id].plans[name] = value;
    }),
};

export default handleActions(reducerMap, initialState);
