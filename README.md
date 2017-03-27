# Design and Implementation of an Educational Support System

This is the repository of my Bachelor's thesis work at the Budapest University of Technology and Economics, titled Design and Implementation of an Educational Support System.

[The source code of the project is also open source.](https://github.com/lordblendi/student)

[PDF output](https://github.com/lordblendi/bsc-thesis/blob/master/diploma.pdf)

## Abstract

The Software Laboratory 5 course besides holding classes also requires administration tasks to be carried out for hundreds of students. The completion of these tasks can be disburdened with an administration portal. The course has a portal, but that is out-of-date because of the technological improvements and the users' new requirements.

The objective of my thesis is to design a new portal and a thin client, that meets the course's requirements and supports management of more than one course. The final system will have three modules in both the back end and the front end: student module, teacher module and administration modules. In my thesis I introduce and describe the implementation of the front end student module.

During my work I cooperated with a team of developers. My responsibility was to plan the system and implement the client agreed with the other team members. The rest of the team has to implement the server-side.

Before designing and implementing the thin client I investigated some JavaScript frameworks. During comparison I examined the routing, data-binding and AJAX request features, since these are necessary for a single-page application. I chose the Mithril framework, because it's performance is fast, it is self-contained and provides built-in utilities for the required features.

During the specification phase I collected all the required features, that have to be provided by the portal. Further, I added the required features, that were reported by the old portal's users. Based on this functional specification I designed the student client's architecture, functionality and graphic design.

The conceptual system design is based on the Design by Contract methodology. I defined the communication interfaces between the server and the client, but did not define the server's components. Because the implementation of the back-end is not part of my task, I used a mock server during the implementation and the test phase. This provided the required mock data for the client.

I implemented the student client in Mithril and Bootstrap 3. The graphic style in the MVC pattern's View is served by Bootstrap 3. For improved maintenance and easier implementation I divided the code into smaller parts within the modules, and automatized the build task with gulp.

An important part of my work was to test the implemented components. For this I created acceptance tests and code coverage test based on the specification. The tests were implemented in and run by the Cucumber, the Zombie and the Istanbul frameworks. The results confirmed that the design and the implementation were satisfactory.
