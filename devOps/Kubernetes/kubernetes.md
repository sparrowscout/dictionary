# kubernetes

- Kubernetes(K8s라고도 함)는 컨테이너형 애플리케이션의 배포, 확장 및 관리를 자동화하는 오픈 소스 컨테이너 오케스트레이션 플랫폼입니다.
- 자동 확장, 로드 밸런싱, 서비스 검색, 자가 회복 등의 기능을 제공합니다.

<br/>

프로덕트 환경에서는 앱을 실행시키고 있는 컨테이너들을 관리하고, 무중단 배포를 보장해야한다. 예를 들어서, 가동되고 있는 컨테이너가 다운되면 다른 컨테이너가 대체할 수 있게끔 해야한다. 이 플로우가 시스템으로 관리될 수 있으면 더 쉽지 않을까?

쿠버네티스로 할 수 있다! 쿠버네티스는 분산된 시스템을 탄력적으로 실행시킬 수 있는 프레임워크를 제공한다. 애플리케이션의 확장과 장애 조치를 처리하고, 배포 패턴 등을 제공한다. 예를 들어, 쿠버네티스는 시스템의 카나리아 배포를 쉽게 관리할 수 있다.

Containers are a good way to bundle and run your applications. In a production environment, you need to manage the containers that run the applications and ensure that there is no downtime. For example, if a container goes down, another container needs to start. Wouldn't it be easier if this behavior was handled by a system?

That's how Kubernetes comes to the rescue! Kubernetes provides you with a framework to run distributed systems resiliently. It takes care of scaling and failover for your application, provides deployment patterns, and more. For example: Kubernetes can easily manage a canary deployment for your system.

[Kubernetes documentation ↗︎](https://kubernetes.io/docs/concepts/overview/)

![Deployment evolution](https://kubernetes.io/images/docs/Container_Evolution.svg)
