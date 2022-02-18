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

<br />

## 사용 기술 및 스택

- Stack

  - React Hooks
  - styled-components
  - fetch
  - Deploy : Vercel
  - Other : Git / GitHub
  - Build Tool (Create React App)
  - Code Quality Tool (Prettier)

<br />

## 기능 기획 및 설계

### onChange 이벤트에 따른 데이터 fetch 방식 논의

> 팀원들과의 논의 결과 두 종류의 `fetch` 방식이 추려졌고, 이하와 같은 논리적 이유에 따라 **1번** `data fetch` 방식을 결정했다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/daffb72d-38b5-4d6d-9594-9c17d77a881d/Untitled.png)

<br />

### 1. `**state`에 모든 API Data를 담아둔 뒤 `match` 결과를 맵핑한다.\*\*

> 초기 데이터 로딩 시간이 길어질 수 있음을 감안하여, Next.js를 통해 SSR을 구현하기로 결정

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9eb4b010-0190-4a25-b134-63b71fb307e4/Untitled.png)

1번과 같은 경우는, 초기 렌더링 시에 한 번만 API요청을 보낸 뒤, `state`에 모든 데이터를 담아둔다. 그리고 `input`박스의 `onChange` 이벤트에 따라 `String.match()`를 통한 빠른 검색결과 리스팅을 구현할 수 있다.

- **장점**
  - `state` 배열 내에서 빠르게 `match`값들을 찾아 리스팅해줄 수 있다.
  - 데이터 정렬 횟수를 최소화 할 수 있다.
- **단점**
  - 만약 API데이터의 크기가 클 경우, 초기 데이터 fetch에 따른 로딩 시간이 굉장히 길어질 수 있다.
  - 메모리를 너무 방대하게 차지하는 공간 비효율성이 초래될 수 있다.

<br />

### 2. **onChange마다 해당 값에 맞는 데이터를 DB로부터 get 요청을 보낸다.**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/83468dde-fb18-42aa-a650-c36be12ae9e6/Untitled.png)

2번 방식의 경우, `onChange` 이벤트가 발생할 때마다, **서버에 Get요청**을 보내는 방식이다. MongoDB와 Mongoose를 활용하여 백엔드에서 `regex`를 활용한 데이터 요청과 반환을 구현해보고자 했다.

- **장점**
  - 짧은 데이터 `fetch` 로딩시간 및 렌더링을 기대할 수 있다.
  - 메모리 공간을 크게 차지하지 않아도 된다.
- **단점**
  - `onChange`이벤트는 너무 잦은 이벤트를 야기하기 때문에, 서버에 너무 많은 요청이 일어나 서버에 과부하가 발생할 수 있다.
  - 서버에서 응답 받은 데이터를 매 응답마다 정렬해줘야 한다.

> 이러한 두 방식의 극명한 장단점의 차이로 고민을 하던 중, **1번 방식의 경우 Nextjs의 SSR과 Hook을 활용하면 단점을 최대한 상쇄**시킬 수 있을 것이란 판단이 들어, 1번 데이터 페칭 방식을 선택했다.

우선, Nextjs의 SSR을 활용하여, 초기 렌더링 시에 컴포넌트 템플릿과 UI가 즉시 렌더링 되도록 하여 빈 화면 및 로딩 페이지가 유저에게 띄워지는 것을 방지했다.

또한, SSR을 활용하여 유저들이 가장 많이 검색을 할 것 같은 데이터를 우선적으로 선별하여 최초 렌더링 시에 `state`에 담아두기로 결정했다. 가장 많이 검색 할 것 같은 데이터의 기준은 임의로 추가한 필드인 `registCount`의 내림차순이다.

즉, 초기 렌더링 시에는 **유저들이 저장해둔 영양제 中, 상위 500개**만을 우선적으로 선별하여 `state`에 담아둔다. 그리고 이후의 데이터들은 요청이 생길 때마다 CSR 방식으로 직접 정규표현식을 사용하여 데이터를 검색하여 리스팅 해주는 방식을 선택했다.

<br />

### 검색어 매칭방식 논의

> 그냥 제품명만 검색한다면 구현이 쉽겠지만, 유저에 따라 브랜드명 + 제품명 또는 그냥 제품명, 브랜드명만 따로따로 검색하는 경우의 수 등이 존재했기에 이러한 경우의 수를 모두 커버하기 위한 검색어 매칭방식의 논의를 진행했다.

<br />

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

<br/>

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
