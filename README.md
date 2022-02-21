# 💊 영양제 검색 페이지

## 프로젝트 소개

> 고객이 원하는 영양제의 이름을 검색했을때 주어진 Mock Data 안에서 검색한 키워드가 포함된 영양제 목록을 불러와 화면에 출력하는 무한스크롤 페이지를 만들었습니다.

| 팀 구성        | 담당                               |
| -------------- | ---------------------------------- |
| 박훈주, 이현호 | 아이템 리스트, 무한 스크롤, 반응형 |
| 윤창현, 이주영 | Header, Footer, 검색창, 반응형     |

### member

<table>
  <tr>
        </td>
      <td align="center">
      <a href="https://github.com/LEEHYUNHO2001"
        ><img
          src="https://avatars.githubusercontent.com/LEEHYUNHO2001"
          width="100px;"
          alt=""
        /><br /><sub><b>이현호</b></sub></a>
    <br />
    </td>
    <td align="center">
      <a href="https://github.com/hoonjoo-park"
        ><img
          src="https://avatars.githubusercontent.com/hoonjoo-park"
          width="100px;"
          alt=""
        /><br /><sub><b>박훈주</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/Yoon-CH"
        ><img
          src="https://avatars.githubusercontent.com/Yoon-CH"
          width="100px;"
          alt=""
        /><br /><sub><b>윤창현</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/devjoylee"
        ><img
          src="https://avatars.githubusercontent.com/devjoylee"
          width="100px;"
          alt=""
        /><br /><sub><b>이주영</b></sub></a
      ><br />
  </tr>
</table>

<br />

## 배포 주소

### [https://find-my-supplements.vercel.app/](https://find-my-supplements.vercel.app/)

---

## 사용 기술 및 스택

- Stack
  - Next.js
  - Typescript
  - React Hooks
  - emotion
  - axios
  - Deploy : Vercel
  - Other : Git / GitHub
  - Build Tool (Create Next App)
  - Code Quality Tool (Prettier)

<br />

---

## 기능 기획 및 설계

### onChange 이벤트에 따른 데이터 fetch 방식 논의

> 팀원들과의 논의 결과 두 종류의 `fetch` 방식이 추려졌고, 이하와 같은 논리적 이유에 따라 **1번** `data fetch` 방식을 결정했다.

![Untitled](https://user-images.githubusercontent.com/67448481/154735585-49b442da-c3cc-4c15-839c-ad3bd44ec1b5.png)

<br />

### 1. `state`에 모든 API Data를 담아둔 뒤 `match` 결과를 맵핑한다.❌

> 초기 데이터 로딩 시간이 길어질 수 있음을 감안하여, Next.js를 통해 SSR을 구현하기로 결정

![Untitled 1](https://user-images.githubusercontent.com/67448481/154735564-6b5c72a4-a391-4edf-a4a8-fa8464f30b32.png)

1번과 같은 경우는, 초기 렌더링 시에 한 번만 API요청을 보낸 뒤, `state`에 모든 데이터를 담아둔다. 그리고 `input`박스의 `onChange` 이벤트에 따라 `String.match()`를 통한 빠른 검색결과 리스팅을 구현할 수 있다.

- **장점**
  - `state` 배열 내에서 빠르게 `match`값들을 찾아 리스팅해줄 수 있다.
  - 데이터 정렬 횟수를 최소화 할 수 있다.
- **단점**
  - 만약 API데이터의 크기가 클 경우, 초기 데이터 fetch에 따른 로딩 시간이 굉장히 길어질 수 있다.
  - 메모리를 너무 방대하게 차지하는 공간 비효율성이 초래될 수 있다.

<br />

### 2. onChange마다 해당 값에 맞는 데이터를 DB로부터 get 요청을 보낸다. ✅

![Untitled 2](https://user-images.githubusercontent.com/67448481/154735574-4e06195d-a0d1-49a7-b8e2-124c63370fa4.png)

2번 방식의 경우, `onChange` 이벤트가 발생할 때마다, **서버에 Get요청**을 보내는 방식이다. MongoDB와 Mongoose를 활용하여 백엔드에서 `regex`를 활용한 데이터 요청과 반환을 구현해보고자 했다.

- **장점**
  - 데이터 fetch 로딩 및 렌더링 시간의 단축을 기대할 수 있다.
  - 메모리 공간을 크게 차지하지 않아도 된다.
- **단점**
  - `onChange`이벤트는 너무 잦은 이벤트를 야기하기 때문에, 서버에 너무 많은 요청이 일어나 서버에 과부하가 발생할 수 있다.
  - 서버에서 응답 받은 데이터를 매 응답마다 정렬해줘야 한다.

---

### 2번 방식 채택

> 이러한 두 방식의 극명한 장단점의 차이로 고민을 하던 중, 1번 방식의 경우 현재는 데이터의 길이가 600개밖에 안되지만, 추후 확장 가능성을 고려했을 때 효율적이지 못한 방식이 될 것이라 판단하여 **2번 방식을 활용하기로 결정했다.**

![Untitled 3](https://user-images.githubusercontent.com/67448481/154735583-8e023314-7f78-4e36-9ca0-46bd0d17e674.png)

우선, 최대한 서버 요청 횟수를 줄이기 위해 많은 고민을 했다. 그리고 정렬 기능의 효율성을 높이기 위해 데이터 정렬에 대한 시간복잡도 또한 고려하여 기능 구현을 했다.

먼저, **잦은 요청과 그에 따른 데이터 처리량의 부하를 예방**하기 위하여, 매 요청마다 모든 일치 데이터를 불러오는 것이 아닌, 상위 20개씩의 데이터만 우선적으로 불러와 이후의 데이터 페칭은 ‘**무한스크롤**'방식을 통해 불러와지도록 기능설계를 했다. 이러한 데이터 간의 우선순위를 매기기 위해 임의로 `registCount`라는 필드를 DB에 추가했고, 고객이 가장 많이 담은 순서대로 데이터가 먼저 불러와지도록 유도했다.

이를 통해 무작위로 데이터가 20개씩 페칭되는 것이 아닌, **고객이 찾고있을 약일 확률이 높은, 즉 인기가 가장 많은 영양제를 순서대로 불러온 것**이다.

이를 위해서는 **정렬 기능**의 구현이 필요했는데, 시간복잡도를 최소화 하기 위해 **O(nlogn)**의 시간복잡도를 갖는 **병합정렬** 방식을 채택했다. 사실 현재의 데이터에서는 시간복잡도가 크게 유의미하지는 않지만, 추후 데이터가 방대해질 수도 있기에, 정렬에 투입되는 시간비용을 최소화하고자 했다. 또한, 본 프로젝트에서 데이터를 검색하여 불러오는 방식이 `onChange`마다 `get`요청이 이루어지는 것이기에, 정렬기능에서도 최대한의 효율을 고려해야 한다고 판단했다.

이를 통해 버벅임 없이 데이터가 잘 검색되어 화면에 보여질 수 있도록 프로젝트를 잘 마무리 할 수 있었다.

---

### 검색어 매칭방식 논의

> 그냥 제품명만 검색한다면 구현이 쉽겠지만, 유저에 따라 브랜드명 + 제품명 또는 그냥 제품명, 브랜드명만 따로따로 검색하는 경우의 수 등이 존재했기에 이러한 경우의 수를 모두 커버하기 위한 검색어 매칭방식의 논의를 진행했다.

---

## CRA 구조

```markdown
src
│
├─components
│ ├─Layout
│ │ ├─Header
│ │ ├─Footer
│ │ └─Layout
│ ├─SearchBar
│ │ └─SearchForm
│ ├─SearchResult
│ │ ├─ResultList
│ │ └─SearchResult
│ └─SearchSection
├─constants
├─images
├─pages
│ └─api
├─styles
├─types
└─utils
└─mergeSort
```

---

## 커밋 컨벤션

깃모지를 사용하여 직관성을 높이고, 기능이나 UI 설계에 따른 메세지를 커밋 메세지에 담는것을 컨벤션으로 결정했습니다. 깃모지로 인해 상대방이 어떤 작업을 수행했는지 한 눈에 확인할 수 있고, 메세지를 보며 조금 더 상세한 상황을 파악할 수 있습니다.

| 깃모지 | 사용 예시               |
| ------ | ----------------------- |
| 🎉     | init                    |
| 🚚     | 디렉토리 또는 파일 이동 |
| ✨     | 기능 구현               |
| 💄     | CSS 스타일링            |
| ♻️     | 리팩토링                |
| 📝     | Readme 수정             |
| ➕     | 모듈 추가               |
| 🐛     | 버그 해결               |
| 🚑️    | 치명적인 오류 해결      |

<br />

---

## 과제 후기

### **이현호** 😎
기능을 구현하기 위해서 코드를 어떻게 구성해야 할지에 대한 고민을 많이 할 수 있었던 과제였습니다. 혼자서 하는것 보다 팀원과 함께 고민하고 리뷰하는 것이 어려운 기능을 구현하는데 많은 도움이 된다는것을 한번 더 느끼게 되었습니다.

### **윤창현** ✨

단순 개발을 통해 눈에 보여지는 구현으로 끝내는 것이 아니라, 사용자 입장에서 생각해보는 UX적 관념을 이해하고 적용해보았다. 또한 검색 기능을 구현하는 과정에서 다양한 방법들을 먼저 생각한 후 사용자가 사용하기에 가장 적절한 방법을 선택하며 진행하는 등 순간 순간 성장하고 있는 자신과 팀원들을 볼 수 있어서  뿌듯하고 행복한 시간이었습니다.

### **박훈주**🎅

프론트엔드에서도 데이터의 흐름과, 데이터의 효율적인 처리를 위해 깊은 고민을 해야한다는 것을 절감할 수 있었던 귀중한 프로젝트였습니다. 특히, 본 프로젝트에서는 효율성에 관해 굉장히 깊은 논의를 팀원들과 나누었으며, 구현하기로 한 기능 및 설계방식을 실제로 구현하기 위해 끝까지 노력하고 결국  해답을 찾아냈습니다.

### **이주영 👧🏻**
이번 과제에서는 주어진 data에서 입력한 키워드에 해당하는 내용만 filter로 출력하는 검색페이지를 만들었습니다. 앞의 과제에서는 filter를 사용하면 기존의 data가 덮어씌워지는 현상이 발생해 다른 방식으로 구현을 했었는데 이번 과제를 진행하면서 해결방법을 찾아낼 수 있었고 필터링 검색에 대해 확실히 깨닫게 되었습니다.
