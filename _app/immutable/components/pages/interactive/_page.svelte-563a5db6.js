import{S as C,i as O,s as R,k as P,l as $,m as A,h as m,n as _,N as yt,b as p,O as Ne,P as me,B as V,G as ae,Q as mt,q as he,r as de,F as oe,u as ke,R as ht,T as Tt,U as Ce,a as Y,c as X,V as Oe,f as h,g as z,t as d,d as N,H as _t,w as x,x as q,y as D,z as I,W as ue,o as xe,e as k,X as Re,Y as le,Z as Pt,_ as fe,$ as pe,v as L,a0 as $t,I as W,J as K,K as F,L as j,E as Ge,a1 as xt,a2 as Dt,a3 as It,a4 as At,a5 as we,a6 as be,M as Bt}from"../../../chunks/index-cac8f9bd.js";import{w as zt}from"../../../chunks/index-3a5075c7.js";function Ee(a,e,n){const r=a.slice();return r[4]=e[n],r}function Me(a){let e,n=a[4].replaceAll("_"," ")+"",r,t;return{c(){e=P("option"),r=he(n),this.h()},l(i){e=$(i,"OPTION",{});var o=A(e);r=de(o,n),o.forEach(m),this.h()},h(){e.__value=t=a[4],e.value=e.__value},m(i,o){p(i,e,o),oe(e,r)},p(i,o){o&2&&n!==(n=i[4].replaceAll("_"," ")+"")&&ke(r,n),o&2&&t!==(t=i[4])&&(e.__value=t,e.value=e.__value)},d(i){i&&m(e)}}}function Nt(a){let e,n,r,t=a[1],i=[];for(let o=0;o<t.length;o+=1)i[o]=Me(Ee(a,t,o));return{c(){e=P("select");for(let o=0;o<i.length;o+=1)i[o].c();this.h()},l(o){e=$(o,"SELECT",{id:!0,class:!0});var l=A(e);for(let s=0;s<i.length;s+=1)i[s].l(l);l.forEach(m),this.h()},h(){_(e,"id","select"),_(e,"class","svelte-1i9xen5"),a[0]===void 0&&yt(()=>a[3].call(e))},m(o,l){p(o,e,l);for(let s=0;s<i.length;s+=1)i[s].m(e,null);Ne(e,a[0]),n||(r=[me(e,"change",a[3]),me(e,"change",a[2])],n=!0)},p(o,[l]){if(l&2){t=o[1];let s;for(s=0;s<t.length;s+=1){const c=Ee(o,t,s);i[s]?i[s].p(c,l):(i[s]=Me(c),i[s].c(),i[s].m(e,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=t.length}l&3&&Ne(e,o[0])},i:V,o:V,d(o){o&&m(e),ae(i,o),n=!1,mt(r)}}}function Ct(a,e,n){let{selectedGuide:r=""}=e,{options:t}=e;function i(l){ht.call(this,a,l)}function o(){r=Tt(this),n(0,r),n(1,t)}return a.$$set=l=>{"selectedGuide"in l&&n(0,r=l.selectedGuide),"options"in l&&n(1,t=l.options)},[r,t,i,o]}class Ot extends C{constructor(e){super(),O(this,e,Ct,Nt,R,{selectedGuide:0,options:1})}}const Rt=`
# Purpose of the Kanban Guide

By reducing Kanban to its essential components, the hope is that this guide will be a unifying reference for the community.
By building upon Kanban fundamentals, the strategy presented here can accommodate the full spectrum of value delivery and organizational challenges.

Any use of the word Kanban in this document specifically means the holistic set of concepts in this guide.

© 2019-2020 Orderly Disruption Limited, Daniel S. Vacanti, Inc.

This publication is offered for license under the Attribution ShareAlike license of Creative Commons, accessible at http://creativecommons.org/licenses/by-sa/4.0/legalcode and also described in summary form at http://creativecommons.org/licenses/by-sa/4.0/, By using this Kanban Guide, you acknowledge that you have read and agree to be bound by the terms of the Attribution ShareAlike license of Creative Commons.

# Definition of Kanban

Kanban is a strategy for optimizing the flow of value through a process that uses a visual, pull-based system.
There may be various ways to define value, including consideration of the needs of the customer, the end-user, the organization, and the environment, for example.

Kanban comprises the following three practices working in tandem:

- Defining and visualizing a workflow
- Actively managing items in a workflow
- Improving a workflow

In their implementation, these Kanban practices are collectively called a Kanban system.
Those who participate in the value delivery of a Kanban system are called Kanban system members.

# Why Use Kanban?

Central to the definition of Kanban is the concept of flow.
Flow is the movement of potential value through a system.
As most workflows exist to optimize value, the strategy of Kanban is to optimize value by optimizing flow.
Optimization does not necessarily imply maximization.
Rather, value optimization means striving to find the right balance of effectiveness, efficiency, and predictability in how work gets done:

- An effective workflow is one that delivers what customers want when they want it.
- An efficient workflow allocates available economic resources as optimally as possible to deliver value.
- A predictable workflow means being able to accurately forecast value delivery within an acceptable degree of uncertainty.

The strategy of Kanban is to get members to ask the right questions sooner as part of a continuous improvement effort in pursuit of these goals.
Only by finding a sustainable balance among these three elements can value optimization be achieved.

Because Kanban can work with virtually any workflow, its application is not limited to any one industry or context.
Professional knowledge workers, such as those in finance, marketing, healthcare, and software (to name a few), have benefited from Kanban practices.

# Kanban Theory

Kanban draws on established flow theory, including but not limited to: systems thinking, lean principles, queuing theory (batch size and queue size), variability, and quality control.
Continually improving a Kanban system over time based on these theories is one way that organizations can attempt to optimize the delivery of value.

The theory upon which Kanban is based is also shared by many existing value-oriented methodologies and frameworks.
Because of these similarities, Kanban can and should be used to augment those delivery techniques.

# Kanban Practices

## Defining and Visualizing the Workflow

Optimizing flow requires defining what flow means in a given context.
The explicit shared understanding of flow among Kanban system members within their context is called a Definition of Workflow (DoW).
DoW is a fundamental concept of Kanban.
All other elements of this guide depend heavily on how workflow is defined.

_At minimum_, members must create their DoW using all of the following elements:

- A definition of the individual units of value that are moving through the workflow. These units of value are referred to as work items (or items).
- A definition for when work items are started and finished within the workflow. Your workflow may have more than one started or finished points depending on the work item.
- One or more defined states that the work items flow through from started to finished. Any work items between a started point and a finished point are considered work in progress (WIP).
- A definition of how WIP will be controlled from started to finished.
- Explicit policies about how work items can flow through each state from started to finished.
- A service level expectation (SLE), which is a forecast of how long it should take a work item to flow from started to finished.

Kanban system members often require additional DoW elements such as values, principles, and working agreements depending on the team’s circumstances.
The options vary, and there are resources beyond this guide that can help with deciding which ones to incorporate.

The visualization of the DoW is called a Kanban board.
Making at least the minimum elements of DoW transparent on the Kanban board is essential to processing knowledge that informs optimal workflow operation and facilitates continuous process improvement.

There are no specific guidelines for how a visualization should look as long as it encompasses the shared understanding of how value gets delivered.
Consideration should be given to all aspects of the DoW (e.g., work items, policies) along with any other context-specific factors that may affect how the process operates.
Kanban system members are limited only by their imagination regarding how they make flow transparent.

## Actively Managing Items in a Workflow

Active management of items in a workflow can take several forms, including but not limited to the following:

- Controlling WIP.
- Avoiding work items piling up in any part of the workflow.
- Ensuring work items do not age unnecessarily, using the SLE as a reference.
- Unblocking blocked work.

A common practice is for Kanban system members to review the active management of items regularly.
Although some may choose a daily meeting, there is no requirement to formalize the review or meet at a regular cadence so long as active management takes place.

## Controlling Work In Progress

Kanban system members must explicitly control the number of work items in a workflow from start to finish.
That control is usually represented as numbers or slots/tokens on a Kanban board that are called WIP limits.
A WIP limit can include (but is not limited to) work items in a single column, several grouped columns/lanes/areas, or a whole board.

A side effect of controlling WIP is that it creates a pull system.
It is called a pull system because Kanban system members start work on an item (pulls or selects) only when there is a clear signal that there is capacity to do so.
When WIP drops below the limit in the DoW, that is a signal to select new work.
Members should refrain from pulling/selecting more than the number of work items into a given part of the workflow as defined by the WIP Limit.
In rare cases, system members may agree to pull additional work items beyond the WIP Limit, but it should not be routine.

Controlling WIP not only helps workflow but often also improves the Kanban system members’ collective focus, commitment, and collaboration.
Any acceptable exceptions to controlling WIP should be made explicit as part of the DoW.

## Service Level Expectation

The SLE is a forecast of how long it should take a single work item to flow from started to finished.
The SLE itself has two parts: a period of elapsed time and a probability associated with that period (e.g., “85% of work items will be finished in eight days or less”).
The SLE should be based on historical cycle time, and once calculated, should be visualized on the Kanban board.
If historical cycle time data does not exist, a best guess will do until there is enough historical data for a proper SLE calculation.

# Improving the Workflow

Having made the DoW explicit, the Kanban system members’ responsibility is to continuously improve their workflow to achieve a better balance of effectiveness, efficiency, and predictability.
The information they gain from visualization and other Kanban measures guide what tweaks to the DoW may be most beneficial.

It is common practice to review the DoW from time to time to discuss and implement any changes needed.
There is no requirement, however, to wait for a formal meeting at a regular cadence to make these changes.
Kanban system members can and should make just-in-time alterations as the context dictates.
There is also nothing that prescribes improvements to workflow to be small and incremental.
If visualization and the Kanban measures indicate that a big change is needed, that is what the members should implement.

# Kanban Measures

The application of Kanban requires the collection and analysis of a minimum set of flow measures (or metrics).
They are a reflection of the Kanban system’s current health and performance and will help inform decisions about how value gets delivered.

The four mandatory flow measures to track are:

- _WIP_: The number of work items started but not finished.
- _Throughput_: The number of work items finished per unit of time. Note the measurement of throughput is the exact count of work items.
- _Work Item Age_: The amount of elapsed time between when a work item started and the current time.
- _Cycle Time_: The amount of elapsed time between when a work item started and when a work item finished.

For these mandatory four flow measures, started and finished refer to how the Kanban system members have defined those terms in the DoW.

Provided that the members use these metrics as described in this guide, members can refer to any of these measures using any other names as they choose.

In and of themselves, these metrics are meaningless unless they can inform one or more of the three Kanban practices.
Therefore, visualizing these metrics using charts is recommended.
It does not matter what kind of charts are used as long as they enable a shared understanding of the Kanban system’s current health and performance.

The flow measures listed in this guide represent only the minimum required for the operation of a Kanban system.
Kanban system members may and often should use additional context-specific measures that assist data-informed decisions.

# Endnote

Kanban’s practices and measures are immutable.
Although implementing only parts of Kanban is possible, the result is not Kanban.
One can and likely should add other principles, methodologies, and techniques to the Kanban system, but the minimum set of practices, measures, and the spirit of optimizing value must be preserved.

# History of Kanban

The present state of Kanban can trace its roots to the Toyota Production System (and its antecedents) and the work of people like Taiichi Ohno and W. Edwards Deming.
The collective set of practices for knowledge work that is now commonly referred to as Kanban mostly originated on a team at Corbis in 2006.
Those practices quickly spread to encompass a large and diverse international community that has continued to enhance and evolve the approach.

# Acknowledgments

In addition to all who helped to develop Kanban over the years, we would like to thank the following individuals specifically for their contributions to this guide:

- Yuval Yeret and Steve Porter for their initial contribution of foundational concepts.
- Emily Coleman for the inspiration to broaden the definition of value.
- Ryan Ripley and Todd Miller for helping to develop much of the supporting materials upon which this guide is based.
- Julia Wester, Colleen Johnson, Jose Casal, and Jean-Paul Bayley for being insightful reviewers of the early drafts.
- Dave West and Eric Naiburg for their careful consideration of what should be in the final published version.
- Deborah Zanke for editing.

# License

This work is licensed by Orderly Disruption Limited and Daniel S. Vacanti, Inc. under a Creative Commons Attribution 4.0 International License.
`,Gt=`
# Purpose of the Nexus Guide

Product delivery is complex, and the integration of product development work into a valuable product requires coordinating many diverse activities.
Nexus is a framework for developing and sustaining scaled product delivery initiatives.
It builds upon Scrum, extending it only where absolutely necessary to minimize and manage dependencies between multiple Scrum Teams while promoting empiricism and the Scrum Values.

The Nexus framework inherits the purpose and intent of the Scrum framework as documented in the Scrum Guide (www.scrumguides.org.) Scaled Scrum is still Scrum.
Nexus does not change the core design or ideas of Scrum, or leave out elements, or negate the rules of Scrum.
Doing so covers up problems and limits the benefits of Scrum, potentially even rendering it useless.

This Guide contains the definition of Nexus.
Each element of the framework serves a specific purpose that is essential to help teams and organizations scale the benefits of Scrum with multiple teams working together.

As organizations use Nexus, they typically discover complementary patterns, processes, and practices that help them in their application of the Nexus framework.
As with Scrum, such tactics vary widely and are described elsewhere.

Ken Schwaber and Scrum.org developed Nexus.

# Nexus Definition

A Nexus is a group of approximately three to nine Scrum Teams that work together to deliver a single product; it is a connection between people and things.
A Nexus has a single Product Owner who manages a single Product Backlog from which the Scrum Teams work.

The Nexus framework defines the accountabilities, events, and artifacts that bind and weave together the work of the Scrum Teams in a Nexus.
Nexus builds upon Scrum’s foundation, and its parts will be familiar to those who have used Scrum.
It minimally extends the Scrum framework only where absolutely necessary to enable multiple teams to work from a single Product Backlog to build an Integrated Increment that meets a goal.

# Nexus Theory

At its heart, Nexus seeks to preserve and enhance Scrum’s foundational bottom-up intelligence and empiricism while enabling a group of Scrum Teams to deliver more value than can be achieved by a single team.
The goal of Nexus is to scale the value that a group of Scrum Teams, working on a single product, is able to deliver.
It does this by reducing the complexity that those teams encounter as they collaborate to deliver an integrated, valuable, useful product Increment at least once every Sprint.

The Nexus Framework helps teams solve common scaling challenges like reducing cross-team dependencies, preserving team self-management and transparency, and ensuring accountability.
Nexus helps to make transparent dependencies.
These dependencies are often caused by mismatches related to:

1. Product structure: The degree to which different concerns are independently separated in the product will greatly affect the complexity of creating an integrated product release.
2. Communication structure: The way that people communicate within and between teams affects their ability to get work done; delays in communication and feedback reduce the flow of work.

Nexus provides opportunities to change the process, product structure, and communication structure to reduce or remove these dependencies.

While often counterintuitive, scaling the value that is delivered does not always require adding more people.
Increasing the number of people and the size of a product increases complexity and dependencies, the need for collaboration, and the number of communication pathways involved in making decisions.
Scaling-down, reducing the number of people who work on something, can be an important practice in delivering more value.

# The Nexus Framework

Nexus builds upon Scrum by enhancing the foundational elements of Scrum in ways that help solve the dependency and collaboration challenges of cross-team work.
Nexus (see Figure 1) reveals an empirical process that closely mirrors Scrum.

Nexus extends Scrum in the following ways:

- Accountabilities: The Nexus Integration Team ensures that the Nexus delivers a valuable, useful Integrated Increment at least once every Sprint. The Nexus Integration Team consists of the Product Owner, a Scrum Master, and Nexus Integration Team Members.
- Events: Events are appended to, placed around, or replace regular Scrum events to augment them. As modified, they serve both the overall effort of all Scrum Teams in the Nexus, and each individual team. A Nexus Sprint Goal is the objective for the Sprint.
- Artifacts: All Scrum Teams use the same, single Product Backlog. As the Product Backlog items are refined and made ready, indicators of which team will most likely do the work inside a Sprint are made transparent. A Nexus Sprint Backlog exists to assist with transparency during the Sprint. The Integrated Increment represents the current sum of all integrated work completed by a Nexus.

Figure 1: The Nexus Framework

# Accountabilities in Nexus

A Nexus consists of Scrum Teams that work together toward a Product Goal.
The Scrum framework defines three specific sets of accountabilities within a Scrum Team: the Developers, the Product Owner, and the Scrum Master.
These accountabilities are prescribed in the Scrum Guide.
In Nexus, an additional accountability is introduced, the Nexus Integration Team.

## Nexus Integration Team

The Nexus Integration Team is accountable for ensuring that a done Integrated Increment (the combined work completed by a Nexus) is produced at least once a Sprint.
It provides the focus that makes possible the accountability of multiple Scrum Teams to come together to create valuable, useful Increments, as prescribed in Scrum.

While Scrum Teams address integration issues within the Nexus, the Nexus Integration Team provides a focal point of integration for the Nexus.
Integration includes addressing technical and non-technical cross-functional team constraints that may impede a Nexus’ ability to deliver a constantly Integrated Increment.
It should use bottom-up intelligence from within the Nexus to achieve resolution.

The Product Owner, a Scrum Master, and the appropriate members from the Scrum Teams belong to the Nexus Integration Team.
Appropriate members are the people with the necessary skills and knowledge to help resolve the issues the Nexus faces at any point in time.
Composition of the Nexus Integration Team may change over time to reflect the current needs of a Nexus.
Common activities the Nexus Integration Team might perform include coaching, consulting, and highlighting awareness of dependencies and cross-team issues.

The Nexus Integration Team consists of:

- The Product Owner: A Nexus works off a single Product Backlog, and as described in Scrum, a Product Backlog has a single Product Owner who has the final say on its contents. The Product Owner is accountable for maximizing the value of the product and the work performed and integrated by the Scrum Teams in a Nexus. The Product Owner is also accountable for effective Product Backlog management. How this is done may vary widely across organizations, Nexuses, Scrum Teams, and individuals.
- A Scrum Master: The Scrum Master in the Nexus Integration Team is accountable for ensuring the Nexus framework is understood and enacted as described in the Nexus Guide. This Scrum Master may also be a Scrum Master in one or more of the Scrum Teams in the Nexus.
- One or more Nexus Integration Team Members: The Nexus Integration Team often consists of Scrum Team members who help the Scrum Teams to adopt tools and practices that contribute to the Scrum Teams’ ability to deliver a valuable and useful Integrated Increment that frequently meets the Definition of Done.

The Nexus Integration Team is responsible for coaching and guiding the Scrum Teams to acquire, implement, and learn practices and tools that improve their ability to produce a valuable, useful Increment.

Membership in the Nexus Integration Team takes precedence over individual Scrum Team membership.
As long as their Nexus Integration Team responsibility is satisfied, they can work as team members of their respective Scrum Teams.
This preference helps ensure that the work to resolve issues affecting multiple teams has priority.

# Nexus Events

Nexus adds to or extends the events defined by Scrum.
The duration of Nexus events is guided by the length of the corresponding events in the Scrum Guide.
They are timeboxed in addition to their corresponding Scrum events.

At scale, it may not be practical for all members of the Nexus to participate to share information or to come to an agreement.
Except where noted, Nexus events are attended by whichever members of the Nexus are needed to achieve the intended outcome of the event most effectively.

Nexus events consist of:

## The Sprint

A Sprint in Nexus is the same as in Scrum.
The Scrum Teams in a Nexus produce a single Integrated Increment.

## Cross-Team Refinement

Cross-Team Refinement of the Product Backlog reduces or eliminates cross-team dependencies within a Nexus.
The Product Backlog must be decomposed so that dependencies are transparent, identified across teams, and removed or minimized.
Product Backlog items pass through different levels of decomposition from very large and vague requests to actionable work that a single Scrum Team could deliver inside a Sprint.

Cross-Team Refinement of the Product Backlog at scale serves a dual purpose:

- It helps the Scrum Teams forecast which team will deliver which Product Backlog items.
- It identifies dependencies across those teams.

Cross-Team Refinement is ongoing.
The frequency, duration, and attendance of Cross-Team Refinement varies to optimize these two purposes.

Where needed, each Scrum Team will continue their own refinement in order for the Product Backlog items to be ready for selection in a Nexus Sprint Planning event.
An adequately refined Product Backlog will minimize the emergence of new dependencies during Nexus Sprint Planning.

## Nexus Sprint Planning

The purpose of Nexus Sprint Planning is to coordinate the activities of all Scrum Teams within a Nexus for a single Sprint.
Appropriate representatives from each Scrum Team and the Product Owner meet to plan the Sprint.

The result of Nexus Sprint Planning is:

- a Nexus Sprint Goal that aligns with the Product Goal and describes the purpose that will be achieved by the Nexus during the Sprint
- a Sprint Goal for each Scrum Team that aligns with the Nexus Sprint Goal
- a single Nexus Sprint Backlog that represents the work of the Nexus toward the Nexus Sprint Goal and makes cross-team dependencies transparent
- A Sprint Backlog for each Scrum Team, which makes transparent the work they will do in support of the Nexus Sprint Goal

## Nexus Daily Scrum

The purpose of the Nexus Daily Scrum is to identify any integration issues and inspect progress toward the Nexus Sprint Goal.
Appropriate representatives from the Scrum Teams attend the Nexus Daily Scrum, inspect the current state of the integrated Increment, and identify integration issues and newly discovered cross-team dependencies or impacts.
Each Scrum Team’s Daily Scrum complements the Nexus Daily Scrum by creating plans for the day, focused primarily on addressing the integration issues raised during the Nexus Daily Scrum.

The Nexus Daily Scrum is not the only time Scrum Teams in the Nexus are allowed to adjust their plan.
Cross-team communication can occur throughout the day for more detailed discussions about adapting or re-planning the rest of the Sprint’s work.

## Nexus Sprint Review

The Nexus Sprint Review is held at the end of the Sprint to provide feedback on the done Integrated Increment that the Nexus has built over the Sprint and determine future adaptations.

Since the entire Integrated Increment is the focus for capturing feedback from stakeholders, a Nexus Sprint Review replaces individual Scrum Team Sprint Reviews.
During the event, the Nexus presents the results of their work to key stakeholders and progress toward the Product Goal is discussed, although it may not be possible to show all completed work in detail.
Based on this information, attendees collaborate on what the Nexus should do to address the feedback.
The Product Backlog may be adjusted to reflect these discussions.

## Nexus Sprint Retrospective

The purpose of the Nexus Sprint Retrospective is to plan ways to increase quality and effectiveness across the whole Nexus.
The Nexus inspects how the last Sprint went with regards to individuals, teams, interactions, processes, tools, and its Definition of Done.
In addition to individual team improvements, the Scrum Teams’ Sprint Retrospectives complement the Nexus Sprint Retrospective by using bottom-up intelligence to focus on issues that affect the Nexus as a whole.

The Nexus Sprint Retrospective concludes the Sprint.

# Nexus Artifacts and Commitments

Artifacts represent work or value, and are designed to maximize transparency, as described in the Scrum Guide.
The Nexus Integration Team works with the Scrum Teams within a Nexus to ensure that transparency is achieved across all artifacts and that the state of the Integrated Increment is widely understood.

Nexus extends Scrum with the following artifacts, and each artifact contains a commitment, as indicated below.
These commitments exist to reinforce empiricism and the Scrum value for the Nexus and its stakeholders.

## Product Backlog

There is a single Product Backlog that contains a list of what is needed to improve the product for the entire Nexus and all of its Scrum Teams.
At scale, the Product Backlog must be understood at a level where dependencies can be detected and minimized.
The Product Owner is accountable for the Product Backlog, including its content, availability, and ordering.

### Commitment: Product Goal

The commitment for the Product Backlog is the Product Goal.
The Product Goal, which describes the future state of the product and serves as a long-term goal of the Nexus.

## Nexus Sprint Backlog

A Nexus Sprint Backlog is the composite of the Nexus Sprint Goal and Product Backlog items from the Sprint Backlogs of the individual Scrum Teams.
It is used to highlight dependencies and the flow of work during the Sprint.
The Nexus Sprint Backlog is updated throughout the Sprint as more is learned.
It should have enough detail that the Nexus can inspect their progress in the Nexus Daily Scrum.

### Commitment: Nexus Sprint Goal

The commitment for the Nexus Sprint Backlog is the Nexus Sprint Goal.
The Nexus Sprint Goal is a single objective for the Nexus.
It is the sum of all the work and Sprint Goals of the Scrum Teams within the Nexus.
It creates coherence and focus for the Nexus for the Sprint by encouraging the Scrum Teams to work together rather than on separate initiatives.
The Nexus Sprint Goal is created at the Nexus Sprint Planning event and added to the Nexus Sprint Backlog.
As Scrum Teams work during the Sprint, they keep the Nexus Sprint Goal in mind.
The Nexus should demonstrate the valuable and useful functionality that is done to achieve the Nexus Sprint Goal at the Nexus Sprint Review in order to receive stakeholder feedback.

## Integrated Increment

The Integrated Increment represents the current sum of all integrated work completed by a Nexus toward the Product Goal.
The Integrated Increment is inspected at the Nexus Sprint Review, but may be delivered to stakeholders before the end of the Sprint.
The Integrated Increment must meet the Definition of Done.

### Commitment: Definition of Done

The commitment for the Integrated Increment is the Definition of Done, which defines the state of the integrated work when it meets the quality and measures required for the product.
The Increment is done only when integrated, valuable, and usable.
The Nexus Integration Team is responsible for a Definition of Done that can be applied to the Integrated Increment developed each Sprint.
All Scrum Teams within the Nexus must define and adhere to this Definition of Done.
Individual Scrum Teams self-manage to achieve this state.
They may choose to apply a more stringent Definition of Done within their own teams, but cannot apply less rigorous criteria than agreed for the Integrated Increment.

Decisions made based on the state of artifacts are only as effective as the level of artifact transparency.
Incomplete or partial information will lead to incorrect or flawed decisions.
The impact of those decisions can be magnified at the scale of Nexus.

# End Note

Nexus is free and offered in this Guide.
As with the Scrum framework, the accountabilities in Nexus, its artifacts, events, and rules are immutable.
Although implementing only parts of Nexus is possible, the result is not Nexus.

# Acknowledgements

Nexus and Scaled Professional Scrum were collaboratively developed by Ken Schwaber, David Dame, Richard Hundhausen, Patricia Kong, Rob Maher, Steve Porter, Christina Schwaber, and Gunther Verheyen. A special thank you to Kurt Bittner, Ravi Verma, Fredrik Wendt, Jesse Houwing and Simon Flossmann for their significant contributions in advancing Nexus and Scaled Professional Scrum.

# License

© 2021 Scrum.org. Offered for license under the Offered for license under the Attribution Share Alike license of Creative Commons, accessible at http://creativecommons.org/licenses/by-sa/4.0/legalcode and also described in summary form at http://creativecommons.org/licenses/by-sa/4.0/.
By utilizing this Nexus Guide, you acknowledge and agree that you have read and agree to be bound by the terms of the Attribution Share-Alike license of Creative Commons.
`,Et=`
# Purpose of the Scrum Guide

Scrum is a framework for developing, delivering, and sustaining complex products. This Guide contains the definition of Scrum. This definition consists of Scrum’s roles, events, artifacts, and the rules that bind them together. Ken Schwaber and Jeff Sutherland developed Scrum; the Scrum Guide is written and provided by them. Together, they stand behind the Scrum Guide.

# Definition of Scrum

Scrum (n): A framework within which people can address complex adaptive problems, while productively and creatively delivering products of the highest possible value.

Scrum is:

- Lightweight
- Simple to understand
- Difficult to master

Scrum is a process framework that has been used to manage work on complex products since the early 1990s. Scrum is not a process, technique, or definitive method. Rather, it is a framework within which you can employ various processes and techniques. Scrum makes clear the relative efficacy of your product management and work techniques so that you can continuously improve the product, the team, and the working environment.

The Scrum framework consists of Scrum Teams and their associated roles, events, artifacts, and rules. Each component within the framework serves a specific purpose and is essential to Scrum’s success and usage.

The rules of Scrum bind together the roles, events, and artifacts, governing the relationships and interaction between them. The rules of Scrum are described throughout the body of this document.

Specific tactics for using the Scrum framework vary and are described elsewhere.

# Uses of Scrum

Scrum was initially developed for managing and developing products. Starting in the early 1990s, Scrum has been used extensively, worldwide, to:

1. Research and identify viable markets, technologies, and product capabilities;
2. Develop products and enhancements;
3. Release products and enhancements, as frequently as many times per day;
4. Develop and sustain Cloud (online, secure, on-demand) and other operational
   environments for product use; and,
5. Sustain and renew products.

Scrum has been used to develop software, hardware, embedded software, networks of interacting function, autonomous vehicles, schools, government, marketing, managing the operation of organizations and almost everything we use in our daily lives, as individuals and societies.

As technology, market, and environmental complexities and their interactions have rapidly increased, Scrum’s utility in dealing with complexity is proven daily.

Scrum proved especially effective in iterative and incremental knowledge transfer. Scrum is now widely used for products, services, and the management of the parent organization.

The essence of Scrum is a small team of people. The individual team is highly flexible and adaptive. These strengths continue operating in single, several, many, and networks of teams that develop, release, operate and sustain the work and work products of thousands of people. They collaborate and interoperate through sophisticated development architectures and target release environments.

When the words “develop” and “development” are used in the Scrum Guide, they refer to complex work, such as those types identified above.

# Scrum Theory

Scrum is founded on empirical process control theory, or empiricism. Empiricism asserts that knowledge comes from experience and making decisions based on what is known. Scrum employs an iterative, incremental approach to optimize predictability and control risk.

Three pillars uphold every implementation of empirical process control: transparency, inspection, and adaptation.

# Transparency

Significant aspects of the process must be visible to those responsible for the outcome. Transparency requires those aspects be defined by a common standard so observers share a common understanding of what is being seen.

For example

- A common language referring to the process must be shared by all participants; and,
- Those performing the work and those inspecting the resulting increment must share a
  common definition of “Done”.

# Inspection

Scrum users must frequently inspect Scrum artifacts and progress toward a Sprint Goal to detect undesirable variances. Their inspection should not be so frequent that inspection gets in the way of the work. Inspections are most beneficial when diligently performed by skilled inspectors at the point of work.

# Adaptation

If an inspector determines that one or more aspects of a process deviate outside acceptable limits, and that the resulting product will be unacceptable, the process or the material being processed must be adjusted. An adjustment must be made as soon as possible to minimize further deviation.

Scrum prescribes four formal events for inspection and adaptation, as described in the Scrum Events section of this document:

- Sprint Planning
- Daily Scrum
- Sprint Review
- Sprint Retrospective

# Scrum Values

When the values of commitment, courage, focus, openness and respect are embodied and lived by the Scrum Team, the Scrum pillars of transparency, inspection, and adaptation come to life and build trust for everyone. The Scrum Team members learn and explore those values as they work with the Scrum roles, events, and artifacts.

Successful use of Scrum depends on people becoming more proficient in living these five values. People personally commit to achieving the goals of the Scrum Team. The Scrum Team members have courage to do the right thing and work on tough problems. Everyone focuses on the work of the Sprint and the goals of the Scrum Team. The Scrum Team and its stakeholders agree to be open about all the work and the challenges with performing the work. Scrum Team members respect each other to be capable, independent people.

# The Scrum Team

The Scrum Team consists of a Product Owner, the Development Team, and a Scrum Master. Scrum Teams are self-organizing and cross-functional. Self-organizing teams choose how best to accomplish their work, rather than being directed by others outside the team. Cross-functional teams have all competencies needed to accomplish the work without depending on others not part of the team. The team model in Scrum is designed to optimize flexibility, creativity, and productivity. The Scrum Team has proven itself to be increasingly effective for all the earlier stated uses, and any complex work.

Scrum Teams deliver products iteratively and incrementally, maximizing opportunities for feedback. Incremental deliveries of “Done” product ensure a potentially useful version of working product is always available.

## The Product Owner

The Product Owner is responsible for maximizing the value of the product resulting from work of the Development Team. How this is done may vary widely across organizations, Scrum Teams, and individuals.

The Product Owner is the sole person responsible for managing the Product Backlog. Product Backlog management includes:

- Clearly expressing Product Backlog items;
- Ordering the items in the Product Backlog to best achieve goals and missions;
- Optimizing the value of the work the Development Team performs;
- Ensuring that the Product Backlog is visible, transparent, and clear to all, and shows what the Scrum Team will work on next; and,
- Ensuring the Development Team understands items in the Product Backlog to the level needed.

The Product Owner may do the above work, or have the Development Team do it. However, the Product Owner remains accountable.

The Product Owner is one person, not a committee. The Product Owner may represent the desires of a committee in the Product Backlog, but those wanting to change a Product Backlog item’s priority must address the Product Owner.

For the Product Owner to succeed, the entire organization must respect his or her decisions. The Product Owner’s decisions are visible in the content and ordering of the Product Backlog. No one can force the Development Team to work from a different set of requirements.

## The Development Team

The Development Team consists of professionals who do the work of delivering a potentially releasable Increment of “Done” product at the end of each Sprint. A “Done” increment is required at the Sprint Review. Only members of the Development Team create the Increment.

Development Teams are structured and empowered by the organization to organize and manage their own work. The resulting synergy optimizes the Development Team’s overall efficiency and effectiveness.

Development Teams have the following characteristics:

- They are self-organizing. No one (not even the Scrum Master) tells the Development Team how to turn Product Backlog into Increments of potentially releasable functionality;
- Development Teams are cross-functional, with all the skills as a team necessary to create a product Increment;
- Scrum recognizes no titles for Development Team members, regardless of the work being performed by the person;
- Scrum recognizes no sub-teams in the Development Team, regardless of domains that need to be addressed like testing, architecture, operations, or business analysis; and,
- Individual Development Team members may have specialized skills and areas of focus, but accountability belongs to the Development Team as a whole.

### Development Team Size

Optimal Development Team size is small enough to remain nimble and large enough to complete significant work within a Sprint. Fewer than three Development Team members decrease interaction and results in smaller productivity gains. Smaller Development Teams may encounter skill constraints during the Sprint, causing the Development Team to be unable to deliver a potentially releasable Increment. Having more than nine members requires too much coordination. Large Development Teams generate too much complexity for an empirical process to be useful. The Product Owner and Scrum Master roles are not included in this count unless they are also executing the work of the Sprint Backlog.

## The Scrum Master

The Scrum Master is responsible for promoting and supporting Scrum as defined in the Scrum Guide. Scrum Masters do this by helping everyone understand Scrum theory, practices, rules, and values.

The Scrum Master is a servant-leader for the Scrum Team. The Scrum Master helps those outside the Scrum Team understand which of their interactions with the Scrum Team are helpful and which aren’t. The Scrum Master helps everyone change these interactions to maximize the value created by the Scrum Team.

### Scrum Master Service to the Product Owner

The Scrum Master serves the Product Owner in several ways, including:

- Ensuring that goals, scope, and product domain are understood by everyone on the Scrum Team as well as possible;
- Finding techniques for effective Product Backlog management;
- Helping the Scrum Team understand the need for clear and concise Product Backlog items;
- Understanding product planning in an empirical environment;
- Ensuring the Product Owner knows how to arrange the Product Backlog to maximize value;
- Understanding and practicing agility; and,
- Facilitating Scrum events as requested or needed.

### Scrum Master Service to the Development Team

The Scrum Master serves the Development Team in several ways, including:

- Coaching the Development Team in self-organization and cross-functionality;
- Helping the Development Team to create high-value products;
- Removing impediments to the Development Team’s progress;
- Facilitating Scrum events as requested or needed; and,
- Coaching the Development Team in organizational environments in which Scrum is not yet fully adopted and understood.

### Scrum Master Service to the Organization

The Scrum Master serves the organization in several ways, including:

- Leading and coaching the organization in its Scrum adoption;
- Planning Scrum implementations within the organization;
- Helping employees and stakeholders understand and enact Scrum and empirical product development;
- Causing change that increases the productivity of the Scrum Team; and,
- Working with other Scrum Masters to increase the effectiveness of the application of Scrum in the organization.

# Scrum Events

Prescribed events are used in Scrum to create regularity and to minimize the need for meetings not defined in Scrum. All events are time-boxed events, such that every event has a maximum duration. Once a Sprint begins, its duration is fixed and cannot be shortened or lengthened. The remaining events may end whenever the purpose of the event is achieved, ensuring an appropriate amount of time is spent without allowing waste in the process.

Other than the Sprint itself, which is a container for all other events, each event in Scrum is a formal opportunity to inspect and adapt something. These events are specifically designed to enable critical transparency and inspection. Failure to include any of these events results in reduced transparency and is a lost opportunity to inspect and adapt.

## The Sprint

The heart of Scrum is a Sprint, a time-box of one month or less during which a “Done”, useable, and potentially releasable product Increment is created. Sprints have consistent durations throughout a development effort. A new Sprint starts immediately after the conclusion of the previous Sprint.

Sprints contain and consist of the Sprint Planning, Daily Scrums, the development work, the Sprint Review, and the Sprint Retrospective.

During the Sprint:

- No changes are made that would endanger the Sprint Goal;
- Quality goals do not decrease; and,
- Scope may be clarified and re-negotiated between the Product Owner and Development Team as more is learned.

Each Sprint may be considered a project with no more than a one-month horizon. Like projects, Sprints are used to accomplish something. Each Sprint has a goal of what is to be built, a design and flexible plan that will guide building it, the work, and the resultant product increment.

Sprints are limited to one calendar month. When a Sprint’s horizon is too long the definition of what is being built may change, complexity may rise, and risk may increase. Sprints enable predictability by ensuring inspection and adaptation of progress toward a Sprint Goal at least every calendar month. Sprints also limit risk to one calendar month of cost.

### Cancelling a Sprint

A Sprint can be cancelled before the Sprint time-box is over. Only the Product Owner has the authority to cancel the Sprint, although he or she may do so under influence from the stakeholders, the Development Team, or the Scrum Master.

A Sprint would be cancelled if the Sprint Goal becomes obsolete. This might occur if the company changes direction or if market or technology conditions change. In general, a Sprint should be cancelled if it no longer makes sense given the circumstances. But, due to the short duration of Sprints, cancellation rarely makes sense.

When a Sprint is cancelled, any completed and “Done” Product Backlog items are reviewed. If part of the work is potentially releasable, the Product Owner typically accepts it. All incomplete Product Backlog Items are re-estimated and put back on the Product Backlog. The work done on them depreciates quickly and must be frequently re-estimated.

Sprint cancellations consume resources, since everyone regroups in another Sprint Planning to start another Sprint. Sprint cancellations are often traumatic to the Scrum Team, and are very uncommon.

## Sprint Planning

The work to be performed in the Sprint is planned at the Sprint Planning. This plan is created by the collaborative work of the entire Scrum Team.

Sprint Planning is time-boxed to a maximum of eight hours for a one-month Sprint. For shorter Sprints, the event is usually shorter. The Scrum Master ensures that the event takes place and that attendants understand its purpose. The Scrum Master teaches the Scrum Team to keep it within the time-box.

Sprint Planning answers the following:

- What can be delivered in the Increment resulting from the upcoming Sprint?
- How will the work needed to deliver the Increment be achieved?

### Topic One: What can be done this Sprint?

The Development Team works to forecast the functionality that will be developed during the Sprint. The Product Owner discusses the objective that the Sprint should achieve and the Product Backlog items that, if completed in the Sprint, would achieve the Sprint Goal. The entire Scrum Team collaborates on understanding the work of the Sprint.

The input to this meeting is the Product Backlog, the latest product Increment, projected capacity of the Development Team during the Sprint, and past performance of the Development Team. The number of items selected from the Product Backlog for the Sprint is solely up to the Development Team. Only the Development Team can assess what it can accomplish over the upcoming Sprint.

During Sprint Planning the Scrum Team also crafts a Sprint Goal. The Sprint Goal is an objective that will be met within the Sprint through the implementation of the Product Backlog, and it provides guidance to the Development Team on why it is building the Increment.

### Topic Two: How will the chosen work get done?

Having set the Sprint Goal and selected the Product Backlog items for the Sprint, the Development Team decides how it will build this functionality into a “Done” product Increment during the Sprint. The Product Backlog items selected for this Sprint plus the plan for delivering them is called the Sprint Backlog.

The Development Team usually starts by designing the system and the work needed to convert the Product Backlog into a working product Increment. Work may be of varying size, or estimated effort. However, enough work is planned during Sprint Planning for the Development Team to forecast what it believes it can do in the upcoming Sprint. Work planned for the first days of the Sprint by the Development Team is decomposed by the end of this meeting, often to units of one day or less. The Development Team self-organizes to undertake the work in the Sprint Backlog, both during Sprint Planning and as needed throughout the Sprint.

The Product Owner can help to clarify the selected Product Backlog items and make trade-offs. If the Development Team determines it has too much or too little work, it may renegotiate the selected Product Backlog items with the Product Owner. The Development Team may also invite other people to attend to provide technical or domain advice.

By the end of the Sprint Planning, the Development Team should be able to explain to the Product Owner and Scrum Master how it intends to work as a self-organizing team to accomplish the Sprint Goal and create the anticipated Increment.

### Sprint Goal

The Sprint Goal is an objective set for the Sprint that can be met through the implementation of Product Backlog. It provides guidance to the Development Team on why it is building the Increment. It is created during the Sprint Planning meeting. The Sprint Goal gives the Development Team some flexibility regarding the functionality implemented within the Sprint. The selected Product Backlog items deliver one coherent function, which can be the Sprint Goal. The Sprint Goal can be any other coherence that causes the Development Team to work together rather than on separate initiatives.

As the Development Team works, it keeps the Sprint Goal in mind. In order to satisfy the Sprint Goal, it implements functionality and technology. If the work turns out to be different than the Development Team expected, they collaborate with the Product Owner to negotiate the scope of Sprint Backlog within the Sprint.

## Daily Scrum

The Daily Scrum is a 15-minute time-boxed event for the Development Team. The Daily Scrum is held every day of the Sprint. At it, the Development Team plans work for the next 24 hours. This optimizes team collaboration and performance by inspecting the work since the last Daily Scrum and forecasting upcoming Sprint work. The Daily Scrum is held at the same time and place each day to reduce complexity.

The Development Team uses the Daily Scrum to inspect progress toward the Sprint Goal and to inspect how progress is trending toward completing the work in the Sprint Backlog. The Daily Scrum optimizes the probability that the Development Team will meet the Sprint Goal. Every day, the Development Team should understand how it intends to work together as a self- organizing team to accomplish the Sprint Goal and create the anticipated Increment by the end of the Sprint.

The structure of the meeting is set by the Development Team and can be conducted in different ways if it focuses on progress toward the Sprint Goal. Some Development Teams will use questions, some will be more discussion based. Here is an example of what might be used:

- What did I do yesterday that helped the Development Team meet the Sprint Goal?
- What will I do today to help the Development Team meet the Sprint Goal?
- Do I see any impediment that prevents me or the Development Team from meeting the Sprint Goal?

The Development Team or team members often meet immediately after the Daily Scrum for detailed discussions, or to adapt, or replan, the rest of the Sprint’s work.

The Scrum Master ensures that the Development Team has the meeting, but the Development Team is responsible for conducting the Daily Scrum. The Scrum Master teaches the Development Team to keep the Daily Scrum within the 15-minute time-box.

The Daily Scrum is an internal meeting for the Development Team. If others are present, the Scrum Master ensures that they do not disrupt the meeting.

Daily Scrums improve communications, eliminate other meetings, identify impediments to development for removal, highlight and promote quick decision-making, and improve the Development Team’s level of knowledge. This is a key inspect and adapt meeting.

## Sprint Review

A Sprint Review is held at the end of the Sprint to inspect the Increment and adapt the Product Backlog if needed. During the Sprint Review, the Scrum Team and stakeholders collaborate about what was done in the Sprint. Based on that and any changes to the Product Backlog during the Sprint, attendees collaborate on the next things that could be done to optimize value. This is an informal meeting, not a status meeting, and the presentation of the Increment is intended to elicit feedback and foster collaboration.

This is at most a four-hour meeting for one-month Sprints. For shorter Sprints, the event is usually shorter. The Scrum Master ensures that the event takes place and that attendees understand its purpose. The Scrum Master teaches everyone involved to keep it within the time-box.

The Sprint Review includes the following elements:

- Attendees include the Scrum Team and key stakeholders invited by the Product Owner;
- The Product Owner explains what Product Backlog items have been “Done” and what has
  not been “Done”;
- The Development Team discusses what went well during the Sprint, what problems it ran
  into, and how those problems were solved;
- The Development Team demonstrates the work that it has “Done” and answers questions
  about the Increment;
- The Product Owner discusses the Product Backlog as it stands. He or she projects likely
  target and delivery dates based on progress to date (if needed);
- The entire group collaborates on what to do next, so that the Sprint Review provides valuable input to subsequent Sprint Planning;
- Review of how the marketplace or potential use of the product might have changed what is the most valuable thing to do next; and,
- Review of the timeline, budget, potential capabilities, and marketplace for the next anticipated releases of functionality or capability of the product.

The result of the Sprint Review is a revised Product Backlog that defines the probable Product Backlog items for the next Sprint. The Product Backlog may also be adjusted overall to meet new opportunities.

## Sprint Retrospective

The Sprint Retrospective is an opportunity for the Scrum Team to inspect itself and create a plan for improvements to be enacted during the next Sprint.

The Sprint Retrospective occurs after the Sprint Review and prior to the next Sprint Planning. This is at most a three-hour meeting for one-month Sprints. For shorter Sprints, the event is usually shorter. The Scrum Master ensures that the event takes place and that attendants understand its purpose.

The Scrum Master ensures that the meeting is positive and productive. The Scrum Master teaches all to keep it within the time-box. The Scrum Master participates as a peer team member in the meeting from the accountability over the Scrum process.

The purpose of the Sprint Retrospective is to:

- Inspect how the last Sprint went with regards to people, relationships, process, and tools;
- Identify and order the major items that went well and potential improvements; and,
- Create a plan for implementing improvements to the way the Scrum Team does its work.

The Scrum Master encourages the Scrum Team to improve, within the Scrum process framework, its development process and practices to make it more effective and enjoyable for the next Sprint. During each Sprint Retrospective, the Scrum Team plans ways to increase product quality by improving work processes or adapting the definition of “Done”, if appropriate and not in conflict with product or organizational standards.

By the end of the Sprint Retrospective, the Scrum Team should have identified improvements that it will implement in the next Sprint. Implementing these improvements in the next Sprint is the adaptation to the inspection of the Scrum Team itself. Although improvements may be implemented at any time, the Sprint Retrospective provides a formal opportunity to focus on inspection and adaptation.

# Scrum Artifacts

Scrum’s artifacts represent work or value to provide transparency and opportunities for inspection and adaptation. Artifacts defined by Scrum are specifically designed to maximize transparency of key information so that everybody has the same understanding of the artifact.

## Product Backlog

The Product Backlog is an ordered list of everything that is known to be needed in the product. It is the single source of requirements for any changes to be made to the product. The Product Owner is responsible for the Product Backlog, including its content, availability, and ordering.

A Product Backlog is never complete. The earliest development of it lays out the initially known and best-understood requirements. The Product Backlog evolves as the product and the environment in which it will be used evolves. The Product Backlog is dynamic; it constantly changes to identify what the product needs to be appropriate, competitive, and useful. If a product exists, its Product Backlog also exists.

The Product Backlog lists all features, functions, requirements, enhancements, and fixes that constitute the changes to be made to the product in future releases. Product Backlog items have the attributes of a description, order, estimate, and value. Product Backlog items often include test descriptions that will prove its completeness when “Done.”

As a product is used and gains value, and the marketplace provides feedback, the Product Backlog becomes a larger and more exhaustive list. Requirements never stop changing, so a Product Backlog is a living artifact. Changes in business requirements, market conditions, or technology may cause changes in the Product Backlog.

Multiple Scrum Teams often work together on the same product. One Product Backlog is used to describe the upcoming work on the product. A Product Backlog attribute that groups items may then be employed.

Product Backlog refinement is the act of adding detail, estimates, and order to items in the Product Backlog. This is an ongoing process in which the Product Owner and the Development Team collaborate on the details of Product Backlog items. During Product Backlog refinement, items are reviewed and revised. The Scrum Team decides how and when refinement is done. Refinement usually consumes no more than 10% of the capacity of the Development Team. However, Product Backlog items can be updated at any time by the Product Owner or at the Product Owner’s discretion.

Higher ordered Product Backlog items are usually clearer and more detailed than lower ordered ones. More precise estimates are made based on the greater clarity and increased detail; the lower the order, the less detail. Product Backlog items that will occupy the Development Team for the upcoming Sprint are refined so that any one item can reasonably be “Done” within the Sprint time-box. Product Backlog items that can be “Done” by the Development Team within one Sprint are deemed “Ready” for selection in a Sprint Planning. Product Backlog items usually acquire this degree of transparency through the above described refining activities.

The Development Team is responsible for all estimates. The Product Owner may influence the Development Team by helping it understand and select trade-offs, but the people who will perform the work make the final estimate.

### Monitoring Progress Toward Goals

At any point in time, the total work remaining to reach a goal can be summed. The Product Owner tracks this total work remaining at least every Sprint Review. The Product Owner compares this amount with work remaining at previous Sprint Reviews to assess progress toward completing projected work by the desired time for the goal. This information is made transparent to all stakeholders.

Various projective practices upon trending have been used to forecast progress, like burn- downs, burn-ups, or cumulative flows. These have proven useful. However, these do not replace the importance of empiricism. In complex environments, what will happen is unknown. Only what has already happened may be used for forward-looking decision-making.

## Sprint Backlog

The Sprint Backlog is the set of Product Backlog items selected for the Sprint, plus a plan for delivering the product Increment and realizing the Sprint Goal. The Sprint Backlog is a forecast by the Development Team about what functionality will be in the next Increment and the work needed to deliver that functionality into a “Done” Increment.

The Sprint Backlog makes visible all the work that the Development Team identifies as necessary to meet the Sprint Goal. To ensure continuous improvement, it includes at least one high priority process improvement identified in the previous Retrospective meeting.

The Sprint Backlog is a plan with enough detail that changes in progress can be understood in the Daily Scrum. The Development Team modifies the Sprint Backlog throughout the Sprint, and the Sprint Backlog emerges during the Sprint. This emergence occurs as the Development Team
works through the plan and learns more about the work needed to achieve the Sprint Goal.

As new work is required, the Development Team adds it to the Sprint Backlog. As work is performed or completed, the estimated remaining work is updated. When elements of the plan are deemed unnecessary, they are removed. Only the Development Team can change its Sprint Backlog during a Sprint. The Sprint Backlog is a highly visible, real-time picture of the work that the Development Team plans to accomplish during the Sprint, and it belongs solely to the Development Team.

### Monitoring Sprint Progress

At any point in time in a Sprint, the total work remaining in the Sprint Backlog can be summed. The Development Team tracks this total work remaining at least for every Daily Scrum to project the likelihood of achieving the Sprint Goal. By tracking the remaining work throughout the Sprint, the Development Team can manage its progress.

## Increment

The Increment is the sum of all the Product Backlog items completed during a Sprint and the value of the increments of all previous Sprints. At the end of a Sprint, the new Increment must be “Done,” which means it must be in useable condition and meet the Scrum Team’s definition of “Done.” An increment is a body of inspectable, done work that supports empiricism at the end of the Sprint. The increment is a step toward a vision or goal. The increment must be in useable condition regardless of whether the Product Owner decides to release it.

# Artifact Transparency

Scrum relies on transparency. Decisions to optimize value and control risk are made based on the perceived state of the artifacts. To the extent that transparency is complete, these decisions have a sound basis. To the extent that the artifacts are incompletely transparent, these decisions can be flawed, value may diminish and risk may increase.

The Scrum Master must work with the Product Owner, Development Team, and other involved parties to understand if the artifacts are completely transparent. There are practices for coping with incomplete transparency; the Scrum Master must help everyone apply the most appropriate practices in the absence of complete transparency. A Scrum Master can detect incomplete transparency by inspecting the artifacts, sensing patterns, listening closely to what is being said, and detecting differences between expected and real results.

The Scrum Master’s job is to work with the Scrum Team and the organization to increase the transparency of the artifacts. This work usually involves learning, convincing, and change. Transparency doesn’t occur overnight, but is a path.

## Definition of “Done”

When a Product Backlog item or an Increment is described as “Done”, everyone must understand what “Done” means. Although this may vary significantly per Scrum Team, members must have a shared understanding of what it means for work to be complete, to ensure transparency. This is the definition of “Done” for the Scrum Team and is used to assess when work is complete on the product Increment.

The same definition guides the Development Team in knowing how many Product Backlog items it can select during a Sprint Planning. The purpose of each Sprint is to deliver Increments of potentially releasable functionality that adhere to the Scrum Team’s current definition of “Done.”

Development Teams deliver an Increment of product functionality every Sprint. This Increment is useable, so a Product Owner may choose to immediately release it. If the definition of "Done" for an increment is part of the conventions, standards or guidelines of the development organization, all Scrum Teams must follow it as a minimum.

If "Done" for an increment is not a convention of the development organization, the Development Team of the Scrum Team must define a definition of “Done” appropriate for the product. If there are multiple Scrum Teams working on the system or product release, the Development Teams on all the Scrum Teams must mutually define the definition of “Done.”

Each Increment is additive to all prior Increments and thoroughly tested, ensuring that all Increments work together.

As Scrum Teams mature, it is expected that their definitions of “Done” will expand to include more stringent criteria for higher quality. New definitions, as used, may uncover work to be done in previously “Done” increments. Any one product or system should have a definition of “Done” that is a standard for any work done on it.

# End Note

Scrum is free and offered in this Guide.
Scrum’s roles, events, artifacts, and rules are immutable and although implementing only parts of Scrum is possible, the result is not Scrum.
Scrum exists only in its entirety and functions well as a container for other techniques, methodologies, and practices.

# Copyright

©2017 Ken Schwaber and Jeff Sutherland. Offered for license under the Attribution Share-Alike license of Creative Commons, accessible at http://creativecommons.org/licenses/by-sa/4.0/legalcode and also described in summary form at http://creativecommons.org/licenses/by-sa/4.0/. By utilizing this Scrum Guide, you acknowledge and agree that you have read and agree to be bound by the terms of the Attribution Share-Alike license of Creative Commons.
`,Mt=`
# Scrum Definition

Scrum is a lightweight framework[ScrumFramework] that helps people, teams and organizations generate value through adaptive[ScrumPillars:Adaptation] solutions for complex problems.

In a nutshell, Scrum requires a Scrum Master[ScrumTeam:ScrumMaster] to foster an environment where:

1. A Product Owner[ScrumTeam:ProductOwner] orders the work[ProductBacklogItem] for a complex problem into a Product Backlog[ScrumArtefact:ProductBacklog].
2. The Scrum Team[ScrumTeam] turns a selection of the work[SprintBacklogItem,ProductBacklogItem] into an Increment[ScrumArtifacts:Increment] of value during a Sprint[ScumEvent:Sprint].
3. The Scrum Team[ScrumTeam] and its stakeholders inspect[ScrumPillars:Inspection] the results and adjust[ScrumPillars:Adaptation] for the next Sprint[ScrumEvent:SprintReview].
4. Repeat[cadence]

Scrum is simple.
Try it[Scrum] as is and determine if its philosophy, theory, and structure help to achieve goals[Commitments:ProductGoal,Commitments:SprintGoal] and create value.
The Scrum framework[ScrumFramework] is purposefully incomplete, only defining the parts required to implement Scrum theory.
Scrum is built upon by the collective intelligence of the people using it.
Rather than provide people with detailed instructions, the rules of Scrum guide their relationships and interactions.

Various processes, techniques and methods can be employed within the framework[ScrumFramework].
Scrum wraps around existing practices or renders them unnecessary.
Scrum makes visible[ScrumPillars:Transparency] the relative efficacy of current management, environment, and work techniques, so that improvements[ScrumPillars:Adaptation] can be made.

# Scrum Theory

Scrum is founded on empiricism and lean thinking.
Empiricism asserts that knowledge comes from experience and making decisions based on what is observed.
Lean thinking reduces waste and focuses[ScrumValues:Focus] on the essentials.

Scrum employs an iterative, incremental[ScrumPillars:Adaptation] approach to optimize predictability and to control risk.
Scrum engages groups of people[ScrumTeam] who collectively have all the skills and expertise to do the work and share or acquire such skills as needed[learn].[selfManagement]

Scrum combines four formal events[ScrumEvents:SprintPlanning,ScrumEvents:DailyScrum,ScrumEvents:SprintReview,ScrumEvents:SprintRetrospective] for inspection and adaptation[ScrumPillars:Adaption], within a containing event[ScrumEvents:Sprint], the Sprint.
These events[ScrumEvents] work because they implement the empirical Scrum pillars of transparency[ScrumPillars:Transparency], inspection, and adaptation[ScrumPillars:Adaption].

## Transparency[ScrumPillars:Transparency]

The emergent process and work must be visible[ScrumPillars:Transparency] to those performing the work[ScrumTeam:Developers] as well as those receiving the work[Stakeholders].
With Scrum, important decisions are based on the perceived state of its three formal artifacts[ScrumArtifacts].
Artifacts[ScrumArtifacts] that have low transparency[ScrumPillars:Transparency] can lead to decisions that diminish value and increase risk.
Transparency[ScrumPillars:Transparency] enables inspection.
Inspection without transparency[ScrumPillars:Transparency] is misleading and wasteful.

## Inspection[ScrumPillars:Inspection]

The Scrum artifacts[ScrumArtifacts] and the progress toward agreed goals[Commitments:ProductGoal,Commitments:SprintGoal] must be inspected[ScrumPillars:Inspection] frequently and diligently to detect potentially undesirable variances or problems.
To help with inspection, Scrum provides cadence in the form of its five events[ScrumEvents].

Inspection enables adaptation[ScrumPillars:Adaption].
Inspection without adaptation[ScrumPillars:Adaption] is considered pointless[ScrumValues:Courage].
Scrum events[ScrumEvents] are designed to provoke change[ScrumPillars:Adaption].

## Adaptation[ScrumPillars]

If any aspects of a process deviate outside acceptable limits or if the resulting product is unacceptable[DefinitionOfDone], the process being applied[ScrumEvents] or the materials being produced[ScrumArtifacts] must be adjusted[ScrumPillars:Adaption].
The adjustment[ScrumPillars:Adaption] must be made as soon as possible to minimize further deviation.

Adaptation[ScrumPillars:Adaption] becomes more difficult when the people involved are not empowered or self-managing[selfManagement].
A Scrum Team[ScrumTeam] is expected to adapt[ScrumPillars:Adaption] the moment it learns anything new through inspection.

# Scrum Values[ScrumValues]

Successful use of Scrum depends on people becoming more proficient in living five values[ScrumValues]:

**Commitment, Focus, Openness, Respect, and Courage**[ScrumValues]

The Scrum Team[ScrumTeam] commits[ScrumValues:Commitment] to achieving its goals[Commitments:ProductGoal,Commitments:SprintGoal] and to supporting each other.
Their primary focus[ScrumValues:Focus] is on the work of the Sprint to make the best possible progress toward these goals[Commitments:ProductGoal,Commitments:SprintGoal].
The Scrum Team[ScrumTeam] and its stakeholders are open[ScrumValues:Openness] about the work and the challenges.
Scrum Team[ScrumTeam] members respect[ScrumValues:Respect] each other to be capable, independent people, and are respected[ScrumValues:Respect] as such by the people with whom they work.
The Scrum Team[ScrumTeam] members have the courage[ScrumValues:Courage] to do the right thing, to work on tough problems.

These values[Commitment,Focus,Openness,Respect,Courage] give direction to the Scrum Team[ScrumTeam] with regard to their work, actions, and behavior.
The decisions that are made, the steps taken, and the way Scrum is used should reinforce these values[Commitment,Focus,Openness,Respect,Courage], not diminish or undermine them.
The Scrum Team[ScrumTeam] members learn and explore the values[Commitment,Focus,Openness,Respect,Courage] as they work with the Scrum events[ScrumEvents] and artifacts[ScrumArtifacts].
When these values[Commitment,Focus,Openness,Respect,Courage] are embodied by the Scrum Team and the people they work with, the empirical Scrum pillars of transparency[ScrumPillars:Transparency], inspection, and adaptation come to life building trust.

# Scrum Team[ScrumTeam]

The fundamental unit of Scrum is a small team[ScrumTeam] of people, a Scrum Team[ScrumTeam].
The Scrum Team[ScrumTeam] consists of one Scrum Master[ScrumTeam:ScrumMaster], one Product Owner[ScrumTeam:ProductOwner], and Developers[ScrumTeam:Developers].
Within a Scrum Team[ScrumTeam], there are no sub-teams or hierarchies.
It[ScrumTeam] is a cohesive unit of professionals focused[ScrumValues:Focus] on one objective at a time, the Product Goal[Commitments:ProductGoal].

Scrum Teams[ScrumTeam] are cross-functional, meaning the members have all the skills necessary to create value each Sprint.
They[ScrumTeam] are also self-managing[selfManagement], meaning they internally decide who does what, when, and how.

The Scrum Team[ScrumTeam] is small enough to remain nimble and large enough to complete significant work within a Sprint, typically 10 or fewer people.
In general, we have found that smaller teams[ScrumTeam] communicate better and are more productive.
If Scrum Teams[ScrumTeam] become too large, they should consider reorganizing into multiple cohesive Scrum Teams[ScrumTeam], each focused[ScrumValues:Focus] on the same product.
Therefore, they[ScrumTeam] should share the same Product Goal[Commitments:ProductGoal], Product Backlog[ScrumArtefact:ProductBacklog], and Product Owner[ScrumTeam:ProductOwner].

The Scrum Team[ScrumTeam] is responsible[Responsible] for all product-related activities from stakeholder collaboration, verification, maintenance, operation, experimentation, research and development, and anything else that might be required.
They[ScrumTeam] are structured and empowered by the organization to manage their[ScrumTeam] own work.
Working in Sprints at a sustainable pace improves[ScrumPillars:Adaption] the Scrum Team’s[ScrumTeam] focus[ScrumValues:Focus] and consistency[ReduceComplexity].

The entire Scrum Team[ScrumTeam] is accountable[ScrumTeam:Accountable] for creating a valuable, useful Increment[ScrumArtifacts] every Sprint.
Scrum defines three specific accountabilities[Accountable] within the Scrum Team[ScrumTeam]: the Developers[ScrumTeam:Developers], the Product Owner[ScrumTeam:ProductOwner], and the Scrum Master[ScrumTeam:ScrumMaster].

## Developers[ScrumTeam:Developers]

Developers[ScrumTeam:Developers] are the people in the Scrum Team[ScrumTeam] that are committed[ScrumValues:Commitment] to creating any aspect of a usable Increment[ScrumArtifacts] each Sprint.

The specific skills needed by the Developers[ScrumTeam:Developers] are often broad and will vary with the domain of work.
However, the Developers[ScrumTeam:Developers] are always accountable[ScrumTeam:Developers:Accountable] for:

- Creating a plan for the Sprint, the Sprint Backlog;[ScrumTeam:Developers:Accountable]
- Instilling quality by adhering to a Definition of Done[Commitments:DefinitionOfDone];[ScrumTeam:Developers:Accountable]
- Adapting[ScrumPillars:Adaption] their plan each day toward the Sprint Goal[Commitments:SprintGoal]; and,[ScrumTeam:Developers:Accountable]
- Holding each other accountable as professionals.[ScrumTeam:Developers:Accountable]

## Product Owner[ScrumTeam:ProductOwner]

The Product Owner[ScrumTeam:ProductOwner] is accountable[Accountable] for maximizing the value of the product resulting from the work of the Scrum Team[ScrumTeam].
How this is done may vary widely across organizations, Scrum Teams[ScrumTeam], and individuals.

The Product Owner[ScrumTeam:ProductOwner] is also accountable[Accountable] for effective Product Backlog[ScrumArtefact:ProductBacklog] management, which includes:

- Developing and explicitly communicating the Product Goal[Commitments:ProductGoal];[ProductOwner,Accountable]
- Creating and clearly communicating Product Backlog[ScrumArtefact:ProductBacklog] items[ProductBacklogItem];[ProductOwner,Accountable]
- Ordering Product Backlog[ScrumArtefact:ProductBacklog] items[ProductBacklogItem]; and,[ProductOwner,Accountable]
- Ensuring that the Product Backlog[ScrumArtefact:ProductBacklog] is transparent[ScrumPillars:Transparency], visible[ScrumPillars:Transparency] and understood.[ProductOwner,Accountable]

The Product Owner[ScrumTeam:ProductOwner] may do the above work or may delegate the responsibility[ProductOwner:Responsible] to others.
Regardless, the Product Owner[ScrumTeam:ProductOwner] remains accountable.[Accountable]

For Product Owners[ScrumTeam:ProductOwner] to succeed, the entire organization must respect[ScrumValues:Respect] their decisions.
These decisions are visible[ScrumPillars:Transparency] in the content and ordering of the Product Backlog[ScrumArtefact:ProductBacklog], and through the inspectable[ScrumPillars:Inspection] Increment[ScrumArtifacts] at the Sprint Review.

The Product Owner[ScrumTeam:ProductOwner] is one person, not a committee.
The Product Owner[ScrumTeam:ProductOwner] may represent the needs of many stakeholders in the Product Backlog[ScrumArtefact:ProductBacklog].
Those wanting to change the Product Backlog[ScrumArtefact:ProductBacklog] can do so by trying to convince the Product Owner[ScrumTeam:ProductOwner].

## Scrum Master[ScrumTeam:ScrumMaster]

The Scrum Master[ScrumTeam:ScrumMaster] is accountable[ScrumTeam:ScrumMaster:Accountable] for establishing Scrum as defined in the Scrum Guide.
They do this by helping everyone understand Scrum theory and practice, both within the Scrum Team[ScrumTeam] and the organization.

The Scrum Master[ScrumTeam:ScrumMaster] is accountable[ScrumTeam:ScrumMaster:Accountable] for the Scrum Team’s[ScrumTeam] effectiveness.
They do this by enabling the Scrum Team[ScrumTeam] to improve[ScrumPillars:Adaption] its practices, within the Scrum framework[ScrumFramework].

Scrum Masters[ScrumTeam:ScrumMaster] are true leaders who serve the Scrum Team[ScrumTeam] and the larger organization.

The Scrum Master[ScrumTeam:ScrumMaster] serves[ScrumTeam:ScrumMaster:Serve] the Scrum Team[ScrumTeam] in several ways, including:

- Coaching the team members in self-management[selfManagement] and cross-functionality;[ScrumTeam:ScrumMaster:Serve]
- Helping the Scrum Team[ScrumTeam] focus[ScrumValues:Focus] on creating high-value Increments[ScrumTeam:ScrumMaster:Serve][ScrumArtifacts] that meet the Definition of Done[Commitments:DefinitionOfDone];
- Causing the removal of impediments to the Scrum Team’s[ScrumTeam] progress; and,[ScrumTeam:ScrumMaster:Serve]
- Ensuring that all Scrum events[ScrumEvents] take place and are positive, productive, and kept within the timebox[timebox].[ScrumTeam:ScrumMaster:Serve]

The Scrum Master[ScrumTeam:ScrumMaster] serves[ScrumTeam:ScrumMaster:Serve] the Product Owner[ScrumTeam:ProductOwner] in several ways, including:

- Helping find techniques for effective Product Goal[Commitments:ProductGoal] definition and Product Backlog[ScrumArtefact:ProductBacklog] management;[ScrumTeam:ScrumMaster:Serve]
- Helping the Scrum Team[ScrumTeam] understand the need for clear and concise Product Backlog[ScrumArtefact:ProductBacklog] items[ProductBacklogItem];[ScrumTeam:ScrumMaster:Serve]
- Helping establish empirical product planning for a complex environment; and,[ScrumTeam:ScrumMaster:Serve]
- Facilitating stakeholder collaboration as requested or needed.[ScrumTeam:ScrumMaster:Serve]

The Scrum Master[ScrumTeam:ScrumMaster] serves[ScrumTeam:ScrumMaster:Serve] the organization in several ways, including:

- Leading, training, and coaching the organization in its Scrum adoption;[ScrumTeam:ScrumMaster:Serve]
- Planning and advising Scrum implementations within the organization;[ScrumTeam:ScrumMaster:Serve]
- Helping employees and stakeholders understand and enact an empirical approach for complex work; and,[ScrumTeam:ScrumMaster:Serve]
- Removing barriers between stakeholders and Scrum Teams[ScrumTeam].[ScrumTeam:ScrumMaster:Serve]

# Scrum Events[ScrumEvents]

The Sprint is a container for all other events[ScrumEvents].
Each event[ScrumEvents] in Scrum is a formal opportunity to inspect[ScrumPillars:Inspection] and adapt[ScrumPillars:Adaption] Scrum artifacts[ScrumArtifacts].
These events[ScrumEvents] are specifically designed to enable the transparency[ScrumPillars:Transparency] required.
Failure to operate any events[ScrumEvents] as prescribed results in lost opportunities to inspect[ScrumPillars:Inspection] and adapt[ScrumPillars:Adaption].
Events[ScrumEvents] are used in Scrum to create regularity and to minimize the need for meetings not defined in Scrum[extendScrum].
Optimally, all events[ScrumEvents] are held at the same time and place to reduce complexity[ReduceComplexity].

## The Sprint

Sprints are the heartbeat of Scrum, where ideas are turned into value.

They are fixed length[timebox] events[Sprint] of one month[timebox] or less to create consistency[ReduceComplexity].
A new Sprint starts immediately after the conclusion of the previous Sprint.

All the work necessary to achieve the Product Goal[Commitments:ProductGoal], including Sprint Planning, Daily Scrums, Sprint Review, and Sprint Retrospective[ScrumEvents:SprintRetrospective], happen within Sprints.

During the Sprint:

- No changes are made that would endanger the Sprint Goal[Commitments:SprintGoal];
- Quality does not decrease;
- The Product Backlog[ScrumArtefact:ProductBacklog] is refined as needed; and,
- Scope may be clarified and renegotiated with the Product Owner[ScrumTeam:ProductOwner] as more is learned.

Sprints enable predictability by ensuring inspection and adaptation of progress toward a Product Goal[Commitments:ProductGoal] at least every calendar month[timebox].
When a Sprint’s horizon is too long[timebox] the Sprint Goal[Commitments:SprintGoal] may become invalid, complexity may rise[ReduceComplexity], and risk may increase.
Shorter Sprints can be employed to generate more learning cycles[cadence] and limit risk of cost and effort to a smaller time frame[timebox].
Each Sprint may be considered a short project.

Various practices exist to forecast[Forecast] progress, like burn-downs[extendScrum], burn-ups[extendScrum], or cumulative flows[extendScrum].
While proven useful, these do not replace the importance of empiricism.
In complex environments, what will happen is unknown.
Only what has already happened may be used for forward-looking decision making.

A Sprint could be cancelled if the Sprint Goal becomes obsolete.
Only the Product Owner[ScrumTeam:ProductOwner] has the authority to cancel the Sprint[ProductOwner:Responsible].

## Sprint Planning

Sprint Planning initiates the Sprint by laying out the work to be performed for the Sprint.
This resulting plan is created by the collaborative work of the entire Scrum Team[ScrumTeam].

The Product Owner[ScrumTeam:ProductOwner] ensures that attendees are prepared to discuss the most important Product Backlog[ScrumArtefact:ProductBacklog] items[ProductBacklogItem] and how they map to the Product Goal[Commitments:ProductGoal].
The Scrum Team[ScrumTeam] may also invite other people to attend Sprint Planning to provide advice.

Sprint Planning addresses the following topics:

**Topic One: Why is this Sprint valuable?**

The Product Owner[ScrumTeam:ProductOwner] proposes how the product could increase its value and utility in the current Sprint.
The whole Scrum Team[ScrumTeam] then collaborates to define a Sprint Goal[Commitments:SprintGoal] that communicates why the Sprint is valuable to stakeholders.
The Sprint Goal[Commitments:SprintGoal] must be finalized prior to the end of Sprint Planning.

**Topic Two: What can be Done this Sprint?**

Through discussion with the Product Owner[ScrumTeam:ProductOwner], the Developers[ScrumTeam:Developers] select items[ProductBacklogItem] from the Product Backlog[ScrumArtefact:ProductBacklog] to include in the current Sprint.
The Scrum Team[ScrumTeam] may refine[ProductBacklogRefinement] these items[ProductBacklogItem] during this process, which increases understanding and confidence.

Selecting how much can be completed within a Sprint may be challenging.
However, the more the Developers[ScrumTeam:Developers] know about their past performance, their upcoming capacity, and their Definition of Done[Commitments:DefinitionOfDone], the more confident they will be in their Sprint forecasts[Forecast].

**Topic Three: How will the chosen work get done?**

For each selected Product Backlog[ScrumArtefact:ProductBacklog] item[ProductBacklogItem], the Developers[ScrumTeam:Developers] plan the work necessary to create an Increment[ScrumArtifacts] that meets the Definition of Done[Commitments:DefinitionOfDone].
This is often done by decomposing Product Backlog[ScrumArtefact:ProductBacklog] items[ProductBacklogItem] into smaller work items[WorkItem] of one day[timebox] or less.
How this is done is at the sole discretion of the Developers[ScrumTeam:Developers].
No one else tells them how to turn Product Backlog[ScrumArtefact:ProductBacklog] items[ProductBacklogItem] into Increments[ScrumArtifacts] of value.

The Sprint Goal[Commitments:SprintGoal], the Product Backlog[ScrumArtefact:ProductBacklog] items[ProductBacklogItem] selected for the Sprint, plus the plan for delivering[ScrumArtifacts:Increment] them are together referred to as the Sprint Backlog.

Sprint Planning is timeboxed[timebox] to a maximum of eight hours[timebox] for a one-month Sprint.
For shorter Sprints, the event is usually shorter.

## Daily Scrum

The purpose of the Daily Scrum is to inspect[ScrumPillars:Inspection] progress toward the Sprint Goal[Commitments:SprintGoal] and adapt[ScrumPillars:Adaption] the Sprint Backlog as necessary, adjusting[ScrumPillars:Adaption] the upcoming planned work.

The Daily Scrum is a 15-minute[timebox] event for the Developers[ScrumTeam:Developers] of the Scrum Team[ScrumTeam].
To reduce complexity[ReduceComplexity], it is held at the same time and place every working day of the Sprint.
If the Product Owner[ScrumTeam:ProductOwner] or Scrum Master[ScrumTeam:ScrumMaster] are actively working on items[ProductBacklogItem,WorkItem] in the Sprint Backlog, they participate as Developers[ScrumTeam:Developers].

The Developers[ScrumTeam:Developers] can select whatever structure and techniques they want, as long as their Daily Scrum focuses on progress toward the Sprint Goal[Commitments:SprintGoal] and produces an actionable plan for the next day of work.
This creates focus[ScrumValue:Focus] and improves[ScrumPillars:Adaption] self-management[selfManagement].

Daily Scrums improve[ScrumPillars:Adaption] communications, identify impediments, promote quick decision-making, and consequently eliminate the need for other meetings[extendScrum].

The Daily Scrum is not the only time Developers[ScrumTeam:Developers] are allowed to adjust[ScrumPillars:Adaption] their plan.
They often meet throughout the day for more detailed discussions about adapting[ScrumPillars:Adaption] or re-planning the rest of the Sprint’s work.

## Sprint Review

The purpose of the Sprint Review is to inspect[ScrumPillars:Inspection] the outcome of the Sprint and determine future adaptations.
The Scrum Team[ScrumTeam] presents the results of their work to key stakeholders and progress toward the Product Goal[Commitments:ProductGoal] is discussed.

During the event[SprintReview], the Scrum Team[ScrumTeam] and stakeholders review what was accomplished[Forecast] in the Sprint and what has changed[Adaption] in their environment.
Based on this information, attendees collaborate on what to do next.
The Product Backlog[ScrumArtefact:ProductBacklog] may also be adjusted[ScrumPillars:Adaption] to meet new opportunities.
The Sprint Review is a working session and the Scrum Team[ScrumTeam] should avoid limiting it to a presentation.

The Sprint Review is the second to last event of the Sprint and is timeboxed[timebox] to a maximum of four hours[timebox] for a one-month Sprint.
For shorter Sprints, the event is usually shorter.

## Sprint Retrospective[ScrumEvents:SprintRetrospective]

The purpose of the Sprint Retrospective[ScrumEvents:SprintRetrospective] is to plan ways to increase quality and effectiveness.

The Scrum Team[ScrumTeam] inspects[ScrumPillars:Inspection] how the last Sprint went with regards to individuals, interactions, processes, tools, and their Definition of Done[Commitments:DefinitionOfDone].
Inspected[ScrumPillars:Inspection] elements often vary with the domain of work.
Assumptions that led them astray are identified and their origins explored.
The Scrum Team[ScrumTeam] discusses what went well during the Sprint, what problems it encountered, and how those problems were (or were not) solved[ScrumValues:Courage].

The Scrum Team[ScrumTeam] identifies[ScrumPillars:Inspection] the most helpful changes to improve[ScrumPillars:Adaption] its effectiveness.
The most impactful improvements[ScrumPillars:Adaption] are addressed as soon as possible.
They may even be added to the Sprint Backlog for the next Sprint.

The Sprint Retrospective[ScrumEvents:SprintRetrospective] concludes the Sprint.
It[ScrumEvents:SprintRetrospective] is timeboxed[timebox] to a maximum of three hours[timebox] for a onemonth Sprint.
For shorter Sprints, the event is usually shorter.

# Scrum Artifacts[ScrumArtifacts]

Scrum’s artifacts[ScrumArtifacts] represent work or value.
They are designed to maximize transparency[ScrumPillars:Transparency] of key information.
Thus, everyone inspecting[ScrumPillars:Inspection] them has the same basis for adaptation.

Each artifact[ScrumArtifacts] contains a commitment[ScrumValues:Commitment] to ensure it provides information that enhances transparency[ScrumPillars:Transparency] and focus[ScrumValues:Focus] against which progress can be measured:

- For the Product Backlog[ScrumArtefact:ProductBacklog] it is the Product Goal[Commitments:ProductGoal].
- For the Sprint Backlog it is the Sprint Goal[Commitments:SprintGoal].
- For the Increment[ScrumArtifacts] it is the Definition of Done[Commitments:DefinitionOfDone].

These commitments[ScrumValues:Commitment,Commitments:ProductGoal,Commitments:SprintGoal,DefinitionOfDone] exist to reinforce empiricism and the Scrum values[ScrumValues] for the Scrum Team and their stakeholders.

## Product Backlog[ScrumArtefact:ProductBacklog]

The Product Backlog[ScrumArtefact:ProductBacklog] is an emergent, ordered list of what is needed to improve[ScrumPillars:Adaption] the product.
It[ProductBacklog] is the single source of work undertaken by the Scrum Team[ScrumTeam].

Product Backlog[ScrumArtefact:ProductBacklog] items that can be Done by the Scrum Team[ScrumTeam] within one Sprint are deemed ready for selection in a Sprint Planning event.
They usually acquire this degree of transparency[ScrumPillars:Transparency] after refining activities.
Product Backlog[ScrumArtefact:ProductBacklog] refinement[ProductBacklogRefinement] is the act of breaking down and further defining Product Backlog[ScrumArtefact:ProductBacklog] items[ProductBacklogItem] into smaller more precise items[ProductBacklogItems].
This[ProductBacklogRefinement] is an ongoing activity to add details, such as a description, order, and size.
Attributes often vary with the domain of work.

The Developers[ScrumTeam:Developers] who will be doing the work are responsible[ScrumTeam:Developers:Responsible] for the sizing.
The Product Owner[ScrumTeam:ProductOwner] may influence the Developers[ScrumTeam:Developers] by helping them understand and select trade-offs.

### Commitment[ScrumValues:Commitment]: Product Goal[Commitments:ProductGoal]

The Product Goal describes a future state of the product which can serve as a target for the Scrum Team[ScrumTeam] to plan against.
The Product Goal is in the Product Backlog[ScrumArtefact:ProductBacklog].
The rest of the Product Backlog[ScrumArtefact:ProductBacklog] emerges to define “what” will fulfill the Product Goal[Commitments:ProductGoal].

> A product is a vehicle to deliver value.
> It[product] has a clear boundary, known stakeholders, well-defined users or customers.
> A product could be a service, a physical product, or something more abstract.

The Product Goal[Commitments:ProductGoal] is the long-term objective[Commitments:ProductGoal] for the Scrum Team[ScrumTeam].
They[ScrumTeam] must fulfill (or abandon) one objective[Commitments:ProductGoal] before taking on the next[Commitments:ProductGoal].

## Sprint Backlog

The Sprint Backlog is composed of the Sprint Goal[Commitments:SprintGoal] (why), the set of Product Backlog[ScrumArtefact:ProductBacklog] items[ProductBacklogItem] selected for the Sprint (what), as well as an actionable plan[WorkItem] for delivering the Increment[ScrumArtifacts:Increment] (how).

The Sprint Backlog is a plan by and for the Developers[ScrumTeam:Developers].
It is a highly visible[ScrumPillars:Transparency], real-time picture of the work that the Developers[ScrumTeam:Developers] plan to accomplish[Forecast] during the Sprint in order to achieve the Sprint Goal[Commitments:SprintGoal].
Consequently, the Sprint Backlog is updated throughout the Sprint as more is learned.
It should have enough detail that they can inspect[ScrumPillars:Inspection] their progress in the Daily Scrum.

### Commitment[ScrumValues:Commitment]: Sprint Goal[Commitments:SprintGoal]

The Sprint Goal[Commitments:SprintGoal] is the single objective[Commitments:SprintGoal] for the Sprint.
Although the Sprint Goal[Commitments:SprintGoal] is a commitment[ScrumValues:Commitment] by the Developers[ScrumTeam:Developers], it provides flexibility in terms of the exact work needed to achieve it.
The Sprint Goal[Commitments:SprintGoal] also creates coherence and focus[ScrumValues:Focus], encouraging the Scrum Team[ScrumTeam] to work together rather than on separate initiatives.

The Sprint Goal[Commitments:SprintGoal] is created during the Sprint Planning event and then added to the Sprint Backlog.
As the Developers[ScrumTeam:Developers] work during the Sprint, they keep the Sprint Goal[Commitments:SprintGoal] in mind.
If the work turns out to be different than they expected, they collaborate with the Product Owner[ScrumTeam:ProductOwner] to negotiate the scope of the Sprint Backlog within the Sprint without affecting the Sprint Goal[Commitments:SprintGoal].

## Increment[ScrumArtifacts]

An Increment[ScrumArtifacts] is a concrete stepping stone toward the Product Goal[Commitments:ProductGoal].
Each Increment[ScrumArtifacts] is additive to all prior Increments[ScrumArtifacts] and thoroughly verified, ensuring that all Increments[ScrumArtifacts] work together.
In order to provide value, the Increment[ScrumArtifacts] must be usable.

Multiple Increments[ScrumArtifacts] may be created within a Sprint.
The sum of the Increments[ScrumArtifacts] is presented at the Sprint Review thus supporting empiricism.
However, an Increment[ScrumArtifacts] may be delivered to stakeholders prior to the end of the Sprint.
The Sprint Review should never be considered a gate to releasing[ScrumArtifacts:Increment] value.

Work cannot be considered part of an Increment[ScrumArtifacts] unless it meets the Definition of Done[Commitments:DefinitionOfDone].

### Commitment[ScrumValues:Commitment]: Definition of Done[Commitments:DefinitionOfDone]

The Definition of Done[Commitments:DefinitionOfDone] is a formal description of the state of the Increment[ScrumArtifacts] when it meets the quality measures required for the product.

The moment a Product Backlog[ScrumArtefact:ProductBacklog] item[ProductBacklogItem] meets the Definition of Done[Commitments:DefinitionOfDone], an Increment[ScrumArtifacts] is born.

The Definition of Done[Commitments:DefinitionOfDone] creates transparency[ScrumPillars:Transparency] by providing everyone a shared understanding of what work was completed as part of the Increment[ScrumArtifacts].
If a Product Backlog[ScrumArtefact:ProductBacklog] item[ProductBacklogItem] does not meet the Definition of Done[Commitments:DefinitionOfDone], it cannot be released[ScrumArtifacts:Increment] or even presented at the Sprint Review.
Instead, it returns to the Product Backlog[ScrumArtefact:ProductBacklog] for future consideration.

If the Definition of Done[Commitments:DefinitionOfDone] for an increment[ScrumArtifacts] is part of the standards of the organization, all Scrum Teams[ScrumTeam] must follow it as a minimum.
If it is not an organizational standard, the Scrum Team[ScrumTeam] must create a Definition of Done[Commitments:DefinitionOfDone] appropriate for the product.

The Developers[ScrumTeam:Developers] are required to conform to the Definition of Done[Commitments:DefinitionOfDone].
If there are multiple Scrum Teams[ScrumTeam] working together on a product, they must mutually define and comply with the same Definition of Done[Commitments:DefinitionOfDone].

# End Note

Scrum is free and offered in this Guide.
The Scrum framework[ScrumFramework], as outlined herein, is immutable.
While implementing only parts of Scrum is possible, the result is not Scrum.[extendScrum]
Scrum exists only in its entirety and functions well as a container for other techniques, methodologies, and practices[extendScrum].

# Copyright

© 2020 Ken Schwaber and Jeff Sutherland

This publication is offered for license under the Attribution Share-Alike license of Creative Commons, accessible at https://creativecommons.org/licenses/by-sa/4.0/legalcode and also described in summary form at https://creativecommons.org/licenses/by-sa/4.0/. By utilizing this Scrum Guide, you acknowledge and agree that you have read and agree to be bound by the terms of the Attribution Share-Alike license of Creative Commons.
`,dt=Object.freeze(Object.defineProperty({__proto__:null,Kanban_Guide_2020:Rt,Nexus_Guide_2021:Gt,Scrum_Guide_2017:Et,Scrum_Guide_2020:Mt},Symbol.toStringTag,{value:"Module"}));function qt(a){let e,n,r;return{c(){e=P("li"),this.h()},l(t){e=$(t,"LI",{class:!0});var i=A(e);i.forEach(m),this.h()},h(){_(e,"class","autocomplete-items svelte-1jxhqc6"),Ce(e,"autocomplete-active",a[1])},m(t,i){p(t,e,i),e.innerHTML=a[0],n||(r=me(e,"click",a[2]),n=!0)},p(t,[i]){i&1&&(e.innerHTML=t[0]),i&2&&Ce(e,"autocomplete-active",t[1])},i:V,o:V,d(t){t&&m(e),n=!1,r()}}}function Lt(a,e,n){let{itemLabel:r}=e,{highlighted:t}=e;function i(o){ht.call(this,a,o)}return a.$$set=o=>{"itemLabel"in o&&n(0,r=o.itemLabel),"highlighted"in o&&n(1,t=o.highlighted)},[r,t,i]}class Wt extends C{constructor(e){super(),O(this,e,Lt,qt,R,{itemLabel:0,highlighted:1})}}function Kt(){const{subscribe:a,set:e,update:n}=zt(new Set);return{subscribe:a,add:r=>n(t=>t.add(r)),reset:()=>e(new Set)}}const De=Kt();function qe(a,e,n){const r=a.slice();return r[12]=e[n],r[14]=n,r}function Le(a){let e,n,r=a[2],t=[];for(let o=0;o<r.length;o+=1)t[o]=We(qe(a,r,o));const i=o=>d(t[o],1,1,()=>{t[o]=null});return{c(){e=P("ul");for(let o=0;o<t.length;o+=1)t[o].c();this.h()},l(o){e=$(o,"UL",{id:!0,class:!0});var l=A(e);for(let s=0;s<t.length;s+=1)t[s].l(l);l.forEach(m),this.h()},h(){_(e,"id","autocomplete-items-list"),_(e,"class","svelte-edjm2e")},m(o,l){p(o,e,l);for(let s=0;s<t.length;s+=1)t[s].m(e,null);n=!0},p(o,l){if(l&44){r=o[2];let s;for(s=0;s<r.length;s+=1){const c=qe(o,r,s);t[s]?(t[s].p(c,l),h(t[s],1)):(t[s]=We(c),t[s].c(),h(t[s],1),t[s].m(e,null))}for(z(),s=r.length;s<t.length;s+=1)i(s);N()}},i(o){if(!n){for(let l=0;l<r.length;l+=1)h(t[l]);n=!0}},o(o){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);n=!1},d(o){o&&m(e),ae(t,o)}}}function We(a){let e,n;function r(){return a[9](a[12])}return e=new Wt({props:{itemLabel:a[12],highlighted:a[14]===a[3]}}),e.$on("click",r),{c(){x(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,i){D(e,t,i),n=!0},p(t,i){a=t;const o={};i&4&&(o.itemLabel=a[12]),i&8&&(o.highlighted=a[14]===a[3]),e.$set(o)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function Ft(a){let e,n,r,t,i,o,l,s=a[2].length>0&&Le(a);return{c(){e=P("form"),n=P("div"),r=P("input"),t=Y(),s&&s.c(),this.h()},l(c){e=$(c,"FORM",{autocomplete:!0});var u=A(e);n=$(u,"DIV",{class:!0});var f=A(n);r=$(f,"INPUT",{id:!0,type:!0,placeholder:!0,class:!0}),f.forEach(m),t=X(u),s&&s.l(u),u.forEach(m),this.h()},h(){_(r,"id","item-input"),_(r,"type","text"),_(r,"placeholder","Search Terms"),_(r,"class","svelte-edjm2e"),_(n,"class","autocomplete svelte-edjm2e"),_(e,"autocomplete","off")},m(c,u){p(c,e,u),oe(e,n),oe(n,r),a[7](r),Oe(r,a[0]),oe(e,t),s&&s.m(e,null),i=!0,o||(l=[me(window,"keydown",a[6]),me(r,"input",a[8]),me(r,"input",a[4])],o=!0)},p(c,[u]){u&1&&r.value!==c[0]&&Oe(r,c[0]),c[2].length>0?s?(s.p(c,u),u&4&&h(s,1)):(s=Le(c),s.c(),h(s,1),s.m(e,null)):s&&(z(),d(s,1,1,()=>{s=null}),N())},i(c){i||(h(s),i=!0)},o(c){d(s),i=!1},d(c){c&&m(e),a[7](null),s&&s.d(),o=!1,mt(l)}}}function jt(a){return a.replace(/<(.)*?>/g,"")}function Ht(a,e,n){let r;_t(a,De,y=>n(10,r=y));let{searchTerm:t=""}=e,i,o=[],l=null;function s(){let y=[];t&&r.forEach(M=>{M.toLowerCase().includes(t.toLowerCase())&&(y=[...y,u(M)])}),n(2,o=y)}function c(y){n(0,t=jt(y)),n(2,o=[]),n(3,l=null),document==null||document.querySelector("#item-input").focus()}function u(y){let M=y.substring(0,t.length),B=`<strong>${M}</strong>`;return y.replace(M,B)}function f(y){if(y.key==="ArrowDown"&&(l==null||l<=o.length-1))l===null?n(3,l=0):n(3,l+=1);else if(y.key==="ArrowUp"&&l!==null)l===0?n(3,l=o.length-1):n(3,l-=1);else if(y.key==="Enter")c(l===null?t:o[l]);else return}function w(y){ue[y?"unshift":"push"](()=>{i=y,n(1,i)})}function g(){t=this.value,n(0,t)}const G=y=>c(y);return a.$$set=y=>{"searchTerm"in y&&n(0,t=y.searchTerm)},a.$$.update=()=>{a.$$.dirty&1&&(t||(n(2,o=[]),n(3,l=null)))},[t,i,o,l,s,c,f,w,g,G]}class Vt extends C{constructor(e){super(),O(this,e,Ht,Ft,R,{searchTerm:0})}}function Zt(){const a=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||a(e)},xe(()=>{console.warn=a})}function Ke(a,e,n){const r=a.slice();return r[18]=e[n],r}function Fe(a,e,n){const r=a.slice();return r[18]=e[n],r}function je(a,e,n){const r=a.slice();return r[10]=e[n],r}function He(a,e,n){const r=a.slice();return r[13]=e[n],r[15]=n,r}function Ve(a,e,n){const r=a.slice();return r[16]=e[n],r[15]=n,r}function Ze(a,e,n){const r=a.slice();return r[7]=e[n],r}function Ut(a){let e,n,r,t;const i=[Xt,Yt,Jt],o=[];function l(s,c){return s[0]==="table"?0:s[0]==="list"?1:2}return e=l(a),n=o[e]=i[e](a),{c(){n.c(),r=k()},l(s){n.l(s),r=k()},m(s,c){o[e].m(s,c),p(s,r,c),t=!0},p(s,c){let u=e;e=l(s),e===u?o[e].p(s,c):(z(),d(o[u],1,1,()=>{o[u]=null}),N(),n=o[e],n?n.p(s,c):(n=o[e]=i[e](s),n.c()),h(n,1),n.m(r.parentNode,r))},i(s){t||(h(n),t=!0)},o(s){d(n),t=!1},d(s){o[e].d(s),s&&m(r)}}}function Qt(a){let e,n,r=a[1],t=[];for(let o=0;o<r.length;o+=1)t[o]=et(Ze(a,r,o));const i=o=>d(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=k()},l(o){for(let l=0;l<t.length;l+=1)t[l].l(o);e=k()},m(o,l){for(let s=0;s<t.length;s+=1)t[s].m(o,l);p(o,e,l),n=!0},p(o,l){if(l&34){r=o[1];let s;for(s=0;s<r.length;s+=1){const c=Ze(o,r,s);t[s]?(t[s].p(c,l),h(t[s],1)):(t[s]=et(c),t[s].c(),h(t[s],1),t[s].m(e.parentNode,e))}for(z(),s=r.length;s<t.length;s+=1)i(s);N()}},i(o){if(!n){for(let l=0;l<r.length;l+=1)h(t[l]);n=!0}},o(o){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);n=!1},d(o){ae(t,o),o&&m(e)}}}function Jt(a){let e,n,r;const t=[a[6]];var i=a[5][a[0]];function o(l){let s={$$slots:{default:[nn]},$$scope:{ctx:l}};for(let c=0;c<t.length;c+=1)s=le(s,t[c]);return{props:s}}return i&&(e=L(i,o(a))),{c(){e&&x(e.$$.fragment),n=k()},l(l){e&&q(e.$$.fragment,l),n=k()},m(l,s){e&&D(e,l,s),p(l,n,s),r=!0},p(l,s){const c=s&64?fe(t,[pe(l[6])]):{};if(s&8388706&&(c.$$scope={dirty:s,ctx:l}),i!==(i=l[5][l[0]])){if(e){z();const u=e;d(u.$$.fragment,1,0,()=>{I(u,1)}),N()}i?(e=L(i,o(l)),x(e.$$.fragment),h(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else i&&e.$set(c)},i(l){r||(e&&h(e.$$.fragment,l),r=!0)},o(l){e&&d(e.$$.fragment,l),r=!1},d(l){l&&m(n),e&&I(e,l)}}}function Yt(a){let e,n,r,t;const i=[on,rn],o=[];function l(s,c){return s[4]?0:1}return e=l(a),n=o[e]=i[e](a),{c(){n.c(),r=k()},l(s){n.l(s),r=k()},m(s,c){o[e].m(s,c),p(s,r,c),t=!0},p(s,c){let u=e;e=l(s),e===u?o[e].p(s,c):(z(),d(o[u],1,1,()=>{o[u]=null}),N(),n=o[e],n?n.p(s,c):(n=o[e]=i[e](s),n.c()),h(n,1),n.m(r.parentNode,r))},i(s){t||(h(n),t=!0)},o(s){d(n),t=!1},d(s){o[e].d(s),s&&m(r)}}}function Xt(a){let e,n,r;var t=a[5].table;function i(o){return{props:{$$slots:{default:[gn]},$$scope:{ctx:o}}}}return t&&(e=L(t,i(a))),{c(){e&&x(e.$$.fragment),n=k()},l(o){e&&q(e.$$.fragment,o),n=k()},m(o,l){e&&D(e,o,l),p(o,n,l),r=!0},p(o,l){const s={};if(l&8388716&&(s.$$scope={dirty:l,ctx:o}),t!==(t=o[5].table)){if(e){z();const c=e;d(c.$$.fragment,1,0,()=>{I(c,1)}),N()}t?(e=L(t,i(o)),x(e.$$.fragment),h(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else t&&e.$set(s)},i(o){r||(e&&h(e.$$.fragment,o),r=!0)},o(o){e&&d(e.$$.fragment,o),r=!1},d(o){o&&m(n),e&&I(e,o)}}}function en(a){let e=a[6].raw+"",n;return{c(){n=he(e)},l(r){n=de(r,e)},m(r,t){p(r,n,t)},p(r,t){t&64&&e!==(e=r[6].raw+"")&&ke(n,e)},i:V,o:V,d(r){r&&m(n)}}}function tn(a){let e,n;return e=new ce({props:{tokens:a[1],renderers:a[5]}}),{c(){x(e.$$.fragment)},l(r){q(e.$$.fragment,r)},m(r,t){D(e,r,t),n=!0},p(r,t){const i={};t&2&&(i.tokens=r[1]),t&32&&(i.renderers=r[5]),e.$set(i)},i(r){n||(h(e.$$.fragment,r),n=!0)},o(r){d(e.$$.fragment,r),n=!1},d(r){I(e,r)}}}function nn(a){let e,n,r,t;const i=[tn,en],o=[];function l(s,c){return s[1]?0:1}return e=l(a),n=o[e]=i[e](a),{c(){n.c(),r=k()},l(s){n.l(s),r=k()},m(s,c){o[e].m(s,c),p(s,r,c),t=!0},p(s,c){let u=e;e=l(s),e===u?o[e].p(s,c):(z(),d(o[u],1,1,()=>{o[u]=null}),N(),n=o[e],n?n.p(s,c):(n=o[e]=i[e](s),n.c()),h(n,1),n.m(r.parentNode,r))},i(s){t||(h(n),t=!0)},o(s){d(n),t=!1},d(s){o[e].d(s),s&&m(r)}}}function rn(a){let e,n,r;const t=[{ordered:a[4]},a[6]];var i=a[5].list;function o(l){let s={$$slots:{default:[sn]},$$scope:{ctx:l}};for(let c=0;c<t.length;c+=1)s=le(s,t[c]);return{props:s}}return i&&(e=L(i,o(a))),{c(){e&&x(e.$$.fragment),n=k()},l(l){e&&q(e.$$.fragment,l),n=k()},m(l,s){e&&D(e,l,s),p(l,n,s),r=!0},p(l,s){const c=s&80?fe(t,[s&16&&{ordered:l[4]},s&64&&pe(l[6])]):{};if(s&8388704&&(c.$$scope={dirty:s,ctx:l}),i!==(i=l[5].list)){if(e){z();const u=e;d(u.$$.fragment,1,0,()=>{I(u,1)}),N()}i?(e=L(i,o(l)),x(e.$$.fragment),h(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else i&&e.$set(c)},i(l){r||(e&&h(e.$$.fragment,l),r=!0)},o(l){e&&d(e.$$.fragment,l),r=!1},d(l){l&&m(n),e&&I(e,l)}}}function on(a){let e,n,r;const t=[{ordered:a[4]},a[6]];var i=a[5].list;function o(l){let s={$$slots:{default:[cn]},$$scope:{ctx:l}};for(let c=0;c<t.length;c+=1)s=le(s,t[c]);return{props:s}}return i&&(e=L(i,o(a))),{c(){e&&x(e.$$.fragment),n=k()},l(l){e&&q(e.$$.fragment,l),n=k()},m(l,s){e&&D(e,l,s),p(l,n,s),r=!0},p(l,s){const c=s&80?fe(t,[s&16&&{ordered:l[4]},s&64&&pe(l[6])]):{};if(s&8388704&&(c.$$scope={dirty:s,ctx:l}),i!==(i=l[5].list)){if(e){z();const u=e;d(u.$$.fragment,1,0,()=>{I(u,1)}),N()}i?(e=L(i,o(l)),x(e.$$.fragment),h(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else i&&e.$set(c)},i(l){r||(e&&h(e.$$.fragment,l),r=!0)},o(l){e&&d(e.$$.fragment,l),r=!1},d(l){l&&m(n),e&&I(e,l)}}}function an(a){let e,n,r;return e=new ce({props:{tokens:a[18].tokens,renderers:a[5]}}),{c(){x(e.$$.fragment),n=Y()},l(t){q(e.$$.fragment,t),n=X(t)},m(t,i){D(e,t,i),p(t,n,i),r=!0},p(t,i){const o={};i&64&&(o.tokens=t[18].tokens),i&32&&(o.renderers=t[5]),e.$set(o)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){d(e.$$.fragment,t),r=!1},d(t){I(e,t),t&&m(n)}}}function Ue(a){let e,n,r;const t=[a[18]];var i=a[5].unorderedlistitem||a[5].listitem;function o(l){let s={$$slots:{default:[an]},$$scope:{ctx:l}};for(let c=0;c<t.length;c+=1)s=le(s,t[c]);return{props:s}}return i&&(e=L(i,o(a))),{c(){e&&x(e.$$.fragment),n=k()},l(l){e&&q(e.$$.fragment,l),n=k()},m(l,s){e&&D(e,l,s),p(l,n,s),r=!0},p(l,s){const c=s&64?fe(t,[pe(l[18])]):{};if(s&8388704&&(c.$$scope={dirty:s,ctx:l}),i!==(i=l[5].unorderedlistitem||l[5].listitem)){if(e){z();const u=e;d(u.$$.fragment,1,0,()=>{I(u,1)}),N()}i?(e=L(i,o(l)),x(e.$$.fragment),h(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else i&&e.$set(c)},i(l){r||(e&&h(e.$$.fragment,l),r=!0)},o(l){e&&d(e.$$.fragment,l),r=!1},d(l){l&&m(n),e&&I(e,l)}}}function sn(a){let e,n,r=a[6].items,t=[];for(let o=0;o<r.length;o+=1)t[o]=Ue(Ke(a,r,o));const i=o=>d(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=k()},l(o){for(let l=0;l<t.length;l+=1)t[l].l(o);e=k()},m(o,l){for(let s=0;s<t.length;s+=1)t[s].m(o,l);p(o,e,l),n=!0},p(o,l){if(l&96){r=o[6].items;let s;for(s=0;s<r.length;s+=1){const c=Ke(o,r,s);t[s]?(t[s].p(c,l),h(t[s],1)):(t[s]=Ue(c),t[s].c(),h(t[s],1),t[s].m(e.parentNode,e))}for(z(),s=r.length;s<t.length;s+=1)i(s);N()}},i(o){if(!n){for(let l=0;l<r.length;l+=1)h(t[l]);n=!0}},o(o){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);n=!1},d(o){ae(t,o),o&&m(e)}}}function ln(a){let e,n,r;return e=new ce({props:{tokens:a[18].tokens,renderers:a[5]}}),{c(){x(e.$$.fragment),n=Y()},l(t){q(e.$$.fragment,t),n=X(t)},m(t,i){D(e,t,i),p(t,n,i),r=!0},p(t,i){const o={};i&64&&(o.tokens=t[18].tokens),i&32&&(o.renderers=t[5]),e.$set(o)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){d(e.$$.fragment,t),r=!1},d(t){I(e,t),t&&m(n)}}}function Qe(a){let e,n,r;const t=[a[18]];var i=a[5].orderedlistitem||a[5].listitem;function o(l){let s={$$slots:{default:[ln]},$$scope:{ctx:l}};for(let c=0;c<t.length;c+=1)s=le(s,t[c]);return{props:s}}return i&&(e=L(i,o(a))),{c(){e&&x(e.$$.fragment),n=k()},l(l){e&&q(e.$$.fragment,l),n=k()},m(l,s){e&&D(e,l,s),p(l,n,s),r=!0},p(l,s){const c=s&64?fe(t,[pe(l[18])]):{};if(s&8388704&&(c.$$scope={dirty:s,ctx:l}),i!==(i=l[5].orderedlistitem||l[5].listitem)){if(e){z();const u=e;d(u.$$.fragment,1,0,()=>{I(u,1)}),N()}i?(e=L(i,o(l)),x(e.$$.fragment),h(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else i&&e.$set(c)},i(l){r||(e&&h(e.$$.fragment,l),r=!0)},o(l){e&&d(e.$$.fragment,l),r=!1},d(l){l&&m(n),e&&I(e,l)}}}function cn(a){let e,n,r=a[6].items,t=[];for(let o=0;o<r.length;o+=1)t[o]=Qe(Fe(a,r,o));const i=o=>d(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=k()},l(o){for(let l=0;l<t.length;l+=1)t[l].l(o);e=k()},m(o,l){for(let s=0;s<t.length;s+=1)t[s].m(o,l);p(o,e,l),n=!0},p(o,l){if(l&96){r=o[6].items;let s;for(s=0;s<r.length;s+=1){const c=Fe(o,r,s);t[s]?(t[s].p(c,l),h(t[s],1)):(t[s]=Qe(c),t[s].c(),h(t[s],1),t[s].m(e.parentNode,e))}for(z(),s=r.length;s<t.length;s+=1)i(s);N()}},i(o){if(!n){for(let l=0;l<r.length;l+=1)h(t[l]);n=!0}},o(o){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);n=!1},d(o){ae(t,o),o&&m(e)}}}function un(a){let e,n,r;return e=new ce({props:{tokens:a[16].tokens,renderers:a[5]}}),{c(){x(e.$$.fragment),n=Y()},l(t){q(e.$$.fragment,t),n=X(t)},m(t,i){D(e,t,i),p(t,n,i),r=!0},p(t,i){const o={};i&4&&(o.tokens=t[16].tokens),i&32&&(o.renderers=t[5]),e.$set(o)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){d(e.$$.fragment,t),r=!1},d(t){I(e,t),t&&m(n)}}}function Je(a){let e,n,r;var t=a[5].tablecell;function i(o){return{props:{header:!0,align:o[6].align[o[15]]||"center",$$slots:{default:[un]},$$scope:{ctx:o}}}}return t&&(e=L(t,i(a))),{c(){e&&x(e.$$.fragment),n=k()},l(o){e&&q(e.$$.fragment,o),n=k()},m(o,l){e&&D(e,o,l),p(o,n,l),r=!0},p(o,l){const s={};if(l&64&&(s.align=o[6].align[o[15]]||"center"),l&8388644&&(s.$$scope={dirty:l,ctx:o}),t!==(t=o[5].tablecell)){if(e){z();const c=e;d(c.$$.fragment,1,0,()=>{I(c,1)}),N()}t?(e=L(t,i(o)),x(e.$$.fragment),h(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else t&&e.$set(s)},i(o){r||(e&&h(e.$$.fragment,o),r=!0)},o(o){e&&d(e.$$.fragment,o),r=!1},d(o){o&&m(n),e&&I(e,o)}}}function mn(a){let e,n,r=a[2],t=[];for(let o=0;o<r.length;o+=1)t[o]=Je(Ve(a,r,o));const i=o=>d(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=k()},l(o){for(let l=0;l<t.length;l+=1)t[l].l(o);e=k()},m(o,l){for(let s=0;s<t.length;s+=1)t[s].m(o,l);p(o,e,l),n=!0},p(o,l){if(l&100){r=o[2];let s;for(s=0;s<r.length;s+=1){const c=Ve(o,r,s);t[s]?(t[s].p(c,l),h(t[s],1)):(t[s]=Je(c),t[s].c(),h(t[s],1),t[s].m(e.parentNode,e))}for(z(),s=r.length;s<t.length;s+=1)i(s);N()}},i(o){if(!n){for(let l=0;l<r.length;l+=1)h(t[l]);n=!0}},o(o){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);n=!1},d(o){ae(t,o),o&&m(e)}}}function hn(a){let e,n,r;var t=a[5].tablerow;function i(o){return{props:{$$slots:{default:[mn]},$$scope:{ctx:o}}}}return t&&(e=L(t,i(a))),{c(){e&&x(e.$$.fragment),n=k()},l(o){e&&q(e.$$.fragment,o),n=k()},m(o,l){e&&D(e,o,l),p(o,n,l),r=!0},p(o,l){const s={};if(l&8388708&&(s.$$scope={dirty:l,ctx:o}),t!==(t=o[5].tablerow)){if(e){z();const c=e;d(c.$$.fragment,1,0,()=>{I(c,1)}),N()}t?(e=L(t,i(o)),x(e.$$.fragment),h(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else t&&e.$set(s)},i(o){r||(e&&h(e.$$.fragment,o),r=!0)},o(o){e&&d(e.$$.fragment,o),r=!1},d(o){o&&m(n),e&&I(e,o)}}}function dn(a){let e,n;return e=new ce({props:{tokens:a[13].tokens,renderers:a[5]}}),{c(){x(e.$$.fragment)},l(r){q(e.$$.fragment,r)},m(r,t){D(e,r,t),n=!0},p(r,t){const i={};t&8&&(i.tokens=r[13].tokens),t&32&&(i.renderers=r[5]),e.$set(i)},i(r){n||(h(e.$$.fragment,r),n=!0)},o(r){d(e.$$.fragment,r),n=!1},d(r){I(e,r)}}}function Ye(a){let e,n,r;var t=a[5].tablecell;function i(o){return{props:{header:!1,align:o[6].align[o[15]]||"center",$$slots:{default:[dn]},$$scope:{ctx:o}}}}return t&&(e=L(t,i(a))),{c(){e&&x(e.$$.fragment),n=k()},l(o){e&&q(e.$$.fragment,o),n=k()},m(o,l){e&&D(e,o,l),p(o,n,l),r=!0},p(o,l){const s={};if(l&64&&(s.align=o[6].align[o[15]]||"center"),l&8388648&&(s.$$scope={dirty:l,ctx:o}),t!==(t=o[5].tablecell)){if(e){z();const c=e;d(c.$$.fragment,1,0,()=>{I(c,1)}),N()}t?(e=L(t,i(o)),x(e.$$.fragment),h(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else t&&e.$set(s)},i(o){r||(e&&h(e.$$.fragment,o),r=!0)},o(o){e&&d(e.$$.fragment,o),r=!1},d(o){o&&m(n),e&&I(e,o)}}}function fn(a){let e,n,r=a[10],t=[];for(let o=0;o<r.length;o+=1)t[o]=Ye(He(a,r,o));const i=o=>d(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=Y()},l(o){for(let l=0;l<t.length;l+=1)t[l].l(o);e=X(o)},m(o,l){for(let s=0;s<t.length;s+=1)t[s].m(o,l);p(o,e,l),n=!0},p(o,l){if(l&104){r=o[10];let s;for(s=0;s<r.length;s+=1){const c=He(o,r,s);t[s]?(t[s].p(c,l),h(t[s],1)):(t[s]=Ye(c),t[s].c(),h(t[s],1),t[s].m(e.parentNode,e))}for(z(),s=r.length;s<t.length;s+=1)i(s);N()}},i(o){if(!n){for(let l=0;l<r.length;l+=1)h(t[l]);n=!0}},o(o){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);n=!1},d(o){ae(t,o),o&&m(e)}}}function Xe(a){let e,n,r;var t=a[5].tablerow;function i(o){return{props:{$$slots:{default:[fn]},$$scope:{ctx:o}}}}return t&&(e=L(t,i(a))),{c(){e&&x(e.$$.fragment),n=k()},l(o){e&&q(e.$$.fragment,o),n=k()},m(o,l){e&&D(e,o,l),p(o,n,l),r=!0},p(o,l){const s={};if(l&8388712&&(s.$$scope={dirty:l,ctx:o}),t!==(t=o[5].tablerow)){if(e){z();const c=e;d(c.$$.fragment,1,0,()=>{I(c,1)}),N()}t?(e=L(t,i(o)),x(e.$$.fragment),h(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else t&&e.$set(s)},i(o){r||(e&&h(e.$$.fragment,o),r=!0)},o(o){e&&d(e.$$.fragment,o),r=!1},d(o){o&&m(n),e&&I(e,o)}}}function pn(a){let e,n,r=a[3],t=[];for(let o=0;o<r.length;o+=1)t[o]=Xe(je(a,r,o));const i=o=>d(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=k()},l(o){for(let l=0;l<t.length;l+=1)t[l].l(o);e=k()},m(o,l){for(let s=0;s<t.length;s+=1)t[s].m(o,l);p(o,e,l),n=!0},p(o,l){if(l&104){r=o[3];let s;for(s=0;s<r.length;s+=1){const c=je(o,r,s);t[s]?(t[s].p(c,l),h(t[s],1)):(t[s]=Xe(c),t[s].c(),h(t[s],1),t[s].m(e.parentNode,e))}for(z(),s=r.length;s<t.length;s+=1)i(s);N()}},i(o){if(!n){for(let l=0;l<r.length;l+=1)h(t[l]);n=!0}},o(o){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);n=!1},d(o){ae(t,o),o&&m(e)}}}function gn(a){let e,n,r,t,i;var o=a[5].tablehead;function l(u){return{props:{$$slots:{default:[hn]},$$scope:{ctx:u}}}}o&&(e=L(o,l(a)));var s=a[5].tablebody;function c(u){return{props:{$$slots:{default:[pn]},$$scope:{ctx:u}}}}return s&&(r=L(s,c(a))),{c(){e&&x(e.$$.fragment),n=Y(),r&&x(r.$$.fragment),t=k()},l(u){e&&q(e.$$.fragment,u),n=X(u),r&&q(r.$$.fragment,u),t=k()},m(u,f){e&&D(e,u,f),p(u,n,f),r&&D(r,u,f),p(u,t,f),i=!0},p(u,f){const w={};if(f&8388708&&(w.$$scope={dirty:f,ctx:u}),o!==(o=u[5].tablehead)){if(e){z();const G=e;d(G.$$.fragment,1,0,()=>{I(G,1)}),N()}o?(e=L(o,l(u)),x(e.$$.fragment),h(e.$$.fragment,1),D(e,n.parentNode,n)):e=null}else o&&e.$set(w);const g={};if(f&8388712&&(g.$$scope={dirty:f,ctx:u}),s!==(s=u[5].tablebody)){if(r){z();const G=r;d(G.$$.fragment,1,0,()=>{I(G,1)}),N()}s?(r=L(s,c(u)),x(r.$$.fragment),h(r.$$.fragment,1),D(r,t.parentNode,t)):r=null}else s&&r.$set(g)},i(u){i||(e&&h(e.$$.fragment,u),r&&h(r.$$.fragment,u),i=!0)},o(u){e&&d(e.$$.fragment,u),r&&d(r.$$.fragment,u),i=!1},d(u){e&&I(e,u),u&&m(n),u&&m(t),r&&I(r,u)}}}function et(a){let e,n;const r=[a[7],{renderers:a[5]}];let t={};for(let i=0;i<r.length;i+=1)t=le(t,r[i]);return e=new ce({props:t}),{c(){x(e.$$.fragment)},l(i){q(e.$$.fragment,i)},m(i,o){D(e,i,o),n=!0},p(i,o){const l=o&34?fe(r,[o&2&&pe(i[7]),o&32&&{renderers:i[5]}]):{};e.$set(l)},i(i){n||(h(e.$$.fragment,i),n=!0)},o(i){d(e.$$.fragment,i),n=!1},d(i){I(e,i)}}}function Sn(a){let e,n,r,t;const i=[Qt,Ut],o=[];function l(s,c){return s[0]?s[5][s[0]]?1:-1:0}return~(e=l(a))&&(n=o[e]=i[e](a)),{c(){n&&n.c(),r=k()},l(s){n&&n.l(s),r=k()},m(s,c){~e&&o[e].m(s,c),p(s,r,c),t=!0},p(s,[c]){let u=e;e=l(s),e===u?~e&&o[e].p(s,c):(n&&(z(),d(o[u],1,1,()=>{o[u]=null}),N()),~e?(n=o[e],n?n.p(s,c):(n=o[e]=i[e](s),n.c()),h(n,1),n.m(r.parentNode,r)):n=null)},i(s){t||(h(n),t=!0)},o(s){d(n),t=!1},d(s){~e&&o[e].d(s),s&&m(r)}}}function wn(a,e,n){const r=["type","tokens","header","rows","ordered","renderers"];let t=Re(e,r),{type:i=void 0}=e,{tokens:o=void 0}=e,{header:l=void 0}=e,{rows:s=void 0}=e,{ordered:c=!1}=e,{renderers:u}=e;return Zt(),a.$$set=f=>{e=le(le({},e),Pt(f)),n(6,t=Re(e,r)),"type"in f&&n(0,i=f.type),"tokens"in f&&n(1,o=f.tokens),"header"in f&&n(2,l=f.header),"rows"in f&&n(3,s=f.rows),"ordered"in f&&n(4,c=f.ordered),"renderers"in f&&n(5,u=f.renderers)},[i,o,l,s,c,u,t]}let ce=class extends C{constructor(e){super(),O(this,e,wn,Sn,R,{type:0,tokens:1,header:2,rows:3,ordered:4,renderers:5})}};function ft(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let ge=ft();function bn(a){ge=a}const pt=/[&<>"']/,kn=new RegExp(pt.source,"g"),gt=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,vn=new RegExp(gt.source,"g"),yn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},tt=a=>yn[a];function U(a,e){if(e){if(pt.test(a))return a.replace(kn,tt)}else if(gt.test(a))return a.replace(vn,tt);return a}const Tn=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function St(a){return a.replace(Tn,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const _n=/(^|[^\[])\^/g;function E(a,e){a=typeof a=="string"?a:a.source,e=e||"";const n={replace:(r,t)=>(t=t.source||t,t=t.replace(_n,"$1"),a=a.replace(r,t),n),getRegex:()=>new RegExp(a,e)};return n}const Pn=/[^\w:]/g,$n=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function nt(a,e,n){if(a){let r;try{r=decodeURIComponent(St(n)).replace(Pn,"").toLowerCase()}catch{return null}if(r.indexOf("javascript:")===0||r.indexOf("vbscript:")===0||r.indexOf("data:")===0)return null}e&&!$n.test(n)&&(n=An(e,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const ye={},xn=/^[^:]+:\/*[^/]*$/,Dn=/^([^:]+:)[\s\S]*$/,In=/^([^:]+:\/*[^/]*)[\s\S]*$/;function An(a,e){ye[" "+a]||(xn.test(a)?ye[" "+a]=a+"/":ye[" "+a]=Te(a,"/",!0)),a=ye[" "+a];const n=a.indexOf(":")===-1;return e.substring(0,2)==="//"?n?e:a.replace(Dn,"$1")+e:e.charAt(0)==="/"?n?e:a.replace(In,"$1")+e:a+e}const _e={exec:function(){}};function ne(a){let e=1,n,r;for(;e<arguments.length;e++){n=arguments[e];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(a[r]=n[r])}return a}function rt(a,e){const n=a.replace(/\|/g,(i,o,l)=>{let s=!1,c=o;for(;--c>=0&&l[c]==="\\";)s=!s;return s?"|":" |"}),r=n.split(/ \|/);let t=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;t<r.length;t++)r[t]=r[t].trim().replace(/\\\|/g,"|");return r}function Te(a,e,n){const r=a.length;if(r===0)return"";let t=0;for(;t<r;){const i=a.charAt(r-t-1);if(i===e&&!n)t++;else if(i!==e&&n)t++;else break}return a.slice(0,r-t)}function Bn(a,e){if(a.indexOf(e[1])===-1)return-1;const n=a.length;let r=0,t=0;for(;t<n;t++)if(a[t]==="\\")t++;else if(a[t]===e[0])r++;else if(a[t]===e[1]&&(r--,r<0))return t;return-1}function wt(a){a&&a.sanitize&&!a.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function it(a,e){if(e<1)return"";let n="";for(;e>1;)e&1&&(n+=a),e>>=1,a+=a;return n+a}function ot(a,e,n,r){const t=e.href,i=e.title?U(e.title):null,o=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){r.state.inLink=!0;const l={type:"link",raw:n,href:t,title:i,text:o,tokens:r.inlineTokens(o)};return r.state.inLink=!1,l}return{type:"image",raw:n,href:t,title:i,text:U(o)}}function zn(a,e){const n=a.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(t=>{const i=t.match(/^\s+/);if(i===null)return t;const[o]=i;return o.length>=r.length?t.slice(r.length):t}).join(`
`)}class Ie{constructor(e){this.options=e||ge}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Te(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],t=zn(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline._escapes,"$1"):n[2],text:t}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const t=Te(r,"#");(this.options.pedantic||!t||/ $/.test(t))&&(r=t.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){const r=n[0].replace(/^ *>[ \t]?/gm,""),t=this.lexer.state.top;this.lexer.state.top=!0;const i=this.lexer.blockTokens(r);return this.lexer.state.top=t,{type:"blockquote",raw:n[0],tokens:i,text:r}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r,t,i,o,l,s,c,u,f,w,g,G,y=n[1].trim();const M=y.length>1,B={type:"list",raw:"",ordered:M,start:M?+y.slice(0,-1):"",loose:!1,items:[]};y=M?`\\d{1,9}\\${y.slice(-1)}`:`\\${y}`,this.options.pedantic&&(y=M?y:"[*+-]");const H=new RegExp(`^( {0,3}${y})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(G=!1,!(!(n=H.exec(e))||this.rules.block.hr.test(e)));){if(r=n[0],e=e.substring(r.length),u=n[2].split(`
`,1)[0].replace(/^\t+/,te=>" ".repeat(3*te.length)),f=e.split(`
`,1)[0],this.options.pedantic?(o=2,g=u.trimLeft()):(o=n[2].search(/[^ ]/),o=o>4?1:o,g=u.slice(o),o+=n[1].length),s=!1,!u&&/^ *$/.test(f)&&(r+=f+`
`,e=e.substring(f.length+1),G=!0),!G){const te=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),Q=new RegExp(`^ {0,${Math.min(3,o-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),J=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:\`\`\`|~~~)`),se=new RegExp(`^ {0,${Math.min(3,o-1)}}#`);for(;e&&(w=e.split(`
`,1)[0],f=w,this.options.pedantic&&(f=f.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(J.test(f)||se.test(f)||te.test(f)||Q.test(e)));){if(f.search(/[^ ]/)>=o||!f.trim())g+=`
`+f.slice(o);else{if(s||u.search(/[^ ]/)>=4||J.test(u)||se.test(u)||Q.test(u))break;g+=`
`+f}!s&&!f.trim()&&(s=!0),r+=w+`
`,e=e.substring(w.length+1),u=f.slice(o)}}B.loose||(c?B.loose=!0:/\n *\n *$/.test(r)&&(c=!0)),this.options.gfm&&(t=/^\[[ xX]\] /.exec(g),t&&(i=t[0]!=="[ ] ",g=g.replace(/^\[[ xX]\] +/,""))),B.items.push({type:"list_item",raw:r,task:!!t,checked:i,loose:!1,text:g}),B.raw+=r}B.items[B.items.length-1].raw=r.trimRight(),B.items[B.items.length-1].text=g.trimRight(),B.raw=B.raw.trimRight();const ee=B.items.length;for(l=0;l<ee;l++)if(this.lexer.state.top=!1,B.items[l].tokens=this.lexer.blockTokens(B.items[l].text,[]),!B.loose){const te=B.items[l].tokens.filter(J=>J.type==="space"),Q=te.length>0&&te.some(J=>/\n.*\n/.test(J.raw));B.loose=Q}if(B.loose)for(l=0;l<ee;l++)B.items[l].loose=!0;return B}}html(e){const n=this.rules.block.html.exec(e);if(n){const r={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};if(this.options.sanitize){const t=this.options.sanitizer?this.options.sanitizer(n[0]):U(n[0]);r.type="paragraph",r.text=t,r.tokens=this.lexer.inline(t)}return r}}def(e){const n=this.rules.block.def.exec(e);if(n){const r=n[1].toLowerCase().replace(/\s+/g," "),t=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",i=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline._escapes,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:t,title:i}}}table(e){const n=this.rules.block.table.exec(e);if(n){const r={type:"table",header:rt(n[1]).map(t=>({text:t})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(r.header.length===r.align.length){r.raw=n[0];let t=r.align.length,i,o,l,s;for(i=0;i<t;i++)/^ *-+: *$/.test(r.align[i])?r.align[i]="right":/^ *:-+: *$/.test(r.align[i])?r.align[i]="center":/^ *:-+ *$/.test(r.align[i])?r.align[i]="left":r.align[i]=null;for(t=r.rows.length,i=0;i<t;i++)r.rows[i]=rt(r.rows[i],r.header.length).map(c=>({text:c}));for(t=r.header.length,o=0;o<t;o++)r.header[o].tokens=this.lexer.inline(r.header[o].text);for(t=r.rows.length,o=0;o<t;o++)for(s=r.rows[o],l=0;l<s.length;l++)s[l].tokens=this.lexer.inline(s[l].text);return r}}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:U(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):U(n[0]):n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const o=Te(r.slice(0,-1),"\\");if((r.length-o.length)%2===0)return}else{const o=Bn(n[2],"()");if(o>-1){const s=(n[0].indexOf("!")===0?5:4)+n[1].length+o;n[2]=n[2].substring(0,o),n[0]=n[0].substring(0,s).trim(),n[3]=""}}let t=n[2],i="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(t);o&&(t=o[1],i=o[3])}else i=n[3]?n[3].slice(1,-1):"";return t=t.trim(),/^</.test(t)&&(this.options.pedantic&&!/>$/.test(r)?t=t.slice(1):t=t.slice(1,-1)),ot(n,{href:t&&t.replace(this.rules.inline._escapes,"$1"),title:i&&i.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let t=(r[2]||r[1]).replace(/\s+/g," ");if(t=n[t.toLowerCase()],!t){const i=r[0].charAt(0);return{type:"text",raw:i,text:i}}return ot(r,t,r[0],this.lexer)}}emStrong(e,n,r=""){let t=this.rules.inline.emStrong.lDelim.exec(e);if(!t||t[3]&&r.match(/[\p{L}\p{N}]/u))return;const i=t[1]||t[2]||"";if(!i||i&&(r===""||this.rules.inline.punctuation.exec(r))){const o=t[0].length-1;let l,s,c=o,u=0;const f=t[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(f.lastIndex=0,n=n.slice(-1*e.length+o);(t=f.exec(n))!=null;){if(l=t[1]||t[2]||t[3]||t[4]||t[5]||t[6],!l)continue;if(s=l.length,t[3]||t[4]){c+=s;continue}else if((t[5]||t[6])&&o%3&&!((o+s)%3)){u+=s;continue}if(c-=s,c>0)continue;s=Math.min(s,s+c+u);const w=e.slice(0,o+t.index+(t[0].length-l.length)+s);if(Math.min(o,s)%2){const G=w.slice(1,-1);return{type:"em",raw:w,text:G,tokens:this.lexer.inlineTokens(G)}}const g=w.slice(2,-2);return{type:"strong",raw:w,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const t=/[^ ]/.test(r),i=/^ /.test(r)&&/ $/.test(r);return t&&i&&(r=r.substring(1,r.length-1)),r=U(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e,n){const r=this.rules.inline.autolink.exec(e);if(r){let t,i;return r[2]==="@"?(t=U(this.options.mangle?n(r[1]):r[1]),i="mailto:"+t):(t=U(r[1]),i=t),{type:"link",raw:r[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}url(e,n){let r;if(r=this.rules.inline.url.exec(e)){let t,i;if(r[2]==="@")t=U(this.options.mangle?n(r[0]):r[0]),i="mailto:"+t;else{let o;do o=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0];while(o!==r[0]);t=U(r[0]),r[1]==="www."?i="http://"+r[0]:i=r[0]}return{type:"link",raw:r[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(e,n){const r=this.rules.inline.text.exec(e);if(r){let t;return this.lexer.state.inRawBlock?t=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):U(r[0]):r[0]:t=U(this.options.smartypants?n(r[0]):r[0]),{type:"text",raw:r[0],text:t}}}}const v={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:_e,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};v._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;v._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;v.def=E(v.def).replace("label",v._label).replace("title",v._title).getRegex();v.bullet=/(?:[*+-]|\d{1,9}[.)])/;v.listItemStart=E(/^( *)(bull) */).replace("bull",v.bullet).getRegex();v.list=E(v.list).replace(/bull/g,v.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+v.def.source+")").getRegex();v._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";v._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;v.html=E(v.html,"i").replace("comment",v._comment).replace("tag",v._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();v.paragraph=E(v._paragraph).replace("hr",v.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v._tag).getRegex();v.blockquote=E(v.blockquote).replace("paragraph",v.paragraph).getRegex();v.normal=ne({},v);v.gfm=ne({},v.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});v.gfm.table=E(v.gfm.table).replace("hr",v.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v._tag).getRegex();v.gfm.paragraph=E(v._paragraph).replace("hr",v.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",v.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v._tag).getRegex();v.pedantic=ne({},v.normal,{html:E(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",v._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:_e,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:E(v.normal._paragraph).replace("hr",v.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",v.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const S={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:_e,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:_e,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};S._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";S.punctuation=E(S.punctuation).replace(/punctuation/g,S._punctuation).getRegex();S.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;S.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g;S._comment=E(v._comment).replace("(?:-->|$)","-->").getRegex();S.emStrong.lDelim=E(S.emStrong.lDelim).replace(/punct/g,S._punctuation).getRegex();S.emStrong.rDelimAst=E(S.emStrong.rDelimAst,"g").replace(/punct/g,S._punctuation).getRegex();S.emStrong.rDelimUnd=E(S.emStrong.rDelimUnd,"g").replace(/punct/g,S._punctuation).getRegex();S._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;S._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;S._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;S.autolink=E(S.autolink).replace("scheme",S._scheme).replace("email",S._email).getRegex();S._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;S.tag=E(S.tag).replace("comment",S._comment).replace("attribute",S._attribute).getRegex();S._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;S._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;S._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;S.link=E(S.link).replace("label",S._label).replace("href",S._href).replace("title",S._title).getRegex();S.reflink=E(S.reflink).replace("label",S._label).replace("ref",v._label).getRegex();S.nolink=E(S.nolink).replace("ref",v._label).getRegex();S.reflinkSearch=E(S.reflinkSearch,"g").replace("reflink",S.reflink).replace("nolink",S.nolink).getRegex();S.normal=ne({},S);S.pedantic=ne({},S.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:E(/^!?\[(label)\]\((.*?)\)/).replace("label",S._label).getRegex(),reflink:E(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",S._label).getRegex()});S.gfm=ne({},S.normal,{escape:E(S.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});S.gfm.url=E(S.gfm.url,"i").replace("email",S.gfm._extended_email).getRegex();S.breaks=ne({},S.gfm,{br:E(S.br).replace("{2,}","*").getRegex(),text:E(S.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Nn(a){return a.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function at(a){let e="",n,r;const t=a.length;for(n=0;n<t;n++)r=a.charCodeAt(n),Math.random()>.5&&(r="x"+r.toString(16)),e+="&#"+r+";";return e}class ie{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||ge,this.options.tokenizer=this.options.tokenizer||new Ie,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:v.normal,inline:S.normal};this.options.pedantic?(n.block=v.pedantic,n.inline=S.pedantic):this.options.gfm&&(n.block=v.gfm,this.options.breaks?n.inline=S.breaks:n.inline=S.gfm),this.tokenizer.rules=n}static get rules(){return{block:v,inline:S}}static lex(e,n){return new ie(n).lex(e)}static lexInline(e,n){return new ie(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(l,s,c)=>s+"    ".repeat(c.length));let r,t,i,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(r=l.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length),r.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length),t=n[n.length-1],t&&(t.type==="paragraph"||t.type==="text")?(t.raw+=`
`+r.raw,t.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=t.text):n.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length),t=n[n.length-1],t&&(t.type==="paragraph"||t.type==="text")?(t.raw+=`
`+r.raw,t.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=t.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),n.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const s=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},s),typeof c=="number"&&c>=0&&(l=Math.min(l,c))}),l<1/0&&l>=0&&(i=e.substring(0,l+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){t=n[n.length-1],o&&t.type==="paragraph"?(t.raw+=`
`+r.raw,t.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=t.text):n.push(r),o=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length),t=n[n.length-1],t&&t.type==="text"?(t.raw+=`
`+r.raw,t.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=t.text):n.push(r);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,t,i,o=e,l,s,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,l.index)+"["+it("a",l[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,l.index)+"["+it("a",l[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.escapedEmSt.exec(o))!=null;)o=o.slice(0,l.index+l[0].length-2)+"++"+o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;e;)if(s||(c=""),s=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(r=u.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t=n[n.length-1],t&&r.type==="text"&&t.type==="text"?(t.raw+=r.raw,t.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),t=n[n.length-1],t&&r.type==="text"&&t.type==="text"?(t.raw+=r.raw,t.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,o,c)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e,at)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e,at))){e=e.substring(r.raw.length),n.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const f=e.slice(1);let w;this.options.extensions.startInline.forEach(function(g){w=g.call({lexer:this},f),typeof w=="number"&&w>=0&&(u=Math.min(u,w))}),u<1/0&&u>=0&&(i=e.substring(0,u+1))}if(r=this.tokenizer.inlineText(i,Nn)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(c=r.raw.slice(-1)),s=!0,t=n[n.length-1],t&&t.type==="text"?(t.raw+=r.raw,t.text+=r.text):n.push(r);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return n}}class Ae{constructor(e){this.options=e||ge}code(e,n,r){const t=(n||"").match(/\S*/)[0];if(this.options.highlight){const i=this.options.highlight(e,t);i!=null&&i!==e&&(r=!0,e=i)}return e=e.replace(/\n$/,"")+`
`,t?'<pre><code class="'+this.options.langPrefix+U(t)+'">'+(r?e:U(e,!0))+`</code></pre>
`:"<pre><code>"+(r?e:U(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,n,r,t){if(this.options.headerIds){const i=this.options.headerPrefix+t.slug(r);return`<h${n} id="${i}">${e}</h${n}>
`}return`<h${n}>${e}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,n,r){const t=n?"ol":"ul",i=n&&r!==1?' start="'+r+'"':"";return"<"+t+i+`>
`+e+"</"+t+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,n){const r=n.header?"th":"td";return(n.align?`<${r} align="${n.align}">`:`<${r}>`)+e+`</${r}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,n,r){if(e=nt(this.options.sanitize,this.options.baseUrl,e),e===null)return r;let t='<a href="'+e+'"';return n&&(t+=' title="'+n+'"'),t+=">"+r+"</a>",t}image(e,n,r){if(e=nt(this.options.sanitize,this.options.baseUrl,e),e===null)return r;let t=`<img src="${e}" alt="${r}"`;return n&&(t+=` title="${n}"`),t+=this.options.xhtml?"/>":">",t}text(e){return e}}class bt{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,r){return""+r}image(e,n,r){return""+r}br(){return""}}class Be{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,n){let r=e,t=0;if(this.seen.hasOwnProperty(r)){t=this.seen[e];do t++,r=e+"-"+t;while(this.seen.hasOwnProperty(r))}return n||(this.seen[e]=t,this.seen[r]=0),r}slug(e,n={}){const r=this.serialize(e);return this.getNextSafeSlug(r,n.dryrun)}}class re{constructor(e){this.options=e||ge,this.options.renderer=this.options.renderer||new Ae,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new bt,this.slugger=new Be}static parse(e,n){return new re(n).parse(e)}static parseInline(e,n){return new re(n).parseInline(e)}parse(e,n=!0){let r="",t,i,o,l,s,c,u,f,w,g,G,y,M,B,H,ee,te,Q,J;const se=e.length;for(t=0;t<se;t++){if(g=e[t],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[g.type]&&(J=this.options.extensions.renderers[g.type].call({parser:this},g),J!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(g.type))){r+=J||"";continue}switch(g.type){case"space":continue;case"hr":{r+=this.renderer.hr();continue}case"heading":{r+=this.renderer.heading(this.parseInline(g.tokens),g.depth,St(this.parseInline(g.tokens,this.textRenderer)),this.slugger);continue}case"code":{r+=this.renderer.code(g.text,g.lang,g.escaped);continue}case"table":{for(f="",u="",l=g.header.length,i=0;i<l;i++)u+=this.renderer.tablecell(this.parseInline(g.header[i].tokens),{header:!0,align:g.align[i]});for(f+=this.renderer.tablerow(u),w="",l=g.rows.length,i=0;i<l;i++){for(c=g.rows[i],u="",s=c.length,o=0;o<s;o++)u+=this.renderer.tablecell(this.parseInline(c[o].tokens),{header:!1,align:g.align[o]});w+=this.renderer.tablerow(u)}r+=this.renderer.table(f,w);continue}case"blockquote":{w=this.parse(g.tokens),r+=this.renderer.blockquote(w);continue}case"list":{for(G=g.ordered,y=g.start,M=g.loose,l=g.items.length,w="",i=0;i<l;i++)H=g.items[i],ee=H.checked,te=H.task,B="",H.task&&(Q=this.renderer.checkbox(ee),M?H.tokens.length>0&&H.tokens[0].type==="paragraph"?(H.tokens[0].text=Q+" "+H.tokens[0].text,H.tokens[0].tokens&&H.tokens[0].tokens.length>0&&H.tokens[0].tokens[0].type==="text"&&(H.tokens[0].tokens[0].text=Q+" "+H.tokens[0].tokens[0].text)):H.tokens.unshift({type:"text",text:Q}):B+=Q),B+=this.parse(H.tokens,M),w+=this.renderer.listitem(B,te,ee);r+=this.renderer.list(w,G,y);continue}case"html":{r+=this.renderer.html(g.text);continue}case"paragraph":{r+=this.renderer.paragraph(this.parseInline(g.tokens));continue}case"text":{for(w=g.tokens?this.parseInline(g.tokens):g.text;t+1<se&&e[t+1].type==="text";)g=e[++t],w+=`
`+(g.tokens?this.parseInline(g.tokens):g.text);r+=n?this.renderer.paragraph(w):w;continue}default:{const ve='Token with "'+g.type+'" type was not found.';if(this.options.silent){console.error(ve);return}else throw new Error(ve)}}}return r}parseInline(e,n){n=n||this.renderer;let r="",t,i,o;const l=e.length;for(t=0;t<l;t++){if(i=e[t],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(o=this.options.extensions.renderers[i.type].call({parser:this},i),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type))){r+=o||"";continue}switch(i.type){case"escape":{r+=n.text(i.text);break}case"html":{r+=n.html(i.text);break}case"link":{r+=n.link(i.href,i.title,this.parseInline(i.tokens,n));break}case"image":{r+=n.image(i.href,i.title,i.text);break}case"strong":{r+=n.strong(this.parseInline(i.tokens,n));break}case"em":{r+=n.em(this.parseInline(i.tokens,n));break}case"codespan":{r+=n.codespan(i.text);break}case"br":{r+=n.br();break}case"del":{r+=n.del(this.parseInline(i.tokens,n));break}case"text":{r+=n.text(i.text);break}default:{const s='Token with "'+i.type+'" type was not found.';if(this.options.silent){console.error(s);return}else throw new Error(s)}}}return r}}function T(a,e,n){if(typeof a>"u"||a===null)throw new Error("marked(): input parameter is undefined or null");if(typeof a!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(a)+", string expected");if(typeof e=="function"&&(n=e,e=null),e=ne({},T.defaults,e||{}),wt(e),n){const t=e.highlight;let i;try{i=ie.lex(a,e)}catch(s){return n(s)}const o=function(s){let c;if(!s)try{e.walkTokens&&T.walkTokens(i,e.walkTokens),c=re.parse(i,e)}catch(u){s=u}return e.highlight=t,s?n(s):n(null,c)};if(!t||t.length<3||(delete e.highlight,!i.length))return o();let l=0;T.walkTokens(i,function(s){s.type==="code"&&(l++,setTimeout(()=>{t(s.text,s.lang,function(c,u){if(c)return o(c);u!=null&&u!==s.text&&(s.text=u,s.escaped=!0),l--,l===0&&o()})},0))}),l===0&&o();return}function r(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+U(t.message+"",!0)+"</pre>";throw t}try{const t=ie.lex(a,e);if(e.walkTokens){if(e.async)return Promise.all(T.walkTokens(t,e.walkTokens)).then(()=>re.parse(t,e)).catch(r);T.walkTokens(t,e.walkTokens)}return re.parse(t,e)}catch(t){r(t)}}T.options=T.setOptions=function(a){return ne(T.defaults,a),bn(T.defaults),T};T.getDefaults=ft;T.defaults=ge;T.use=function(...a){const e=T.defaults.extensions||{renderers:{},childTokens:{}};a.forEach(n=>{const r=ne({},n);if(r.async=T.defaults.async||r.async,n.extensions&&(n.extensions.forEach(t=>{if(!t.name)throw new Error("extension name required");if(t.renderer){const i=e.renderers[t.name];i?e.renderers[t.name]=function(...o){let l=t.renderer.apply(this,o);return l===!1&&(l=i.apply(this,o)),l}:e.renderers[t.name]=t.renderer}if(t.tokenizer){if(!t.level||t.level!=="block"&&t.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");e[t.level]?e[t.level].unshift(t.tokenizer):e[t.level]=[t.tokenizer],t.start&&(t.level==="block"?e.startBlock?e.startBlock.push(t.start):e.startBlock=[t.start]:t.level==="inline"&&(e.startInline?e.startInline.push(t.start):e.startInline=[t.start]))}t.childTokens&&(e.childTokens[t.name]=t.childTokens)}),r.extensions=e),n.renderer){const t=T.defaults.renderer||new Ae;for(const i in n.renderer){const o=t[i];t[i]=(...l)=>{let s=n.renderer[i].apply(t,l);return s===!1&&(s=o.apply(t,l)),s}}r.renderer=t}if(n.tokenizer){const t=T.defaults.tokenizer||new Ie;for(const i in n.tokenizer){const o=t[i];t[i]=(...l)=>{let s=n.tokenizer[i].apply(t,l);return s===!1&&(s=o.apply(t,l)),s}}r.tokenizer=t}if(n.walkTokens){const t=T.defaults.walkTokens;r.walkTokens=function(i){let o=[];return o.push(n.walkTokens.call(this,i)),t&&(o=o.concat(t.call(this,i))),o}}T.setOptions(r)})};T.walkTokens=function(a,e){let n=[];for(const r of a)switch(n=n.concat(e.call(T,r)),r.type){case"table":{for(const t of r.header)n=n.concat(T.walkTokens(t.tokens,e));for(const t of r.rows)for(const i of t)n=n.concat(T.walkTokens(i.tokens,e));break}case"list":{n=n.concat(T.walkTokens(r.items,e));break}default:T.defaults.extensions&&T.defaults.extensions.childTokens&&T.defaults.extensions.childTokens[r.type]?T.defaults.extensions.childTokens[r.type].forEach(function(t){n=n.concat(T.walkTokens(r[t],e))}):r.tokens&&(n=n.concat(T.walkTokens(r.tokens,e)))}return n};T.parseInline=function(a,e){if(typeof a>"u"||a===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof a!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(a)+", string expected");e=ne({},T.defaults,e||{}),wt(e);try{const n=ie.lexInline(a,e);return e.walkTokens&&T.walkTokens(n,e.walkTokens),re.parseInline(n,e)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+U(n.message+"",!0)+"</pre>";throw n}};T.Parser=re;T.parser=re.parse;T.Renderer=Ae;T.TextRenderer=bt;T.Lexer=ie;T.lexer=ie.lex;T.Tokenizer=Ie;T.Slugger=Be;T.parse=T;T.options;T.setOptions;T.use;T.walkTokens;T.parseInline;re.parse;ie.lex;const kt={};function Cn(a){let e;return{c(){e=he(a[1])},l(n){e=de(n,a[1])},m(n,r){p(n,e,r)},p(n,r){r&2&&ke(e,n[1])},i:V,o:V,d(n){n&&m(e)}}}function On(a){let e,n;const r=a[5].default,t=W(r,a,a[4],null);return{c(){e=P("h6"),t&&t.c(),this.h()},l(i){e=$(i,"H6",{id:!0});var o=A(e);t&&t.l(o),o.forEach(m),this.h()},h(){_(e,"id",a[2])},m(i,o){p(i,e,o),t&&t.m(e,null),n=!0},p(i,o){t&&t.p&&(!n||o&16)&&K(t,r,i,i[4],n?j(r,i[4],o,null):F(i[4]),null),(!n||o&4)&&_(e,"id",i[2])},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function Rn(a){let e,n;const r=a[5].default,t=W(r,a,a[4],null);return{c(){e=P("h5"),t&&t.c(),this.h()},l(i){e=$(i,"H5",{id:!0});var o=A(e);t&&t.l(o),o.forEach(m),this.h()},h(){_(e,"id",a[2])},m(i,o){p(i,e,o),t&&t.m(e,null),n=!0},p(i,o){t&&t.p&&(!n||o&16)&&K(t,r,i,i[4],n?j(r,i[4],o,null):F(i[4]),null),(!n||o&4)&&_(e,"id",i[2])},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function Gn(a){let e,n;const r=a[5].default,t=W(r,a,a[4],null);return{c(){e=P("h4"),t&&t.c(),this.h()},l(i){e=$(i,"H4",{id:!0});var o=A(e);t&&t.l(o),o.forEach(m),this.h()},h(){_(e,"id",a[2])},m(i,o){p(i,e,o),t&&t.m(e,null),n=!0},p(i,o){t&&t.p&&(!n||o&16)&&K(t,r,i,i[4],n?j(r,i[4],o,null):F(i[4]),null),(!n||o&4)&&_(e,"id",i[2])},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function En(a){let e,n;const r=a[5].default,t=W(r,a,a[4],null);return{c(){e=P("h3"),t&&t.c(),this.h()},l(i){e=$(i,"H3",{id:!0});var o=A(e);t&&t.l(o),o.forEach(m),this.h()},h(){_(e,"id",a[2])},m(i,o){p(i,e,o),t&&t.m(e,null),n=!0},p(i,o){t&&t.p&&(!n||o&16)&&K(t,r,i,i[4],n?j(r,i[4],o,null):F(i[4]),null),(!n||o&4)&&_(e,"id",i[2])},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function Mn(a){let e,n;const r=a[5].default,t=W(r,a,a[4],null);return{c(){e=P("h2"),t&&t.c(),this.h()},l(i){e=$(i,"H2",{id:!0});var o=A(e);t&&t.l(o),o.forEach(m),this.h()},h(){_(e,"id",a[2])},m(i,o){p(i,e,o),t&&t.m(e,null),n=!0},p(i,o){t&&t.p&&(!n||o&16)&&K(t,r,i,i[4],n?j(r,i[4],o,null):F(i[4]),null),(!n||o&4)&&_(e,"id",i[2])},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function qn(a){let e,n;const r=a[5].default,t=W(r,a,a[4],null);return{c(){e=P("h1"),t&&t.c(),this.h()},l(i){e=$(i,"H1",{id:!0});var o=A(e);t&&t.l(o),o.forEach(m),this.h()},h(){_(e,"id",a[2])},m(i,o){p(i,e,o),t&&t.m(e,null),n=!0},p(i,o){t&&t.p&&(!n||o&16)&&K(t,r,i,i[4],n?j(r,i[4],o,null):F(i[4]),null),(!n||o&4)&&_(e,"id",i[2])},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function Ln(a){let e,n,r,t;const i=[qn,Mn,En,Gn,Rn,On,Cn],o=[];function l(s,c){return s[0]===1?0:s[0]===2?1:s[0]===3?2:s[0]===4?3:s[0]===5?4:s[0]===6?5:6}return e=l(a),n=o[e]=i[e](a),{c(){n.c(),r=k()},l(s){n.l(s),r=k()},m(s,c){o[e].m(s,c),p(s,r,c),t=!0},p(s,[c]){let u=e;e=l(s),e===u?o[e].p(s,c):(z(),d(o[u],1,1,()=>{o[u]=null}),N(),n=o[e],n?n.p(s,c):(n=o[e]=i[e](s),n.c()),h(n,1),n.m(r.parentNode,r))},i(s){t||(h(n),t=!0)},o(s){d(n),t=!1},d(s){o[e].d(s),s&&m(r)}}}function Wn(a,e,n){let r,{$$slots:t={},$$scope:i}=e,{depth:o}=e,{raw:l}=e,{text:s}=e;const{slug:c,getOptions:u}=$t(kt),f=u();return a.$$set=w=>{"depth"in w&&n(0,o=w.depth),"raw"in w&&n(1,l=w.raw),"text"in w&&n(3,s=w.text),"$$scope"in w&&n(4,i=w.$$scope)},a.$$.update=()=>{a.$$.dirty&8&&n(2,r=f.headerIds?f.headerPrefix+c(s):void 0)},[o,l,r,s,i,t]}class Kn extends C{constructor(e){super(),O(this,e,Wn,Ln,R,{depth:0,raw:1,text:3})}}function Fn(a){let e,n;const r=a[1].default,t=W(r,a,a[0],null);return{c(){e=P("p"),t&&t.c()},l(i){e=$(i,"P",{});var o=A(e);t&&t.l(o),o.forEach(m)},m(i,o){p(i,e,o),t&&t.m(e,null),n=!0},p(i,[o]){t&&t.p&&(!n||o&1)&&K(t,r,i,i[0],n?j(r,i[0],o,null):F(i[0]),null)},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function jn(a,e,n){let{$$slots:r={},$$scope:t}=e;return a.$$set=i=>{"$$scope"in i&&n(0,t=i.$$scope)},[t,r]}class Hn extends C{constructor(e){super(),O(this,e,jn,Fn,R,{})}}function Vn(a){let e;const n=a[3].default,r=W(n,a,a[2],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,i){r&&r.m(t,i),e=!0},p(t,[i]){r&&r.p&&(!e||i&4)&&K(r,n,t,t[2],e?j(n,t[2],i,null):F(t[2]),null)},i(t){e||(h(r,t),e=!0)},o(t){d(r,t),e=!1},d(t){r&&r.d(t)}}}function Zn(a,e,n){let{$$slots:r={},$$scope:t}=e,{text:i}=e,{raw:o}=e;return a.$$set=l=>{"text"in l&&n(0,i=l.text),"raw"in l&&n(1,o=l.raw),"$$scope"in l&&n(2,t=l.$$scope)},[i,o,t,r]}class Un extends C{constructor(e){super(),O(this,e,Zn,Vn,R,{text:0,raw:1})}}function Qn(a){let e,n;return{c(){e=P("img"),this.h()},l(r){e=$(r,"IMG",{src:!0,title:!0,alt:!0}),this.h()},h(){Ge(e.src,n=a[0])||_(e,"src",n),_(e,"title",a[1]),_(e,"alt",a[2])},m(r,t){p(r,e,t)},p(r,[t]){t&1&&!Ge(e.src,n=r[0])&&_(e,"src",n),t&2&&_(e,"title",r[1]),t&4&&_(e,"alt",r[2])},i:V,o:V,d(r){r&&m(e)}}}function Jn(a,e,n){let{href:r=""}=e,{title:t=void 0}=e,{text:i=""}=e;return a.$$set=o=>{"href"in o&&n(0,r=o.href),"title"in o&&n(1,t=o.title),"text"in o&&n(2,i=o.text)},[r,t,i]}class Yn extends C{constructor(e){super(),O(this,e,Jn,Qn,R,{href:0,title:1,text:2})}}function Xn(a){let e,n;const r=a[3].default,t=W(r,a,a[2],null);return{c(){e=P("a"),t&&t.c(),this.h()},l(i){e=$(i,"A",{href:!0,title:!0});var o=A(e);t&&t.l(o),o.forEach(m),this.h()},h(){_(e,"href",a[0]),_(e,"title",a[1])},m(i,o){p(i,e,o),t&&t.m(e,null),n=!0},p(i,[o]){t&&t.p&&(!n||o&4)&&K(t,r,i,i[2],n?j(r,i[2],o,null):F(i[2]),null),(!n||o&1)&&_(e,"href",i[0]),(!n||o&2)&&_(e,"title",i[1])},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function er(a,e,n){let{$$slots:r={},$$scope:t}=e,{href:i=""}=e,{title:o=void 0}=e;return a.$$set=l=>{"href"in l&&n(0,i=l.href),"title"in l&&n(1,o=l.title),"$$scope"in l&&n(2,t=l.$$scope)},[i,o,t,r]}class tr extends C{constructor(e){super(),O(this,e,er,Xn,R,{href:0,title:1})}}function nr(a){let e,n;const r=a[1].default,t=W(r,a,a[0],null);return{c(){e=P("em"),t&&t.c()},l(i){e=$(i,"EM",{});var o=A(e);t&&t.l(o),o.forEach(m)},m(i,o){p(i,e,o),t&&t.m(e,null),n=!0},p(i,[o]){t&&t.p&&(!n||o&1)&&K(t,r,i,i[0],n?j(r,i[0],o,null):F(i[0]),null)},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function rr(a,e,n){let{$$slots:r={},$$scope:t}=e;return a.$$set=i=>{"$$scope"in i&&n(0,t=i.$$scope)},[t,r]}class ir extends C{constructor(e){super(),O(this,e,rr,nr,R,{})}}function or(a){let e,n;const r=a[1].default,t=W(r,a,a[0],null);return{c(){e=P("del"),t&&t.c()},l(i){e=$(i,"DEL",{});var o=A(e);t&&t.l(o),o.forEach(m)},m(i,o){p(i,e,o),t&&t.m(e,null),n=!0},p(i,[o]){t&&t.p&&(!n||o&1)&&K(t,r,i,i[0],n?j(r,i[0],o,null):F(i[0]),null)},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function ar(a,e,n){let{$$slots:r={},$$scope:t}=e;return a.$$set=i=>{"$$scope"in i&&n(0,t=i.$$scope)},[t,r]}class sr extends C{constructor(e){super(),O(this,e,ar,or,R,{})}}function lr(a){let e,n=a[0].replace(/`/g,"")+"",r;return{c(){e=P("code"),r=he(n)},l(t){e=$(t,"CODE",{});var i=A(e);r=de(i,n),i.forEach(m)},m(t,i){p(t,e,i),oe(e,r)},p(t,[i]){i&1&&n!==(n=t[0].replace(/`/g,"")+"")&&ke(r,n)},i:V,o:V,d(t){t&&m(e)}}}function cr(a,e,n){let{raw:r}=e;return a.$$set=t=>{"raw"in t&&n(0,r=t.raw)},[r]}class ur extends C{constructor(e){super(),O(this,e,cr,lr,R,{raw:0})}}function mr(a){let e,n;const r=a[1].default,t=W(r,a,a[0],null);return{c(){e=P("strong"),t&&t.c()},l(i){e=$(i,"STRONG",{});var o=A(e);t&&t.l(o),o.forEach(m)},m(i,o){p(i,e,o),t&&t.m(e,null),n=!0},p(i,[o]){t&&t.p&&(!n||o&1)&&K(t,r,i,i[0],n?j(r,i[0],o,null):F(i[0]),null)},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function hr(a,e,n){let{$$slots:r={},$$scope:t}=e;return a.$$set=i=>{"$$scope"in i&&n(0,t=i.$$scope)},[t,r]}class dr extends C{constructor(e){super(),O(this,e,hr,mr,R,{})}}function fr(a){let e,n;const r=a[1].default,t=W(r,a,a[0],null);return{c(){e=P("table"),t&&t.c()},l(i){e=$(i,"TABLE",{});var o=A(e);t&&t.l(o),o.forEach(m)},m(i,o){p(i,e,o),t&&t.m(e,null),n=!0},p(i,[o]){t&&t.p&&(!n||o&1)&&K(t,r,i,i[0],n?j(r,i[0],o,null):F(i[0]),null)},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function pr(a,e,n){let{$$slots:r={},$$scope:t}=e;return a.$$set=i=>{"$$scope"in i&&n(0,t=i.$$scope)},[t,r]}class gr extends C{constructor(e){super(),O(this,e,pr,fr,R,{})}}function Sr(a){let e,n;const r=a[1].default,t=W(r,a,a[0],null);return{c(){e=P("thead"),t&&t.c()},l(i){e=$(i,"THEAD",{});var o=A(e);t&&t.l(o),o.forEach(m)},m(i,o){p(i,e,o),t&&t.m(e,null),n=!0},p(i,[o]){t&&t.p&&(!n||o&1)&&K(t,r,i,i[0],n?j(r,i[0],o,null):F(i[0]),null)},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function wr(a,e,n){let{$$slots:r={},$$scope:t}=e;return a.$$set=i=>{"$$scope"in i&&n(0,t=i.$$scope)},[t,r]}class br extends C{constructor(e){super(),O(this,e,wr,Sr,R,{})}}function kr(a){let e,n;const r=a[1].default,t=W(r,a,a[0],null);return{c(){e=P("tbody"),t&&t.c()},l(i){e=$(i,"TBODY",{});var o=A(e);t&&t.l(o),o.forEach(m)},m(i,o){p(i,e,o),t&&t.m(e,null),n=!0},p(i,[o]){t&&t.p&&(!n||o&1)&&K(t,r,i,i[0],n?j(r,i[0],o,null):F(i[0]),null)},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function vr(a,e,n){let{$$slots:r={},$$scope:t}=e;return a.$$set=i=>{"$$scope"in i&&n(0,t=i.$$scope)},[t,r]}class yr extends C{constructor(e){super(),O(this,e,vr,kr,R,{})}}function Tr(a){let e,n;const r=a[1].default,t=W(r,a,a[0],null);return{c(){e=P("tr"),t&&t.c()},l(i){e=$(i,"TR",{});var o=A(e);t&&t.l(o),o.forEach(m)},m(i,o){p(i,e,o),t&&t.m(e,null),n=!0},p(i,[o]){t&&t.p&&(!n||o&1)&&K(t,r,i,i[0],n?j(r,i[0],o,null):F(i[0]),null)},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function _r(a,e,n){let{$$slots:r={},$$scope:t}=e;return a.$$set=i=>{"$$scope"in i&&n(0,t=i.$$scope)},[t,r]}class Pr extends C{constructor(e){super(),O(this,e,_r,Tr,R,{})}}function $r(a){let e,n;const r=a[3].default,t=W(r,a,a[2],null);return{c(){e=P("td"),t&&t.c(),this.h()},l(i){e=$(i,"TD",{align:!0});var o=A(e);t&&t.l(o),o.forEach(m),this.h()},h(){_(e,"align",a[1])},m(i,o){p(i,e,o),t&&t.m(e,null),n=!0},p(i,o){t&&t.p&&(!n||o&4)&&K(t,r,i,i[2],n?j(r,i[2],o,null):F(i[2]),null),(!n||o&2)&&_(e,"align",i[1])},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function xr(a){let e,n;const r=a[3].default,t=W(r,a,a[2],null);return{c(){e=P("th"),t&&t.c(),this.h()},l(i){e=$(i,"TH",{align:!0});var o=A(e);t&&t.l(o),o.forEach(m),this.h()},h(){_(e,"align",a[1])},m(i,o){p(i,e,o),t&&t.m(e,null),n=!0},p(i,o){t&&t.p&&(!n||o&4)&&K(t,r,i,i[2],n?j(r,i[2],o,null):F(i[2]),null),(!n||o&2)&&_(e,"align",i[1])},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function Dr(a){let e,n,r,t;const i=[xr,$r],o=[];function l(s,c){return s[0]?0:1}return e=l(a),n=o[e]=i[e](a),{c(){n.c(),r=k()},l(s){n.l(s),r=k()},m(s,c){o[e].m(s,c),p(s,r,c),t=!0},p(s,[c]){let u=e;e=l(s),e===u?o[e].p(s,c):(z(),d(o[u],1,1,()=>{o[u]=null}),N(),n=o[e],n?n.p(s,c):(n=o[e]=i[e](s),n.c()),h(n,1),n.m(r.parentNode,r))},i(s){t||(h(n),t=!0)},o(s){d(n),t=!1},d(s){o[e].d(s),s&&m(r)}}}function Ir(a,e,n){let{$$slots:r={},$$scope:t}=e,{header:i}=e,{align:o}=e;return a.$$set=l=>{"header"in l&&n(0,i=l.header),"align"in l&&n(1,o=l.align),"$$scope"in l&&n(2,t=l.$$scope)},[i,o,t,r]}class Ar extends C{constructor(e){super(),O(this,e,Ir,Dr,R,{header:0,align:1})}}function Br(a){let e,n;const r=a[3].default,t=W(r,a,a[2],null);return{c(){e=P("ul"),t&&t.c()},l(i){e=$(i,"UL",{});var o=A(e);t&&t.l(o),o.forEach(m)},m(i,o){p(i,e,o),t&&t.m(e,null),n=!0},p(i,o){t&&t.p&&(!n||o&4)&&K(t,r,i,i[2],n?j(r,i[2],o,null):F(i[2]),null)},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function zr(a){let e,n;const r=a[3].default,t=W(r,a,a[2],null);return{c(){e=P("ol"),t&&t.c(),this.h()},l(i){e=$(i,"OL",{start:!0});var o=A(e);t&&t.l(o),o.forEach(m),this.h()},h(){_(e,"start",a[1])},m(i,o){p(i,e,o),t&&t.m(e,null),n=!0},p(i,o){t&&t.p&&(!n||o&4)&&K(t,r,i,i[2],n?j(r,i[2],o,null):F(i[2]),null),(!n||o&2)&&_(e,"start",i[1])},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function Nr(a){let e,n,r,t;const i=[zr,Br],o=[];function l(s,c){return s[0]?0:1}return e=l(a),n=o[e]=i[e](a),{c(){n.c(),r=k()},l(s){n.l(s),r=k()},m(s,c){o[e].m(s,c),p(s,r,c),t=!0},p(s,[c]){let u=e;e=l(s),e===u?o[e].p(s,c):(z(),d(o[u],1,1,()=>{o[u]=null}),N(),n=o[e],n?n.p(s,c):(n=o[e]=i[e](s),n.c()),h(n,1),n.m(r.parentNode,r))},i(s){t||(h(n),t=!0)},o(s){d(n),t=!1},d(s){o[e].d(s),s&&m(r)}}}function Cr(a,e,n){let{$$slots:r={},$$scope:t}=e,{ordered:i}=e,{start:o}=e;return a.$$set=l=>{"ordered"in l&&n(0,i=l.ordered),"start"in l&&n(1,o=l.start),"$$scope"in l&&n(2,t=l.$$scope)},[i,o,t,r]}class Or extends C{constructor(e){super(),O(this,e,Cr,Nr,R,{ordered:0,start:1})}}function Rr(a){let e,n;const r=a[1].default,t=W(r,a,a[0],null);return{c(){e=P("li"),t&&t.c()},l(i){e=$(i,"LI",{});var o=A(e);t&&t.l(o),o.forEach(m)},m(i,o){p(i,e,o),t&&t.m(e,null),n=!0},p(i,[o]){t&&t.p&&(!n||o&1)&&K(t,r,i,i[0],n?j(r,i[0],o,null):F(i[0]),null)},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function Gr(a,e,n){let{$$slots:r={},$$scope:t}=e;return a.$$set=i=>{"$$scope"in i&&n(0,t=i.$$scope)},[t,r]}class Er extends C{constructor(e){super(),O(this,e,Gr,Rr,R,{})}}function Mr(a){let e;return{c(){e=P("hr")},l(n){e=$(n,"HR",{})},m(n,r){p(n,e,r)},p:V,i:V,o:V,d(n){n&&m(e)}}}class qr extends C{constructor(e){super(),O(this,e,null,Mr,R,{})}}function Lr(a){let e,n;return{c(){e=new xt(!1),n=k(),this.h()},l(r){e=Dt(r,!1),n=k(),this.h()},h(){e.a=n},m(r,t){e.m(a[0],r,t),p(r,n,t)},p(r,[t]){t&1&&e.p(r[0])},i:V,o:V,d(r){r&&m(n),r&&e.d()}}}function Wr(a,e,n){let{text:r}=e;return a.$$set=t=>{"text"in t&&n(0,r=t.text)},[r]}class Kr extends C{constructor(e){super(),O(this,e,Wr,Lr,R,{text:0})}}function Fr(a){let e,n;const r=a[1].default,t=W(r,a,a[0],null);return{c(){e=P("blockquote"),t&&t.c()},l(i){e=$(i,"BLOCKQUOTE",{});var o=A(e);t&&t.l(o),o.forEach(m)},m(i,o){p(i,e,o),t&&t.m(e,null),n=!0},p(i,[o]){t&&t.p&&(!n||o&1)&&K(t,r,i,i[0],n?j(r,i[0],o,null):F(i[0]),null)},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function jr(a,e,n){let{$$slots:r={},$$scope:t}=e;return a.$$set=i=>{"$$scope"in i&&n(0,t=i.$$scope)},[t,r]}class Hr extends C{constructor(e){super(),O(this,e,jr,Fr,R,{})}}function Vr(a){let e,n,r;return{c(){e=P("pre"),n=P("code"),r=he(a[1]),this.h()},l(t){e=$(t,"PRE",{class:!0});var i=A(e);n=$(i,"CODE",{});var o=A(n);r=de(o,a[1]),o.forEach(m),i.forEach(m),this.h()},h(){_(e,"class",a[0])},m(t,i){p(t,e,i),oe(e,n),oe(n,r)},p(t,[i]){i&2&&ke(r,t[1]),i&1&&_(e,"class",t[0])},i:V,o:V,d(t){t&&m(e)}}}function Zr(a,e,n){let{lang:r}=e,{text:t}=e;return a.$$set=i=>{"lang"in i&&n(0,r=i.lang),"text"in i&&n(1,t=i.text)},[r,t]}class Ur extends C{constructor(e){super(),O(this,e,Zr,Vr,R,{lang:0,text:1})}}function Qr(a){let e,n;const r=a[1].default,t=W(r,a,a[0],null);return{c(){e=P("br"),t&&t.c()},l(i){e=$(i,"BR",{}),t&&t.l(i)},m(i,o){p(i,e,o),t&&t.m(i,o),n=!0},p(i,[o]){t&&t.p&&(!n||o&1)&&K(t,r,i,i[0],n?j(r,i[0],o,null):F(i[0]),null)},i(i){n||(h(t,i),n=!0)},o(i){d(t,i),n=!1},d(i){i&&m(e),t&&t.d(i)}}}function Jr(a,e,n){let{$$slots:r={},$$scope:t}=e;return a.$$set=i=>{"$$scope"in i&&n(0,t=i.$$scope)},[t,r]}class Yr extends C{constructor(e){super(),O(this,e,Jr,Qr,R,{})}}const Xr={heading:Kn,paragraph:Hn,text:Un,image:Yn,link:tr,em:ir,strong:dr,codespan:ur,del:sr,table:gr,tablehead:br,tablebody:yr,tablerow:Pr,tablecell:Ar,list:Or,orderedlistitem:null,unorderedlistitem:null,listitem:Er,hr:qr,html:Kr,blockquote:Hr,code:Ur,br:Yr},ei={baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1};function ti(a){let e,n;return e=new ce({props:{tokens:a[0],renderers:a[1]}}),{c(){x(e.$$.fragment)},l(r){q(e.$$.fragment,r)},m(r,t){D(e,r,t),n=!0},p(r,[t]){const i={};t&1&&(i.tokens=r[0]),t&2&&(i.renderers=r[1]),e.$set(i)},i(r){n||(h(e.$$.fragment,r),n=!0)},o(r){d(e.$$.fragment,r),n=!1},d(r){I(e,r)}}}function ni(a,e,n){let r,t,i,o,{source:l=[]}=e,{renderers:s={}}=e,{options:c={}}=e,{isInline:u=!1}=e;const f=It();let w,g,G;return At(kt,{slug:y=>t?t.slug(y):"",getOptions:()=>i}),xe(()=>{n(7,G=!0)}),a.$$set=y=>{"source"in y&&n(2,l=y.source),"renderers"in y&&n(3,s=y.renderers),"options"in y&&n(4,c=y.options),"isInline"in y&&n(5,u=y.isInline)},a.$$.update=()=>{a.$$.dirty&4&&n(8,r=Array.isArray(l)),a.$$.dirty&4&&(t=l?new Be:void 0),a.$$.dirty&16&&n(9,i={...ei,...c}),a.$$.dirty&869&&(r?n(0,w=l):(n(6,g=new ie(i)),n(0,w=u?g.inlineTokens(l):g.lex(l)),f("parsed",{tokens:w}))),a.$$.dirty&8&&n(1,o={...Xr,...s}),a.$$.dirty&385&&G&&!r&&f("parsed",{tokens:w})},[w,o,l,s,c,u,g,G,r,i]}class ri extends C{constructor(e){super(),O(this,e,ni,ti,R,{source:2,renderers:3,options:4,isInline:5})}}function ii(a){let e;const n=a[1].default,r=W(n,a,a[0],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,i){r&&r.m(t,i),e=!0},p(t,[i]){r&&r.p&&(!e||i&1)&&K(r,n,t,t[0],e?j(n,t[0],i,null):F(t[0]),null)},i(t){e||(h(r,t),e=!0)},o(t){d(r,t),e=!1},d(t){r&&r.d(t)}}}function oi(a,e,n){let{$$slots:r={},$$scope:t}=e;return a.$$set=i=>{"$$scope"in i&&n(0,t=i.$$scope)},[t,r]}class st extends C{constructor(e){super(),O(this,e,oi,ii,R,{})}}function lt(a){let e,n,r,t,i;const o=[si,ai],l=[];function s(c,u){return u&1&&(e=null),e==null&&(e=c[0].trim().length===0),e?0:1}return n=s(a,-1),r=l[n]=o[n](a),{c(){r.c(),t=k()},l(c){r.l(c),t=k()},m(c,u){l[n].m(c,u),p(c,t,u),i=!0},p(c,u){let f=n;n=s(c,u),n===f?l[n].p(c,u):(z(),d(l[f],1,1,()=>{l[f]=null}),N(),r=l[n],r?r.p(c,u):(r=l[n]=o[n](c),r.c()),h(r,1),r.m(t.parentNode,t))},i(c){i||(h(r),i=!0)},o(c){d(r),i=!1},d(c){l[n].d(c),c&&m(t)}}}function ai(a){let e,n;return e=new ri({props:{source:a[0].replace(/(\[[A-Za-z:,]+\])/g,"")+" ",renderers:{paragraph:st,text:st}}}),{c(){x(e.$$.fragment)},l(r){q(e.$$.fragment,r)},m(r,t){D(e,r,t),n=!0},p(r,t){const i={};t&1&&(i.source=r[0].replace(/(\[[A-Za-z:,]+\])/g,"")+" "),e.$set(i)},i(r){n||(h(e.$$.fragment,r),n=!0)},o(r){d(e.$$.fragment,r),n=!1},d(r){I(e,r)}}}function si(a){let e,n;return{c(){e=P("br"),n=P("br")},l(r){e=$(r,"BR",{}),n=$(r,"BR",{})},m(r,t){p(r,e,t),p(r,n,t)},p:V,i:V,o:V,d(r){r&&m(e),r&&m(n)}}}function li(a){let e,n,r=a[1]&&lt(a);return{c(){r&&r.c(),e=k()},l(t){r&&r.l(t),e=k()},m(t,i){r&&r.m(t,i),p(t,e,i),n=!0},p(t,[i]){t[1]?r?(r.p(t,i),i&2&&h(r,1)):(r=lt(t),r.c(),h(r,1),r.m(e.parentNode,e)):r&&(z(),d(r,1,1,()=>{r=null}),N())},i(t){n||(h(r),n=!0)},o(t){d(r),n=!1},d(t){r&&r.d(t),t&&m(e)}}}const ci=/\[[A-Za-z:,]+\]/gi;function ui(a,e,n){let{text:r}=e,{filter:t}=e,i,o;return xe(async()=>{let l=r.match(ci);l!=null&&(n(3,o=l),o.forEach(s=>{s.substring(1,s.length-1).split(",").forEach(c=>De.add(c))}))}),a.$$set=l=>{"text"in l&&n(0,r=l.text),"filter"in l&&n(2,t=l.filter)},a.$$.update=()=>{a.$$.dirty&13&&n(1,i=t==""||r.toLowerCase().includes(t.toLowerCase())||o!=null&&o.includes(t))},[r,i,t,o]}class mi extends C{constructor(e){super(),O(this,e,ui,li,R,{text:0,filter:2})}}function ct(a,e,n){const r=a.slice();return r[3]=e[n],r}function ut(a){let e,n,r;function t(o){a[2](o)}let i={text:a[3]};return a[0]!==void 0&&(i.filter=a[0]),e=new mi({props:i}),ue.push(()=>we(e,"filter",t,a[0])),{c(){x(e.$$.fragment)},l(o){q(e.$$.fragment,o)},m(o,l){D(e,o,l),r=!0},p(o,l){const s={};l&2&&(s.text=o[3]),!n&&l&1&&(n=!0,s.filter=o[0],be(()=>n=!1)),e.$set(s)},i(o){r||(h(e.$$.fragment,o),r=!0)},o(o){d(e.$$.fragment,o),r=!1},d(o){I(e,o)}}}function hi(a){let e,n,r=a[1],t=[];for(let o=0;o<r.length;o+=1)t[o]=ut(ct(a,r,o));const i=o=>d(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=k()},l(o){for(let l=0;l<t.length;l+=1)t[l].l(o);e=k()},m(o,l){for(let s=0;s<t.length;s+=1)t[s].m(o,l);p(o,e,l),n=!0},p(o,[l]){if(l&3){r=o[1];let s;for(s=0;s<r.length;s+=1){const c=ct(o,r,s);t[s]?(t[s].p(c,l),h(t[s],1)):(t[s]=ut(c),t[s].c(),h(t[s],1),t[s].m(e.parentNode,e))}for(z(),s=r.length;s<t.length;s+=1)i(s);N()}},i(o){if(!n){for(let l=0;l<r.length;l+=1)h(t[l]);n=!0}},o(o){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)d(t[l]);n=!1},d(o){ae(t,o),o&&m(e)}}}function di(a,e,n){let{searchTerm:r=""}=e,{textBlocks:t}=e;function i(o){r=o,n(0,r)}return a.$$set=o=>{"searchTerm"in o&&n(0,r=o.searchTerm),"textBlocks"in o&&n(1,t=o.textBlocks)},[r,t,i]}class fi extends C{constructor(e){super(),O(this,e,di,hi,R,{searchTerm:0,textBlocks:1})}}function pi(a){let e,n,r,t,i,o,l,s,c,u,f,w,g,G,y,M,B,H,ee;function te(b){a[4](b)}let Q={};a[1]!==void 0&&(Q.searchTerm=a[1]),o=new Vt({props:Q}),ue.push(()=>we(o,"searchTerm",te,a[1]));function J(b){a[5](b)}let se={options:Object.keys(dt)};a[0]!==void 0&&(se.selectedGuide=a[0]),f=new Ot({props:se}),ue.push(()=>we(f,"selectedGuide",J,a[0])),f.$on("change",a[3]);function ve(b){a[6](b)}function vt(b){a[7](b)}let Pe={};return a[2]!==void 0&&(Pe.textBlocks=a[2]),a[1]!==void 0&&(Pe.searchTerm=a[1]),M=new fi({props:Pe}),ue.push(()=>we(M,"textBlocks",ve,a[2])),ue.push(()=>we(M,"searchTerm",vt,a[1])),{c(){e=P("meta"),n=Y(),r=P("h1"),t=he("Interactive Agile Guides"),i=Y(),x(o.$$.fragment),s=Y(),c=P("br"),u=Y(),x(f.$$.fragment),g=Y(),G=P("br"),y=Y(),x(M.$$.fragment),this.h()},l(b){const Z=Bt("svelte-144h0ef",document.head);e=$(Z,"META",{name:!0,content:!0}),Z.forEach(m),n=X(b),r=$(b,"H1",{});var Se=A(r);t=de(Se,"Interactive Agile Guides"),Se.forEach(m),i=X(b),q(o.$$.fragment,b),s=X(b),c=$(b,"BR",{}),u=X(b),q(f.$$.fragment,b),g=X(b),G=$(b,"BR",{}),y=X(b),q(M.$$.fragment,b),this.h()},h(){document.title="Interactive Agile Guides",_(e,"name","description"),_(e,"content","Interactive Agile Guides")},m(b,Z){oe(document.head,e),p(b,n,Z),p(b,r,Z),oe(r,t),p(b,i,Z),D(o,b,Z),p(b,s,Z),p(b,c,Z),p(b,u,Z),D(f,b,Z),p(b,g,Z),p(b,G,Z),p(b,y,Z),D(M,b,Z),ee=!0},p(b,[Z]){const Se={};!l&&Z&2&&(l=!0,Se.searchTerm=b[1],be(()=>l=!1)),o.$set(Se);const ze={};!w&&Z&1&&(w=!0,ze.selectedGuide=b[0],be(()=>w=!1)),f.$set(ze);const $e={};!B&&Z&4&&(B=!0,$e.textBlocks=b[2],be(()=>B=!1)),!H&&Z&2&&(H=!0,$e.searchTerm=b[1],be(()=>H=!1)),M.$set($e)},i(b){ee||(h(o.$$.fragment,b),h(f.$$.fragment,b),h(M.$$.fragment,b),ee=!0)},o(b){d(o.$$.fragment,b),d(f.$$.fragment,b),d(M.$$.fragment,b),ee=!1},d(b){m(e),b&&m(n),b&&m(r),b&&m(i),I(o,b),b&&m(s),b&&m(c),b&&m(u),I(f,b),b&&m(g),b&&m(G),b&&m(y),I(M,b)}}}function gi(a,e,n){let r,t="",i="Scrum_Guide_2020";function o(w){for(const[g,G]of Object.entries(dt))if(g===w)return G;return"# No matching Guide found"}function l(){De.reset(),n(1,t="")}function s(w){t=w,n(1,t)}function c(w){i=w,n(0,i)}function u(w){r=w,n(2,r),n(0,i)}function f(w){t=w,n(1,t)}return a.$$.update=()=>{a.$$.dirty&1&&n(2,r=o(i).split(`
`))},[i,t,r,l,s,c,u,f]}class ki extends C{constructor(e){super(),O(this,e,gi,pi,R,{})}}export{ki as default};
