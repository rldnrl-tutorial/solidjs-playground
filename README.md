# Solid.js

## Motivation
- React.js 외에 다른 프레임워크를 해보고 싶어서

## 느낀 점
### 컴포넌트 내부에 state를 넣지 않아도 된다.

```tsx
const Counter = () => {
  const [count, setCount] = createSignal(0)

  return <div>{count()}</div>
}
```

```tsx
const [count, setCount] = createSignal(0)

const Counter = () => {
  return <div>{count()}</div>
}
```

React.js는 내부에 state를 선언하고 하위 컴포넌트로 내려줘야하는데, Solid.js는 그럴 필요가 없다. 상태를 외부에서 선언해버리고, 다이렉트로 사용하면된다.(이는 Context와는 또 다르다.)

하지만 폴더 구조에 대해서 깊게 생각하지 않는다면, 파악하기 어려울 것 같다.

### 여러 가지 유용한 컴포넌트: `<For>`, `<Show>`

React.js의 경우에는 `array`의 `map`을 사용하는 방식으로 렌더링을 진행했다. Solid.js에서는 `For` 컴포넌트를 제공한다.

```tsx
<For each={repos}>
  {repo => <RepoCard repo={repo} />}
</For>
```

React.js의 경우 조건부 렌더링을 하려면 `&&`, **삼항 연산자**를 사용해야한다. Solid.js에서는 `Show` 컴포넌트를 제공한다. 

```tsx
const [loggedIn, setLoggedIn] = createSignal(false);
const toggle = () => setLoggedIn(!loggedIn())

<Show
  when={loggedIn()}
  fallback={<button onClick={toggle}>Log in</button>}
>
  <button onClick={toggle}>Log out</button>
</Show>
```

### Mount 시점에서 실행하기

React.js의 경우는 `useEffect`에 빈 배열을 넣어주면, 렌더링 시점 이후에 한 번 실행하게 된다. Solid.js의 경우 `onMount` 함수를 제공한다.

```tsx
onMount(async () => {
  const res = await axios.get(
    `https://api.github.com/users/${username()}/repos?sort=created`
  );
  setRepos(res.data);
});
```

### 어떤 값이 바뀌면 함수 실행하기

`createEffect`를 제공한다. `createEffect`는 추적 범위에서 지정된 함수를 실행하는 새 계산을 생성하여 종속성을 자동으로 추적하고 종속성이 업데이트될 때마다 함수를 자동으로 다시 실행한다. 

```tsx
createEffect(async () => {
  const res = await axios.get(
    `https://api.github.com/users/${username()}/repos?sort=created`
  );
  setRepos(res.data);
});
```

위와 같은 코드가 있다면, `usename`이 바뀔 때마다 `createEffect` 함수가 실행된다.