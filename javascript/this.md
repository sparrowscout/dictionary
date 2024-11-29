# this

### 1. 클래스 메서드에서 특정 함수가 함수 참조로 사용될 때 this 바인딩 손실되는 현상

<br/>

🚧 에러 상황

```javascript
class SomeClass {
    private animationTime: number = 0;

    private register () {
        this.scene.registerBeforeRender(this.onAnimationCallback)
    }

    private onAnimationCallback() {
        console.log(this.animationTime) // error: this에는 animationTime이 존재하지 않음
     }
}
```

<br/>

🛠️ 수정 코드

```javascript
class SomeClass {
    private animationTime: number = 0;

    // 클래스 생성자에서 onAnimationCallback 메서드를 this에 바인딩하면, this를 유지할 수 있음
    constructor() {
        this.onAnimationCallback = this.onAnimationCallback.bind(this);
    }

    private register () {
        this.scene.registerBeforeRender(this.onAnimationCallback)
    }

    private onAnimationCallback() {
        console.log(this.animationTime)
     }
}
```
