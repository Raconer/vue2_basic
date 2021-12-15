# Vue.js란?

웹페이지 화면을 개발하기 위한 Frontend 프레임워크이다.
기존 웹 개발자 뿐 아니라 HTML, CSS, Javascript 기초만 알아도 개발하기 쉬운 Frontend 프레임워크이다.

## 창시자

에반 유(Evan You)

## 설명

뷰 코어 라이브러리는 화면단 데이터 표현에 관한 기능들을 중점적으로 지원하지만 프레임워크의 기능인 라우터, 상태 관리, 테스팅 등을 쉽게 결합할수 있는 형태로도 제공됩ㄴ다. 즉. 라이브러리 역할 뿐 아니라 프레임워크 역할도 할수있다.

## 장점

1. 배우기가 쉽다.
1. 리액트와 앵귤러에 비해 성능이 우수하고 빠르다.
   - Vue 제작팀에서 리액트와 앵귤러를 가지고 같은 테스트 케이스에서 성능을 비교한 결과 vue가 가장 빨랐다.
1. 리액트의 장점과 앵귤러의 장점을 갖고 있다.
   - 앵귤러의 데이터 바인딩 특성
   - 리액트의 가상 돔 기반 렌더링 특징

## Vue.js 특징

### UI 화면단 라이브러리

MVVM(Model, View, ViewModel) 패턴의 뷰 모델에 해당하느 화면단 라이브러리 이다.

### 용어 설명

- 뷰(View) : 사용자에게 보이는 화면
- 돔(Dom) : HTML 문서에 들어가는 요소(태그, 클래스, 속성 등)의 정보를 담고있는 데이터 트리
- 돔 리스너 (Dom Listener) :돔의 변경 내역에 대해 즉각적으로 반응하여 특정 로직을 수행하는 장치
- 모델(Model) : 데이터를 담는 용기. 보통은 서버에서 가져온 데이터를 자바스크립트 객체 형태로 저장
- 데이터 바인딩 (Data Binding) : 뷰(View)에 표시되는 내용과 모델의 데이터를 동기화
- 뷰 모델(View Model) : 뷰와 모델의 중간 영역. 돔 리스너와 데이터 바인딩을 제공하는 영역

### 컴포넌트 기반 프레임워크

컴포넌트란 마치 레고 블록과 같습니다. 레고 블록을 잘 조합해서 쌓으면 원하는 모형을 만들수 있듯이 뷰의 컴포넌트를 조합하여 화면을 구성할수있습니다.

## 기본 Vue.js 코드

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue Sample</title>
  </head>
  <body>
    <div id="app">
      {{message}}
      <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js"></script>
      <script>
        // 인스턴스
        new Vue({
          el: "#app", // el 속성
          data: {
            // 데이터 속성
            message: "Hello Vue.js!",
            // template : 화면에 표시할 HTML, CSS등의 마크업 요소를 정의하는 속성, 뷰의 데이터 및 기타 속성 들도 함께 화면에 그릴수 있으며 05장 뷰 템플리셍서 자세히 설명합니다.
            // methods : 화면 로직 제어와 관계된 메서드를 정의하는 속성, 마우스 클릭 이벤트 처리와 같이 화면의 전반적인 이벤트와 화면 동작과 관련된 로직을 추가할 수있습니다.
            // created : 뷰 인스턴스가 생성되자마자 실행할 로직을 정의 할 수 있는 속성, 뷰 인스턴스 라이프 사이클 부분에서 추가로 설명합니다.
          },
        });
      </script>
    </div>
  </body>
</html>

```

### 뷰 인스턴스 유효 범위

뷰 인스턴스를 생성하면 HTML의 특정 범위 안에서만 옵션 속성들이 적용되어 나타납니다. 이를 인스턴스 유효범위라고 합니다.
지역 컴포넌트와 전역 컴포넌트 차이를 알기 위해 필요한 개념입니다.

### 뷰 인스턴스 속성 적용 과정

1.  뷰 라이브러리 파일 로딩
2.  인스턴스 객체 생성(옵션 속성 포함)
3.  특정 화면 요소에 인스턴스를 붙임
4.  인스턴스 내용ㅇ이 화면 요소로 변환
5.  변환된 화면 요소를 사용자가 최종 확인

### 뷰 인스턴스 라이프 사이클 속성

created, beforeCreate, beforeMount, mounted 등 인스턴스의 생성, 변경, 소멸과 관련되어 총 8개가 존재 한다.

### 뷰 라이프 사이클 다이어 그램 (1.생성 -> 2.부착 -> 3.갱신 -> 4.소멸)

1. 생성단계 : -> 인스턴스 생성
2. 부착단계 : -> 이벤트 및 라이프 사이클 초기화 -> beforeCreate -> 화면에 반응성 주입 -> created -> el, template송성 확인 -> template 속성 내용을 render()로 변환 -> beforeMount -> $el 생성후 디 속성값을 대입 -> mounted -> 인스턴스를 화면에 부착
3. 갱신단계 : -> 인스턴스의 데이터 변경 -> beforeUpdate -> 화면 재 렌더링 및 데이터 갱신 -> upload -> 인스턴스 내용 갱신
4. 소멸단계 : -> 인스턴스 접근 가능 -> beforeDestroy -> 컴포넌트, 인스턴스, 디렉티브 등 모두 해제 -> destroyed -> 인스턴스 소멸

### 라이플 사이클 속성

- beforeCreate
  - 인스턴스 생성후 최초 실행
  - data, methods 속성 아직 정의 X
  - 돔 접근 X
- created
  - data, methods정의 (this.data or this.fetchData() 등과 같은 로직을 이용하여 data, methods에 접근 하여 로직 실행 가능)
  - 화면에 부착 전 이기 때문에 templates는 접근 X
  - 서버에 데이터를 요청하여 받아 오는 로직 수행하기 적합하다.
- beforeMount
  - template 속성에 지정한 마크업 속성을 render()함수로 변환한 후 el 속성에 지정한 화면 요소에 인스턴스를 부착하기 전에 호출되는 단계
  - render() 함수가 호출되기 직전의 로직을 추가 하기 좋다.
- mounted
  - el 속성에서 지정한 화면 요소에 인스턴스 부착 하면 호출
  - template속성에 정의한 화면 요소에 접근 할수 있어 화면 요소를 제어 하는 로직을 수행하기 좋다.
  - 단 돔에 인스턴스가 부착 되자 마자 호출되기 때문에 하위 컴포넌트나 외부 라이브러리에 의해 추가된 화면 요소들이 최종 HTML코드로 변환되는 시점과 다를수있다.
- beforeUpdate
  - el 속성에서 지정한 화면 요소에 인스턴스가 부착되고 나면 인스턴스에 정의한 속성들이 화면에 치환됩니다.
  - 치환된 값은 뷰의 반응성을 제공하기 위해 $watch속성으로 감시 한다. 이를 데이터 관찰이라 한다.
  - 데이터 관찰시 데이터가 변경되면 가상 돔으로 화면을 다시 그리기 전에 호출되는 단계이며, 변경 예정인 새 데이터에 접근 할 수있어 변경 예정 데이터의 값과 관련된 로직을 미리 넣을수있다. 만약 여기에 값을 변경하는 로직을 넣더라도 화면이 다시 그려지지 않는다.
- updated
  - 데이터가 변경되고 나서 가상 돔으로 다시 화면을 그리고 나면 실행되는 단계이다.
  - 데이터 변경으로 인한 화면 요소 변경 까지 완료된 시점 이므로, 데이터 변경 후 화면 요소 제어와 관련된 로직을 추가하기 좋은 단계이다.
  - 이 단계에서 데이터를 변경하면 무한 루프에 빠질수있기때문에 변경시 Computed, watch와 같은 속성을 사용해야한다.
    - 따라서 데이터 값을 갱신하는 로직은 가급적이면 beforeUpdate에 추가 하고, updated에서는 변경 데이터의 화면 요소와 관련된 로직을 추가 하는것이좋다.
- beforeDestroy
  - 뷰 인스턴스가 파괴되기 직전에 호출되는 단계
  - 아직 인스턴스에 접근 할수있다.
  - 따라서 뷰 인스턴스의 데이터를 삭제 하기 좋은 단계
- destroyed
  - 뷰 인스턴스가 파괴되고 나서 호출되는 단계
  - 뷰 인스턴스에 정의한 모든 속성이 제거되고 하위에 선언한 인스턴스들 또한 모두 파괴 된다.

## 컴포넌트란?

조합하여 화면을 구성할 수 있는 블록(화면의 특정영역)을 의미한다.

### 특징

- 컴퓨넌트를 활용하면 화면을 빠르게 구조화 하여 일괄적인 패턴으로 개발 할 수 있다.
- 쪼개서 사용하므로 재사용이 쉽다.
- 남이 작성한 코드를 직관적으로 이해 할 수있다.

## 컴포넌트를 이해 하기 위하 예제 구조 설명

뷰 에서는 웹화면을 구성할 때 흔히 사용하는 네비게이션바, 테이블, 리스트, 인풋 박스 등과 같은 화면 구성 요소들을 잘게 쪼개어 컴포넌트로 관리 합니다.

Tree 형식으로 구조화 되어 있다.

- Root
  - Header
  - Content
    - Aside
    - List
  - Footer

## 컴포넌트 등록

- 전역(global))
  - 여러 인스턴스에서 공통으로 사용한다.
  - 뷰로 접근 가능한 모든 범위에서 사용할수있다.
- 지역(local)
  - 특정 인스턴스에서만 유효한 범위를 갖는다.

### 1. 전역 컴포넌트 등록

전역 컴포넌트는 뷰 라이브러리를 로딩하고 나면 접근 가능한 Vue변수를 이용하여 등록한다.
전역 컴포넌트를 모든 인스턴스에 등록하려면 Vue생성자에서 .Component()를 호출 하여 수행하면된다.

```html
Vue.compoent("컴포넌트 이름", { // 컴포넌트 내용 });
```

1. 컴포넌트 이름
   - template 속성에서 사용할 HTML사용자 정의 태그(custom tag)이름을의 이름을 의미한다.
   - 태그 이름의 명명 규칙은 HTML 사용자 정의 태그 스펙에서 강제 하는 '모든 소문자', '케밥 기법'을 따르지 않아도 된다.
     - 케밥 기법 : 변수가 단어의 조합으로 이루어져 있을때, 단어와 단어 사이를 -로 잇는 변수 명명 방식
   - 실제 화면의 HTML 요소로 변환 될때 표시될 속성들을 컴포넌트 내용에 작성한다.
     - 컴포넌트 내용에는 template,data, methods등 인스턴스 옵션 속성을 정의 할수있다.

#### 예제

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue life Cycle</title>
  </head>
  <body>
    <div id="app">
      <button>컴포넌트 등록</button>
      <!-- 전역 컴포넌트 표시 -->
      <my-component></my-component>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
    <script>
      // 전역 컴포넌트 등록
      Vue.component("my-component", {
        template: "<div>전역 컴포넌트가 등록되었습니다.</div>",
      });
      new Vue({
        el: "#app",
      });
    </script>
  </body>
</html>
```

#### 컴포넌트 처리 과정

1. 뷰 라이브러리 파일 로딩
2. 뷰 생성자로 컴포넌트 등록
   - Vue.component()
3. 인스턴스 객체 생성(옵션 속성 포함)
4. 특정 화면 요소에 인스턴스 부착
5. 인스턴스 내용변환
   - 등록된 컴포넌트 내용도 변환
   - my-component -> div로 변환 한다.
6. 변환된 화면 요소를 사용자가 최종확인

### 2. 지역 컴포넌트 등록

지역 컴포넌트 등록은 전역 컴포넌트 등록과는 다르게 인스턴스에 components속성을 추가하고 등록할 컴포넌트 이름과 내용을 정의 하면된다.

```html
new Vue({ componets: { '컴포넌트 이름': 컴포넌트 내용 } })
```

#### 예

```html
<body>
  <div id="app">
    <button>컴포넌트 등록</button>
    <!-- 전역 컴포넌트 표시 -->
    <my-local-component></my-local-component>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
  <script>
    var cmp = {
      // 컴포넌트 내용
      template: "<div>지역 컴포넌트가 등록되었습니다.!</div>",
    };
    new Vue({
      el: "#app",
      components: {
        "my-local-component": cmp,
      },
    });
  </script>
</body>
```

### 지역 컴포넌트와 전역 컴포넌트 차이

```html
<body>
  <div id="app">
    <h3>첫 번째 인스턴스 영역</h3>
    <my-global-component></my-global-component>
    <my-local-component></my-local-component>
  </div>
  <div id="app2">
    <h3>두 번째 인스턴스 영역</h3>
    <my-global-component></my-global-component>
    <my-local-component></my-local-component>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
  <script>
    // 전역 컴포넌트 등록
    Vue.component("my-global-component", {
      template: "<div>전역 컴포넌트 입니다.</div>",
    });

    // 지역 컴포넌트 등록
    var cmp = {
      template: "<div>지역 컴포넌트입니다.</div>",
    };

    // 첫번째 인스턴스
    new Vue({
      el: "#app",
      // 지역 컴포넌트 등록
      components: {
        "my-local-component": cmp,
      },
    });

    // 두번째 인스턴스
    new Vue({
      el: "#app2",
    });
  </script>
</body>
```


# 2차

## 뷰 컴포넌트 통신

### 컴포넌트 간 통신과 유효 범위

뷰(vue.js)는 컴포넌트로 화면을 구성하므로 같은 웹 페이지라도 데이터를 공유할 수 없습니다.
그 이유는 컴포넌트 마다 자체적으로 고유한 유효범위를 갖기 때문입니다. 이는 뷰 프레임워크 내부적으로 정의된 특징입니다.
따라서 각 컴포넌트의 유효범위(scope)가 독립적이기 때문에 다른 컴포넌트의 값을 직접적으로 참조할 수가 없습니다.

### ex)

```html
<script>
      var cmp1 = {
        template: "<div>첫 번째 지역 컴포넌트 : {{cmp1Data}}</div>",
        data: function () {
          return {
            cmp1Data: 100,
          };
        },
      };
      var cmp2 = {
        template: "<div>두 번째 지역 컴포넌트 : {{cmp2Data}}</div>",
        data: function () {
          return {
            // cmp1 컴포넌트를 참조 할수 없다
            //   복잡한 데이터 흐름을 가지지 않아 다른사람의 코드를 쉽게 알수있다.
            cmp1Data: cmp1.data.cmp1Data,
          };
        },
      };

      new Vue({
        el: "#app",
        //   지역 컴포넌트 등록
        components: {
          "my-component1": cmp1,
          "my-component2": cmp2,
        },
      });
    </script>
```

### 상, 하위 컴포넌트 관계

앞에서 살펴본 것처럼 컴포넌트는 각각의 고유한 유효 범위를 가지기 때문에 다른 컴포넌트 값을 참조 할수 없습니다. 따라서 뷰(vue.js) 프레임 워크 자체에서 정의한 컴포넌트 데이터 전달 방법을 따라야 합니다.
가장 기본적인 데이터 전달 방법은 바로 "상위(부모) - 하위(자식)" 컴포넌트 간의 데이터 전달 방법입니다. 

지역, 전역 컴포넌트를 등록하면 등록된 컴포넌트는 자연스럽게 하위 컴포넌트가 됩니다.

먼전 상위에서 하위로는 props라는 특별한 속성을 전달합니다. 그리고 하위에서 상위로는 기본적으로 이벤트만 전달 할 수 있습니다.

#### 1. 상위에서 하위 컴포넌트로 데이터 전달 하기

props는 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 때 사용하는 속성입니다.

1. props속성을 사용하려면 하위 컴포넌트의 속성에 정의
   * ```html
     Vue.component('child-component',{
       props:['props 속성이름']
     });
   ```
2. 상위 컴포넌트의 HTML코드에 등록된 child-component 태그에 v-bind 속성을 추가
  * ```html
    <child-component v-bind:props 속성이름="상위 컴포넌트의 data 속성"></child-component>
    ```
  * v-bind 속성의 왼쪽 값으로 하위 컴포넌트에서 정의한 props속성을 넣고, 오른쪽 값으로 하위 컴포넌트에 전달할 상위 컴포넌트의 data속성을 지정합니다.

### ex) <!-- 상위 -> 하위로 -->
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Global Component</title>
  </head>
  <body>
    <div id="app">
      <!-- 팁 : 오른쪽에서 왼쪽으로 속성을 읽으면 더 수월합니다. -->
      <!-- propsdata : props의 속성이름, message : 상위 컴포넌트의 데이터 속성 -->
      <child-component v-bind:propsdata="message"></child-component>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
    <script>
      // child-component 란 하위 컴포넌트 등록
      Vue.component("child-component", {
        props: ["propsdata"],
        template: "<p>{{propsdata}}</p>",
      });
      // 상위
      new Vue({
        el: "#app",
        data: {
          message: "Hello Vue! passed from Parent Component",
        },
      });
    </script>
  </body>
</html>
```
#### 2.하위에서 상위 컴포넌트로 데이터 전달 하기

1. 이벤트 발생과 수신
   * 상위 컴포넌트에서 하위 컴포넌트의 특정 이벤트가 발생하기를 기다리고 있다가 하위 컴포넌트에서 특정 이벤트가 발생하면 상위 컴포넌트에서 해당 이벤트를 수신하여 상위 컴포넌트의 메서드를 호출 한다.
   * 이벤트 발생("$emit()")과 수신("v-on:") 속성을 사용하여 구현 한다.
     *  이벤트 발생
        *  this.$emit('이벤트 명');
     *  이벤트 수신
        *  <child-component v-on:이벤트명="상위 컴포넌트의 메서드명"></child-component>
  
#### ex) 하위 -> 상위

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Global, Local Component</title>
 </head>
  <body>
    <div id="app">
      <!-- 3. show-log : 하위 컴포넌트의 이벤트, "printTet" : 상위 텀포넌트의 메서드명 -->
      <child-component v-on:show-log="print-text"></child-component>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
    <script>
      Vue.component("child-component", {
        // 1. 버튼 요소 추가
        template: '<button v-on:click="showLog">show</button>',
        // 2. 메서드 추가
        methods: {
          showLog: function () {
            // 이벤트 발생 로직
            this.$emit("show-log");
          },
        },
      });

      var app = new Vue({
        el: "#app",
        data: {
          message: "Hello Vue! passed from Parent Compoent",
        },
        methods: {
          printText: function () {
            console.log("received an event");
          },
        },
      });
    </script>
  </body>
</html>

```

설명
child-component의 [show]버튼을 클릭하여 이벤트를 발생시키고, 발생한 이벤트로 상위 컴포넌트(여기서 루트 컴포넌트)의 printText() 메서드를 실행시키는 예제입니다.[show] 버튼을 클릭 했을때  처리되는 과정은 다음과 같습니다.
1. [show]버튼을 클릭하면 클릭 이벤트 v-on:click="showLog"에 따라 showLog() 메서드가 실행됩니다.
2. showLog() 메서드 안에 this.$emit('show-log')가 실행되면서 show-log 이벤트가 발생합니다. 
3. show-log이벤트는 <child-component>에 정의한 v-on:show-log에 전달되고, v-on:show-log의 대상 메서드인 최상위 컴포넌트의 메서드 printText()가 실행됩니다. 
4. printText()는 received an event라는 로그를 출력하는 메서드 이므로 마지막으로 콘솔에 로그가 출력됩니다. 
  
#### 3.같은 레벨 컴포넌트로 데이터 전달 하기

같은 레벨 컴포넌트 통신을 하기 위해서 같은 상위 컴포넌트를 가지는 2개의 하위 컴포넌트 구조를 이용해야한다.
하지만 이런 통신 구졸르 유지 하다보면 상위 컴포넌트가 필요 없음에도 불구하고 같은 레벨간에 통신하기 위해 강제로 상위 컴포넌트를 두어야 합니다. 이를 해결할 수 있는 방법이 바로 이벤트 버스입니다.

#### 4. 관계 없는 컴포넌트간 통신 - 이벤트 버스

이벤트 버스는 개발자가 지정한 2개의 컴포넌트간에 데이터를 주고 받을수 있는 방법입니다.
앞에서 배운 컴포넌트 통신은 항상 "상위-하위" 구조를 유지 해야만 데이터를 주고 받을 수 있었습니다.
이벤트 버스를 이용하면 이런 "상위-하위" 관계를 유지 하고 있지 않아도 데이터를 한 컴포넌트에서 다른 컴포넌트로 전달 할수있습니다.

* 이벤트 버스 형식
  * ```html 
    <!-- 이벤트 버스를 위한 추가 인스턴스 1개 생성 -->
    var eventBus = new Vue(); 
    ```
  * ```html 
    <!-- 이벤트를 보내는 컴포넌트 -->
    methods:{
      메서드명: function(){
        eventBus.$emit('이벤트명', 데이터);
      }
    }
    ```
  * ```html 
    <!-- 이벤트를 받는 컴포넌트 -->
    methods:{
      created: function(){
        eventBus.$on('이벤트명', function(데이터){
          ...
        });
      }
    }
    ```

#### ex)
```html
<body>
    <div id="app">
      <child-component></child-component>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
    <script>
      // 1.
      var eventBus = new Vue();
      Vue.component("child-component", {
        // 2.
        template:
          '<div>하위 컴포넌트 영역입니다.<button v-on:click="showLog">show</button></div>',
        methods: {
          showLog: function () {
            eventBus.$emit("triggerEventBus", 100);
          },
        },
      });

      var app = new Vue({
        el: "#app",
        created() {
          //   3.
          eventBus.$on("triggerEventBus", function (value) {
            console.log("이벤트를 전달받음. 전달받은 값 : " + value);
          });
        },
      });
    </script>
  </body>
```

 1. 먼저 이벤트 버스로 활용할 새 인스턴스를 1개 생성하고 eventBus라는 변수에 참조합니다. 이제 eventBus변수로 새 인스턴스의 속성과 메서드에 접근할 수 있습니다.
 2. 하위 컴포넌트에는  template속성과 methods 속성을 정의 합니다. template속성에는 '하위 컴포넌트 영역입니다.' 라는 텍스트와 [show]버튼을 추가 합니다. methods속성에는 showLog() 메서드를 정의하고, 메서드 안에는 eventBus.$emit()을 선언하여 triggerEventBus라는 이벤트를 발생하는 로직을 추가 합니다. 이 이벤트는 발생할 때 수신하느 쪽에 인자 값으로 100이라는 숫자를 함께 전달합니다. 
 3. 상위 컴포넌트의 created 라이프 사이클 훅에 eventBus.$on()으로 이벤트를 받는 로직을 선언합니다. 발 생한 이벤트 trigger EventBus를 수신할 때 앞에서 전달된 인자 값100 이 콘솔에 출력됩니다.
 

# 3차

## 뷰 라우터

> &#60;script src="http://unpkg.com/vue-router@3.0.1/dist/vue-router.js"&#62;&#60;/script&#62;

### 선행 개념

1. 라우팅
   * 웹 페이지 간의 이동 방법을 뜻한다.
   * 라우팅은 현대 웹 앱 형태중 하나인 "싱글 페이지 애플리케이션" 에서 주로 사용한다.

   * 장점
     * 화면간의 전환이 매끄럽다.
     * 애플리케이션의 사용자 경험을 향상 시킬수 있다.
     * 화면 깜박거림이 없다

"싱글 페이지 애플리케이션" : 페이지를 이동할 떄마다 서버에 웹페이지를 요청하여 새로 갱신 하는것이 아니라 미리 해당 페이지들을 받아 놓고 페이지 이동시에 클라이언트의 라우팅을 이용하여 화면을 갱산하는 패턴을 적용한 애플리케이션

2. 뷰 라우터
   * 뷰에서 라우팅 기능을 구현할 수 있도록 지원하는 공식 라이브러리
   * 뷰 특수 태그와 기능

|태그|설명|
|:--:|:--:| 
|&#60;router-link to="URL 값"&#62;|페이지 이동태그. 화면에서는 &#60;a&#62;로 표시 되며 클릭하면 to에 이정한 URL로 이동합니다. |
|&#60;router-view&#62;|페이지 표시 태그. 변경되는 URL에 따라 해당 컴포넌트를 뿌려주는 영역입니다.|

#### ex)

```html
  ...
  <div id="app">
    <h1>뷰 라우터 예시</h1>
    <p>
      <!-- 화면에서 a링크와 같이 사용된다. -->
      <router-link to="/main">Main 컴포넌트로 이동</router-link>
      <router-link to="/login">Login 컴포넌트로 이동</router-link>
    </p>
    <!-- 갱신된 url 화면을 보여준다. -->
    <router-view></router-view>
  </div>
  ...
  <!-- router cdn 추가 -->
  <script src="http://unpkg.com/vue-router@3.0.1/dist/vue-router.js"></script>
  <script>
    // main, login 페이지 정의
    var Main = { template: "<div>main</div>" };
    var Login = { template: "<div>Login</div>" };

    // 각 url 에 맞는 컴포넌트 연결
    var routes = [
      { path: "/main", component: Main },
      { path: "/login", compoent: Login },
    ];
    // 라우터 선언
    // tip : 뷰 라우터의 기본 URL형식은 해시값을 사용합니다. 만약 index.html/login과 같이 해시값을 없애고 싶으면 mode:history를 사용하면됩니다.
    var router = new VueRouter({
      // mode: 'history',
      routes,
    });
    // 뷰 인스턴스에 라우터 추가  
    var app = new Vue({
      router,
    }).$mount("#app");
  </script>
```

## 네스티드 라우터 (Nested Router)

라우터 페이지를 이동할때 최소 2개 이상의 컴포넌트를 화면에 나타낼수있다.
네스티드라는 단어에서 추측할 수 있듯이 상위 컴포넌트 1개에 하위 컴포넌트 1개를 포함하는 구조 입니다.

네스티드 라우터를 사용하면 URL에 따라서 컴포넌트의 하위 컴포넌트가 다르게 표시됩니다.

### ex)
```html
<body>
  <div id="app">
    <!-- User 컴포넌트가 뿌려질 영역 -->
    <router-view></router-view>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
  <script src="http://unpkg.com/vue-router@3.0.1/dist/vue-router.js"></script>
  <script>
    // 컴포넌트 내용 정의
    var User = {
      // 하위 컴포넌트가 뿌려질 영역
      template: "<div>USER Component <router-view></router-view></div>",
    };
    var UserProfile = { template: "<p>User Profile Component</p>" };
    var UserPost = { template: "<p>User Post Component</p>" };

    // 네스티드 라우팅 정의
    var routes = [
      {
        path: "/user",
        component: User,
        children: [
          {
            path: "posts",
            component: UserPost,
          },
          {
            path: "profile",
            component: UserProfile,
          },
        ],
      },
    ];
    // 뷰 라우팅 정의
    var router = new VueRouter({
      routes,
    });
    // 뷰 인스턴스에 라우터 추가
    var app = new Vue({
      router,
    }).$mount("#app");
  </script>
</body>
```
## 네임드 뷰
특정 페이지로 이동했을대 여러개의 컴포넌트를 동시에 표시 하는 라우팅 방식.
앞에 다룬 네스티드 라우터는 상위 컴포넌트가 하위 컴포넌트를 포함 하는 형식 이지만
네임드 뷰는 같은 레벨에서 여러개의 컴포넌트를 한번에 표시힌다.

### ex)
```html
<body>
  <div id="app">
    <!-- 라우팅 영역 정의 -->
    <router-view name="header"></router-view>
    <!-- name이 없는 경우는 디폴트 -->
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
  <script src="http://unpkg.com/vue-router@3.0.1/dist/vue-router.js"></script>
  <script>
    // 컴포넌트 정의
    var Body = { template: "<div>This is Body</div>" };
    var Header = { template: "<div>This is Header</div>" };
    var Footer = { template: "<div>This is Footer</div>" };

    var router = new VueRouter({
      routes: [
        {
          path: "/",
          components: {
            // router-view의 name에 컴포넌트 연결
            default: Body,
            header: Header,
            footer: Footer,
          },
        },
      ],
    });
    var app = new Vue({
      router,
    }).$mount("#app");
  </script>
</body>
```

## View HTTP 통신(axios)

대표적인 사례  : Jquery의 ajax 

### 뷰 리소스

> 초기에 코어 팀에서 공식적으로 권하는 라이브러리 였으나 2016년에 지원 중단 되었다
> 하지만 지금도 사용 가능 하기에 간단히 알아 보겠다.

```html
<body>
  <div id="app">
    <button v-on:click="getData">프레임워크 목록 가져오기</button>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue-resource@1.3.4"></script>
  <script>
    new Vue({
      el: "#app",
      methods: {
        getData: function () {
          this.$http
            .get(
              "https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json"
            )
            .then(function (response) {
              console.log(response);
              console.log(JSON.parse(response.data));
            });
        },
      },
    });
  </script>
</body>
```

### 엑시오스( Axios )
> 현재 Vue.js 커뮤니티에서 가장 많이 사용되는 HTTP통신 라이브러리 이다.<br>
> Promise기반의 API형식이 다양하게 제공되어 별도의 로직을 구현할 필요 없이 주어진 API만 으로도 간편하게 원하는 로직을 구현할수있다.
>> Promise기반의 API형식이란?<br>
>> 서버에 데이터를 요청하여 받아오는 동작과 같은 비동기 로직 처리에 유용한 자바 스크립트 객체이다.
>> 자바스크립트는 단일 스레드로 코드를 처리하기 때문에 특정 로직의 처리가 끝날때 까지 기다려 주지 않습니다. 
>> 따라서 데이터를 요청하고 받아 올때 까지 기다렸다가 화면에 나타내는 로직을 실행 해야할때 주로 Promise를 활용합니다.
>> 그리고 데이터를 받아 왔을때 Promise로 데이터를 화면에 표시하거나 연산을 수행하는 등 특정 로직을 수행합니다.

[Promise 액시오스 공식 깃허브 리포지토리](https://github.com/axios/axios, "액시오스 참고")

#### 액시오스 설치및 사용하기

> &#60;script src="https://unpkg.com/axios/dist/axios.min.js"&#62;&#60;/script&#62;

#### API 유형

|API 유형|처리결과|
|--|--|
|axios.get("URL 주소").then().catch()|Http Get 요청 성공시 then, 실패시 catch|
|axios.post("URL 주소").then().catch()|Http Post 요청 성공시 then, 실패시 catch|
|axios({옵션 속성})|Http 요청에 대한 자세한 속성들을 직접 정의하여 보내수있다. URL, HTTP요청 방식, 보내는 데이터 유형, 기타등등|

#### ex)
```html
<body>
  <div id="app">
    <button v-on:click="getData">Axios GET</button>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script>
    new Vue({
      el: "#app",
      methods: {
        getData: function () {
          axios
            .get(
              "https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json"
            )
            .then(function (response) {
              console.log(response);
            });
        },
      },
    });
  </script>
</body>
```

## 뷰 템플릿
> HTML, CSS 등의 마크업 속성과 뷰 인스턴스에서 정의한 데이터 및 로직들을 연결하여 사용자가 브라우저에서 볼수있는 형태의 HTML로 변환해 주는 속성

### 템플릿 속성을 사용하는 방법
1. ES5에서 뷰인스턴스의 template 속성 사용
```html
<script>
  new Vue({
    template: "<p>Hello {{message}}</p>"
  });
</script>
```

> !Tip render()
>> 사용자가 볼수 없지만 라이브러리 내부적으로 template 속성에서 정의한 마크업 + 뷰 데이터를 가상 돔 기반의 render() 함수로 변환합니다. 변환된 render() 함수는 최종적으로 사용잦가 볼 수 이쎅 화면을 그리는 역할을 합니다. 그리고 변환 과정에서 뷰의 반응성이 화면에 더해집니다.

* 비교 template 속성 사용한 경우 vs 사용하지 않은 경우
  * 사용한 경우
```html
  <div id="app">
    <h3>{{message}}</h3>
  </div>
  ***
  <script>
    new Vue({
      el: "#app",
      data:{
        message: "Hello Vue.js"
      },    
    });
  </script>
```
  * 사용하지 않은경우
```html
  <div id="app"></div>
  ***
  <script>
    new Vue({
      el:"#app",
      data:{
        message: "Hello Vue.js!"
      },
      template: "<h3>{{message}}</h3>"
    });
  </script>
```

2. 싱글 파일 컴포넌트 체계의 &#60;template&#62; 코드를 활용하는 방법

* 템플릿에서 사용하는 뷰의 속성과 문법
  1. 데이터 바인딩
     * HTML 화면 요소를 뷰 인스턴스의 데이터와 연결하는 것을 의미
       * {{}}
         * 데이터가 변경되면 자동 갱신 된다.
         * ex) &#60;div&#62;{{message}}&#60;/div&#62;
         * 만약 갱신을 원하지 않은 경우 ex) &#60;div v-once&#62;{{message}}&#60;/div&#62;
       * v-bind  
         * 아이디, 클래스, 스타일 등의 HTML 속성 값에 뷰 데이터 값을 연결할 때 사용하는 데이터 연결 방식 입니다.
         * ```html
           <div id="app">
              <p v-bind:id="idA">아이디 바인딩</p>
              <p v-bind:class="classA">클래스 바인딩</p>
              <p v-bind:style="styleA">스타일 바인딩</p>
           </div>
           <script>
            new Vue({
              el: "#app",
              data : {
                idA: 10, // 실행시 <p id="10">아이디 바인딩</p>
                classA: "container", // 실행시 <p class="container">클래스 바인딩</p>
                styleA: "color:blue" // 실행시 <p style="color:blue">스타일 바인딩</p>
              }
            });
           </script>
           ``` 
  2. 자바스크립트 표현식
     * {{}}안에 자바스크립트 표현식을 넣으면된다.
     * ex)
       * ```html
         <div>
         <!-- Hello Vue.js! -->
          <p>{{message}}</p> 
         <!-- Hello Vue.js!!!!-->
          <p>{{message + "!!!"}}</p>
         <!-- !sj.euV oolleH -->
          <p>{{message.split("").reverse().join("")}}</p>
         </div>
         ***
         <script>
           new Vue({
             el: "#app",
             data: {
               message: "Hello Vue.js!"
             }
           })
         </script>
         ``` 
      * 주의 할점
        1. 자바스크립트의 선언문과 분기 구문 사용 X
        2. 복잡한 연산은 인스턴스 안에서 처리하고 화면에는 간단한 연산 결과만 표기 
  3. 디렉티브
     * HTML 태그안에  v- 접두사를 가지는 모든 속성들을 의미 한다. v-bind속성도 디렉티브에 해당
     * |디렉티브이름|역할|
        |:--|:--|
        |v-if|지정한 뷰 데이터 값의 참, 거짓 여부에 따라 해당 HTML 태그를 화면에 표시하거나 표시 하지않습니다.|
        |v-for|지정한 뷰 데이터의 개수만큼 해당 HTML 태그를 반복 출력합니다.<br> ex)&#60;li v-for="system in systems"&#62;{{system}}&#60;/li&#62;|
        |v-show|v-if와 유사하게 데이터의 진위 여부에 따라 해당 HTML 태그를 화면에 표시 하거나 표시 하지 않지 않습니다. 다만 v-if는 해당 태그를 완전히 삭제 하겠지만 v-show는 css 효과만 display:none;으로 주어 실제 태그는 남아 있고 화면상으로만 보이지 않습니다.|
        |v-bind|HTML 태그의 기본 속성과 뷰 데이터 속성을 연결합니다.|
        |v-on|화면 요소의 이벤트를 감지하여 처리할떄 사용합니다. 예) v-on:click |
        |v-model|폼(Form)에서 주로 사용되는 속성입니다. 폼에 입력한 값을 뷰 인스턴스의 데이터와 즉시 동기화 합니다. 화면에 입력된 값을 저장하여 서버에 보내거나 watch와 같은 고급 속성을 이용하여 추가 로직을 수행할수 있습니다. input, select, textarea 태그에서만 사용 가능합니다|
  4. 이벤트 처리
       * v-on or methods 속성활용
       * methods
         * ```html
            <button v-on:click="clickBtn">클릭</button>

            <script>
              methods:{
                clickBtn: function(){
                  alert("clicked");
                }
              }
            </script>
           ```
        * v-on
          * ```html
            <button v-on:click="clickBtn(10)">클릭</button>

            <script>
              methods:{
                clickBtn: function(num){
                  alert("clicked " + num);
                }
              }
            </script>
           ```
        * event
          * ```html
            <button v-on:click="clickBtn">클릭</button>

            <script>
              methods:{
                clickBtn: function(event){
                  console.log(event);
                }
              }
            </script>
           ```
  5. 고급 템플릿 기법
       * computed속성
         * ```html
            <div id="app">
              <p>{{reversedMessage}}</p>
            </div>
            <script>
                new Vue({
                  el:"#app",
                  data:{
                    message: "Hello Vue.js!"
                  },
                  computed:{
                    reversedMessage: function(){
                      return this.message.split("").reverse().join("");
                    }
                  }
                });
            </script>
           ```
         * Computed와 Methods ckdl
           * Computed : 대상 데이터의 값이 변경될 때마다 수행
           * Methods :  호출 할때만 수행
       * watch 속성
         * 데이터 변화를 감지 하여 특정 로직 수행
         * **Computed** 속성과 유사 하지만 Computed는 내장 API를 활용한 간단한 연산 정도로 적합한 반면에 **Watch** 속성은 데이터 호출과 같이 시간이 상대적으로 더 많이 소모되는 **비동기** 처리에 적합합니다.
         * ```html
            <div id="app">
              <input v-model="message">
            </div>
            <script>
              new Vue({
                el: "#app",
                data:{
                  message: "Hello Vue.js!"
                },
                watch:{
                  message: fucntion(data){
                    console.log("message의 값이 바뀝니다.:"+ data);
                  }
                }
              });
            </script>
           ```
# 4차
## 뷰 프로젝트 구성

* 싱글 파일 컴포넌트 체계
   * .vue 파일로 프로젝트 구조를 구성하는 방식
   * .vue 기본 구조
     * ```html
        <template>
          <!-- 
            HTML 태그 내용 
            화면에 표시할 요소들을 정의 하는영역
          -->
        </template>
        <script>
          export default{
            <!-- 
              자바 스크립트 내용 
              뷰 컴포넌트의 내용을 정의 하는 영역
            -->
          }
        </script>
        <style>
          <!-- 
            CSS 스타일 내용 
            템플릿에 추가한 HTML 태그의 CSS스타일을 정의 하는 영역
          -->
        </style>
       ```
* 뷰 CLI
  * 싱글 파일 컴포넌트 체계를 사용하기 위해서 .vue파일을 웹 브라우저가 인식 할수있는 형태로 변환해 주는 웹팩(Webpack)이나 브라우저파이(Browserify)와 같은 도구가 필요하다
    * 웹팩은 웹 앱의 자원(HTML, CSS, 이미지)들을 자바스크립트 모듈로 변환해 하나로 묶어 웹성능을 향상시켜 주는 자바스크립트 모듈 번들러 이다.
    * 브라우저파이도 웹팩과 유사한 성격의 모듈 번들러지만 웹팩과 다르게 웹 자원 압축이나 빌드 자동화 같은 기능이 없다
* 뷰 로더
  * 웹팩에서 지원하는 라이브러리
  * 뷰 로더는 싱글 파일 컴포넌트 체계에서 사용하는 .vue파일의 내용을 브라우저에서 실행 가능한 웹 페이지의 형태로 변환 

4차

## 뷰 애니메이션

뷰 프레임워크 자체에서 지원하는 애니메이션 기능으로, 데이터 추가, 변경, 삭제에 대해서 페이드인, 페이드 아웃 등의 여러가지 애니메이션 효과를 지원한다.
간단한 데이터 부터 목록 아이템까지 지원하며 기타 자바스크립트 애니메이션 라이브 러리나 CSS라이브러리도 지원한다.

* transition-grouop
  * 목록에 애니메이션 추가할때 사용
  * tag : 애니메이션이 들어갈 HTML 지정(p, ul, secion 등등)
  * name 속성은 이후에 추가할 CSS클래스와 연관
  * 목록에 애니메이션을 적용하려면  transition-group > tag:key (key속성 지정)

## Vuex

뷰엑스 (Vuex)는 어플리케이션의 상태 관리를 돕는 라이브러리 입니다.

특정 데이터를 여러 컴포넌트가 공유하고있을때 "상태" 라고한다.

데이터 컴포넌트 공유 방법
1. props
   1. 현재와 최상위 사이에 있는 모든 props를 설정해 줘야 합니다. 
2. 이벤트 버스 
   1. 단방향 데이터 흐름이 아닌 셀수 없이 많은 데이터 흐름이 생긴다.

## 뷰의 반응성

뷰가 데이터 변화를 감지 했을때 자동으로 화면을 다시 갱신하는 특성

> 알아두면 프레임워크 내부적으로 화면을 그리는 방법, 가상돔이 동작하는 방법, 화면을 빠르게 그리기 위해 브라우저에 부하를 주지 않고 돔을 추가,삭제 하는 방법을 익힐수있다.

데이터 변경시 뷰에서 자동으로 화면 갱신 순서

0. 선행
   1. watcher
      1. 모든 컴포넌트에 존재 하는 속성으, 화면을 다시 그리는데 중요한 열할을 한다.
      2. ex) 인스턴스가 화면에 올라가고 나서 특정 data속성을 바꾸 거나 접근하면 watcher에 해당 사식을 감지 -> 화면 다시 그리기 요청
   2. 인스턴스 data속성에 반응성이 생기는 위치
      1. 인스턴스를 생성 시점
      2. 따라서 인스턴스를 정의할때 data속성에 정의 하지 않고 인스턴스를 생성하고 난 후 data속성에 객체를 추가 하면 그 객체는 반응성이 생기지 않습니다.
      3. 반응성이 없다는 것은 해당 객체의 변화가 있든 없든 뷰에서 화면을 다시 갱신하지 않는다는것을 의미 합니다
1. 순서
   1. 뷰 어플리케이션 구현
   2. 인스턴스 생성
   3. 이스턴스 생성될때 data속성에 정의된 객체들은 특정 변환 작업 실행(data에 정의된 모든 객체 getter, setter형태 변환, 사용자가 접근 가능한 속성 X, 내부 라이브러리에서 사용 O)
2. 서버 사이드 렌더링과 클라이언트 사이드 렌더링의 차이
   1. 공통점
      1. 브라우저는 웹 페이즈를 화면에 나타내는 역할을 한다.
      2. 다만 더 완벽하게 그려진 HTML 페이지를 나타내는 것과 이룹만 그려져 있어 추가로 더 그려야 할 것이 남아있는 HTML페이지르 ㄹ나타내는 것은 차이가 이싿.
   2. 클라잉언트 사이드 렌더링
      1. 웹페이지를 화면에 그릴 때 화면을 그리는 동작을 클라이언트에서 수행하는 것 
      2. 다그려지지 않은 HTML페이지를 브라우저에서 받고 프론트 엔드 프레임워크와 같은 자바 스크립트를 이용하여 나머지 부분을 그린다.
      3. 리액트, 앵귤러를 비롯한 뷰 프레임워크의 기본 사용방법은 클라이언트 사이드 렌더링이다.
      4. 약점
         1. 클라이언트가 웹 페이지를 받고 나서도 자바 스크립트로 추가 내용을 부착하고 그려줘야 하기 때문에 검색엔진 노출 정도가 상대적으로 낮다.
   3. 서버 사이드 렌더링
      1. 완벽히 그려진 HTML 페이지를 브라우저에서 받는것을 의미한다.
      2. 강점
         1. 검색엔진 최적화
            1. 화면의 내용이 이미 다 그려진 상태로 클라이언트에 넘어오기 때문에 내용의 노출 정도가 높아 검색 엔진에서 높은 점수를 받을수이싿.
3. 웹팩
   1. webpack.config.js
   2. 서로 연관이 있는 모듈간의 관계를 해석하여 정적인 자원으로 변환해 주는 변환 도구
      1. 파일간의 연관 관계를 파악하여 하나의 자바스크립트 파일로 변홚해 주는 변환도구
         1. 1개의 파일에 담은 이유
            1. CSS및 이미지 파일 HTTP 네트워크 요청이 많아 질수록 웹화면 로딩시간이 늘어 난다.
   3. 주요 속성
      1. entry
         1. 웹팩으로 빌드(변환)할 대상 파일을 지정하는 속성
         2. entry로 지정한 파일의 내용에는 전체 애플리케이션 로직과 필요 라이브러릴르 로딩하는 로직이 들어 간다.
      2. output
         1. 웹팩으로 빌드한 결과물의 위치와 파일 이름 등 세부 옵션을 설정하는 속성
      3. loader
         1. 웹팩으로 빌드 할때 HTML, CSS, PNG 파일등을 자바스크립트로 변환 하기 위해 필요한 설정을 정의 하는 속성
      4. plugin
         1. 웹팩으로 빌드 하고 나온 결과 물에 대해 추가 기능 제공
         2. 예를 들면결과물의 사이즈를 줄이거나 결과물 을 기타 CSS,HTML파일로 분리하는 기능 등
      5. resolve
         1. 웹팩으로 빌드할 때 해당 파일이 어떻게 해석되는지 저으이 하는 속성
         2. 예) 특정 라이브러리를 로딩할떄 버전은 어떤걸로 하고, 파일경로는 어디로 지정하는지 등을 정의
4. 웹팩 데브 서버(webpack-dev-server)
   1. 웹팩 설정 파일의 변화를 감지하여 빠르게 웹팩을 빌드할 수 있도록 지원하는 유틸리티이자 node.js서버 입니다.
   2. 설정 파일의 내용이 변경되면 브라우저 화면을 자동으로 새로고침하고, 바로 다시 웹팩으로 빌드 하는 기능을 가지고있다.
5. webpack-simple 프로젝트의 설정 파일 분석
   1. 뷰 CLI로 webpack-simple프로젝트들 생성하면 "webpack.config.js"웹팩 설정 파일이 생성된다.


## 추가 내용
----

프로젝트 vue.js 구성정보
* Vulidate
  * 양식 Validate Package
* axios
  * baseURL : "/api"
  * header.common.Accept = "application/json"
* Vue component
  * fontawesomeicon
* 다국어
  * VueI18n