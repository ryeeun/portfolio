import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import "./ProjectInfo.css";
import ProjectDetails from "./components/ProjectDetails";
import { useNavigate, useParams } from "react-router-dom";

const projectArr = [
  {
    id: 1,
    image: "pinning",
    type: "Android App",
    title: "Pinning",
    desc: "나만의 추억을 기록하는 맵 다이어리 애플리케이션",
    stack: ["Java", "Android Studio", "Firebase", "Kakao Map API"],
    period: "2021.04.09 -2021.07.30",
    team: "개인",
    link: "https://github.com/ryeeun/Pinning",
    },
  {
    id: 2,
    image: "metaverse",
    type: "Metaverse",
    title: "냉장고동 행복센터",
    desc: "취미 공유 인공지능 매칭 메타버스 플랫폼",
    stack: ["C#", "Unity", "Photon"],
    period: "2021.08.25 - 2021.08.27",
    team: "기획자 1명, AI 개발자 1명, Client 개발자 1명, 디자이너 1명",
    link: "https://github.com/2021-innovation-hackathon/DaOn",
    },
  {
    id: 3,
    image: "tecono",
    type: "Web",
    title: "T-ECONO",
    desc: "개발 기술 공유 블로그",
    stack: ["React", "JavaScript", "CSS", "HTML", "GraphQL"],
    period: "2022.03.02 - 2022.07.29",
    team: "Frontend 2명, Backend 2명, 디자이너 1명",
    link: "https://github.com/JNU-econovation/econo-techblog",
  },
  {
    id: 4,
    image: "Farmer",
    type: "Web",
    title: "Farmer",
    desc: "AI를 활용한 수확 예측 홈 파밍 애플리케이션",
    stack: ["React", "JavaScript", "CSS", "HTML", "PWA"],
    period: "2023.03.02 - 2023.07.07",
    team: "Frontend 2명, Backend 1명, AI 개발자 1명",
    link: "https://github.com/CNU-Farmer/Farmer",
  },
];

const contentArr = [`
### 📌 상세 화면


![상세화면](${process.env.PUBLIC_URL}/img/pinning-detail.png)

&nbsp;

### 📌 서비스 내용

  
  이미지, 위치, 글을 작성하여 **자신의 추억을 지도 위에 기록하는 애플리케이션**입니다.
  
  위 서비스에서 제공하는 기능입니다.
  
  1. 지도에 핀 등록

  2. 자신이 등록한 핀들이 놓여진 지도 보기
      - 모든 핀 보기

      - 카테고리에 따라 분류된 핀 보기

      - 핀 검색

  3. 다른 사람들이 등록한 핀 모아보기

      - 스크랩을 통해 다른 사람들의 핀 저장

      &nbsp;
  
  ### 📌 담당 역할
  
  
  - 애플리케이션 기획 및 설계

  - UI 설계 및 디자인

  - Firebase 연동 및 관리

  - Kakao Map API를 활용하여 커스텀 핀 제작

  - 핀 등록 및 등록된 핀을 지도상의 해당 위치에 표시

  - 카테고리 또는 핀 명으로 핀 분류 및 검색

  &nbsp;
  
  ### 📌 배운점
  
  
  - 첫 개발 프로젝트로 진행하면서 하나의 어플리케이션이 만들어지는 기획, 개발, 디자인 과정을 직접 경험하며 이론으로 배운 것들을 적용해볼 수 있었음.
  - **Kakao Map API**와 **Kakao 로컬 API**를 처음 사용해보았으며, 앱 rest API 키를 헤더에 담아 요청하고, API 문서를 참고하여 필요한 기능들을 개발함.
  - 별도의 서버 구축 없이 DB를 사용하기 위해 Firebase를 사용할 수 있음.
      
      이미지 데이터 관리의 경우, **Firebase의 Cloud Storage**에 이미지 저장하고 **Cloud Firestore**에 구축된 DB의 해당 이미지 URL을 통해 이미지를 호출하는 방식으로 이미지를 관리할 수 있음.`,
`
### 📌 상세 화면


![상세화면](${process.env.PUBLIC_URL}/img/metaverse-detail.png)

&nbsp;

### 📌 담당기능

- Unity를 이용한 Client 개발 담당

- Photon을 이용한 동기화 및  AI 추천 시스템 연동
&nbsp;

### 📌 배운점


- Git을 통한 협업과 버전 관리를 수행함를 통해 Git 사용을 익힐 수 있었음.
- 기획자 - 개발자 - 디자이너 간의 협업 과정을 이해할 수 있었으며, 원활한 소통과 협력이 팀 프로젝트에서 얼마나 중요한지와 소통에는 서로에 대한 신뢰가 바탕이 될 필요가 있다는 것을 직접 경험하며 배울 수 있었음.
- 다수가 동시에 사용하는 플랫폼인 만큼 **동기화** 문제를 신경써서 개발해야 했고, 글로만 접하여 어려웠던 동기화를 프로젝트에 직접 적용해봄으로써 이해할 수 있었음.`,
`
### 📌 상세 화면


![상세화면](${process.env.PUBLIC_URL}/img/Tecono-detail.png)

&nbsp;

### 📌 서비스 내용


개발 동아리의 **개발 기술 공유 블로그**입니다.

위 서비스에서 제공하는 기능입니다.

1. Tech, Culture, Trouble Shooting 3가지 카테고리로 글을 구분하여 작성 및 조회

2. 관리자 페이지를 통해 일반 회원과 관리자 회원의 권한 구분을 위한 관리 기능

&nbsp;

### 📌 담당기능


- React.js를 이용하여 웹 구현

- Tech, Culture, Trouble Shooting 3가지 카테고리 구분하여 글 작성 및 조회 페이지

- 일반 회원과 관리자 회원 구분 및 게시물 관리를 위한 Admin 페이지

- GraphQL을 이용한 서버 연동

&nbsp;

### 📌 배운점


- 프로젝트를 기획할 때 해당 서비스를 이용할 사용자의 니즈를 파악하고 요구사항을 자세히 명세하는 것에 집중하기 위해 노력함

- 원하는 데이터 이상의 정보를 요청하여 낭비되는 리소스를 **GraphQL**로 방지할 수 있음.

- **Apollo Client**는 QraphQL과 연동, 데이터 요청 및 캐싱을 가능하게 해줌.

이를 통해 좋아요와 같이 단순하지만 자주 변경될 수 있는 상태 관리에 유용하게 사용될 수 있음.                                               

- 단순히 기능만 구현하는 것이 아닌,  **Git**을 통해 소스를 관리하며 팀원들과 코드 리뷰를 진행하고, **Git 브랜치 전략**에 대해 이해할 수 있음.

- **Zeplin**과 **XD**라는 디자인 가이드 협업 도구를 처음 사용해봄. 디자이너와의 협업을 통해 디테일한 부분까지 논의하고 구현할 수 있었음.`,
`
### 📌 상세 화면


![상세화면](${process.env.PUBLIC_URL}/img/Farmer-detail.png)

&nbsp;

### 📌 서비스 내용


작물의 수확 시기를 예측하고, 작물 성장을 위한 일정 관리를 돕는 **홈 파밍 애플리케이션**입니다.

위 서비스에서 제공하는 기능입니다.

1. 사용자가 등록한 이미지를 기반으로 수확 시기 예측

2. 등록된 작물의 성장을 위해 물주기와 같은 일정 관리

&nbsp;

### 📌 담당 기능


**PWA(Progressive Web App)** 

- 프로젝트 UI 설계 및 디자인

- 메인 페이지, 작물 등록 페이지 개발

- 작물 정보 및 작물 이미지 등록을 위해 REST API를 통해 서버와 연동

&nbsp;

### 📌 배운점


- UML 다이어그램으로 시각화하고, 요구사항 명세, 간트 차트 등의 문서로 작성하였으며, **Notion**을 통해 문서와 일정을 관리함으로써 프로젝트를 체계적으로 진행할 수 있었음.

- **Git-flow 전략**
  여러 개발자가 하나의 저장소를 효과적으로 활용하기 위해 Git-flow 전략을 선택하여 보통 크게 메인 브랜치인 main과 develop, 보조브랜치인 feature, release, hotfix를 사용한다. 본 프로젝트는 feature 브랜치를 각 서비스에 따라 plant-service, calendar-service 등으로 구분하였음.`,
];

const ProjectInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [project, setProject] = useState();

  useEffect(() => {
    setProject(projectArr[id - 1]);
  }, [id]);

  const onClickBack = () => {
    navigate(-1, {
      state: {
        id: id,
      },
    });
  };

  if (project == null) return;
  return (
    <div className="project-info">
      <div className="project-info-top">
        <img
          className="project-info-back"
          src={`${process.env.PUBLIC_URL}/img/back.png`}
          alt="back"
          onClick={onClickBack}
        />
        <div>
          <div className="project-info-type">{project.type}</div>
          <span className="project-info-title">{project.title}</span>
        </div>
      </div>
      <div className="project-info-divider" />
      <img
        className="project-info-main-img"
        src={`${process.env.PUBLIC_URL}/img/${project.image}.png`}
        alt="project"
      />
      <ProjectDetails details={project} />
      <div className="project-info-divider" />
      <ReactMarkdown
        components={{
          img: ({ node, ...props }) => (
            <img style={{ maxWidth: "100%" }} {...props} alt="" />
          ),
        }}
      >
        {contentArr[project.id - 1]}
      </ReactMarkdown>
    </div>
  );
};

export default ProjectInfo;
