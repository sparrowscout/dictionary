# deltaTime

Gets the current delta time used by animation engine

```
deltaTime: number;
```

### what is delta time ?

#### 1. Unity

The interval in seconds from the last frame to the current one (Read Only). [unity docs link ↗︎](https://docs.unity3d.com/ScriptReference/Time-deltaTime.html)

#### 2. Wikipedia

Delta time or delta timing is a concept used amongst programmers in relation to hardware and network responsiveness.<sup>[1](https://en.wikipedia.org/wiki/Delta_timing#cite_note-ashley2011-1)</sup> In graphics programming, the term is usually used for **variably updating scenery based on the elapsed time since the game last updated**,<sup>[2](https://en.wikipedia.org/wiki/Delta_timing#cite_note-2)</sup> (i.e. the previous "frame") which will vary depending on the speed of the computer, and how much work needs to be done in the program at any given time. This also allows graphics to be calculated separately if graphics are being multi-threaded. [wikipedia link ↗︎](https://en.wikipedia.org/wiki/Delta_timing)

#### 3. 다른 개발자들의 블로그

델타타임은 간단하게 말해서 바로 이전 프레임을 수행하는데 걸린 시간을 의미한다. [델타타임-deltaTime (2021/9/22) by.marmelo12 ↗︎](https://marmelo12.tistory.com/149)

Delta time은 이전 프레임과 현재 프레임 사이의 시간을 말합니다. [델타 타임(Delta time) 계산하기 - 게임에서 시간을 계산하는 방법 (2019/12/23) by.starjade-park ↗︎](https://starjade-park.github.io/posts/delta-time/)

델타타임은 사용자의 컴퓨터 성능에 따라 변하는 값입니다. 유니티 라이프 사이클 글에서 Update함수가 1초에 프레임 수 만큼 실행된다고 말했습니다. 그런데 이 프레임은 컴퓨터 성능에 의해 결정되므로, 컴퓨터 성능이 낮다면, 프레임 역시 낮고, 반대로 높다면 프레임 또한 높아집니다. 이렇게 되면 Update 함수의 호출 횟수가 달라지기 때문에, 멀티플레이를 할 때 심각한 문제가 생깁니다. [8. Time.deltaTime (델타타임) (2021/10/14) by.학식의 인디게임 개발기](https://bossmonster.tistory.com/9)
