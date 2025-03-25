# Purpose

The flow-based[Flow] perspective of Kanban[KanbanFramework] can enhance and complement the Scrum framework[Framework] and its implementation.
Teams[ScrumTeam] can add complementary Kanban[KanbanFramework] practices[KanbanPractices] whether they are just starting to use Scrum[Scrum] or have been using it all along.

The Kanban Guide for Scrum Teams[ScrumTeam] is the result of a collaboration between members of the Scrum.org community and leaders of the Kanban[KanbanFramework] community.
Together, they stand behind The Kanban Guide for Scrum Teams[ScrumTeam].
It is their shared belief that professional product[Product] development practitioners can benefit from the application of Kanban[KanbanFramework] together with Scrum[Scrum].

# Relation to the Scrum Guide
This guide does not replace or discount any part of The Scrum Guide. It is designed to enhance and expand the practices of Scrum[Scrum,ExtendScrum].
This guide assumes the reader is operating a process using the Scrum framework[Framework].
Therefore, The Scrum Guide applies in its entirety.

# Definition of Kanban
Kanban[KanbanFramework] (n): a strategy for optimizing the flow[Flow] of value[Value,ValueDelivery] through a process that uses a visual, workin-progress[WorkInProgress] limited pull system[PullSystem].

# Kanban with Scrum Theory
## Flow and Empiricism[Empiricism]
Central to the definition of Kanban[KanbanFramework] is the concept of flow[Flow].
Flow[Flow] is the movement of value[Value] throughout the product[Product] development system.
Kanban[KanbanFramework] optimizes flow[Flow] by improving the overall efficiency, effectiveness, and predictability[Forecast] of a process.
Optimizing flow[Flow] in a Scrum[Scrum] context requires defining what flow[Flow] means in Scrum[Scrum].
Scrum[Scrum] is founded on empirical[Empiricism] process control theory, or empiricism[Empiricism].
Key to empirical[Empiricism] process control is the frequency of the transparency[EmpiricalScrumPillars,Transparency], inspection[EmpiricalScrumPillars,Inspection], and adaptation[EmpiricalScrumPillars,Adaptation] cycle - which we can also describe as the Cycle Time[CycleTime] through the feedback loop.
When Kanban[KanbanFramework] practices[KanbanPractices] are applied to Scrum[Scrum], they provide a focus[ScrumValues,Focus] on improving the flow[Flow] through the feedback loop; optimizing transparency[EmpiricalScrumPillars,Transparency] and the frequency of inspection[EmpiricalScrumPillars,Inspection] and adaptation[EmpiricalScrumPillars,Adaptation] for both the product[Product] and the process.

## The Basic Metrics of Flow[Flow,FlowMeasures]
The four basic metrics of flow[Flow,FlowMeasures] that Scrum Teams[ScrumTeam] using Kanban[KanbanFramework] need to track are as follows:
- Work in Progress[WorkInProgress] (WIP): The number of work items[WorkItems] started but not finished. The team[ScrumTeam] can use the WIP[WorkInProgress] metric to provide transparency[EmpiricalScrumPillars,Transparency] about their progress towards reducing their WIP[WorkInProgress] and improving their flow[Flow]. Note that there is a difference between the WIP[WorkInProgress] metric and the policies a Scrum Team[ScrumTeam] uses to limit WIP[WorkInProgress].
- Cycle Time[CycleTime]: The amount of elapsed time between when a work item[WorkItems] starts and when a work item[WorkItems] finishes.
- Work Item Age[WorkItemAge]: The amount of time between when a work item[WorkItems] started and the current time. This applies only to items that are still in progress[WorkInProgress].
- Throughput[Throughput]: The number of work items[WorkItems] finished per unit of time.

## Little's Law – The Key to Governing Flow[Flow]
A key tenet governing flow[Flow] theory is Little's Law, which is a guideline that establishes the following relationship:

average cycle time[CycleTime] = average work in progress[WorkInProgress] / average throughput[Throughput]

Little's Law reveals that in general, for a given process with a given throughput[Throughput], the more things that you work on at any given time (on average), the longer it is going to take to finish those things (on average).
If cycle times[CycleTime] are too long, the first action Scrum Teams[ScrumTeam] should consider is lowering WIP[WorkInProgress]. Most of the other elements of Kanban[KanbanFramework] are built upon the relationship between WIP[WorkInProgress] and Cycle Time[CycleTime].
Little's Law also shows us how flow[Flow] theory relies on empiricism[Empiricism] by using flow[Flow] metrics and data to gain transparency[EmpiricalScrumPillars,Transparency] into historical flow[Flow] and then using that data to inform flow[Flow] inspection[EmpiricalScrumPillars,Inspection] and adaptation[EmpiricalScrumPillars,Adaptation] experiments.

# Kanban Practices[KanbanPractices]
Scrum Teams[ScrumTeam] can achieve flow[Flow] optimization by using the following four practices[KanbanPractices]:
- Visualization of the Workflow[Workflow,Transparency]
- Limiting Work in Progress[WorkInProgress] (WIP)
- Active management of work items[WorkItems] in progress[WorkInProgress]
- Inspecting and adapting[EmpiricalScrumPillars,Inspection,EmpiricalScrumPillars,Adaptation] the team's Definition of Workflow[DefinitionOfWorkflow]

### Definition of Workflow[DefinitionOfWorkflow]
The four Kanban[KanbanFramework] practices[KanbanPractices] are enabled by the Scrum Team's[ScrumTeam] Definition of Workflow[DefinitionOfWorkflow]. This
definition represents the Scrum Team[ScrumTeam] members' explicit understanding of what their policies are
for following the Kanban[KanbanFramework] practices[KanbanPractices]. This shared understanding improves transparency[EmpiricalScrumPillars,Transparency] and enables
self-management[SelfManagement].
Note that the scope of the Definition of Workflow[DefinitionOfWorkflow] may span beyond the Sprint[ScrumEvents,Sprint] and the Sprint
Backlog[ScrumArtifacts,SprintBacklog]. For instance, a Scrum Team's[ScrumTeam] Definition of Workflow[DefinitionOfWorkflow] may encompass flow[Flow] inside and/or
outside of the Sprint[ScrumEvents,Sprint].
Creating and adapting[EmpiricalScrumPillars,Adaptation] the Definition of Workflow[DefinitionOfWorkflow] is the accountability[Accountable] of the relevant roles on the
Scrum Team[ScrumTeam] as described in the Scrum Guide. No one outside of the Scrum Team[ScrumTeam] should tell the
Scrum Team[ScrumTeam] how to define their Workflow[Workflow].

## Visualization of the Workflow[Workflow] – the Kanban Board[KanbanBoard]
Visualization using the Kanban board[KanbanBoard] is the way the Scrum Team[ScrumTeam] makes its Workflow[Workflow] transparent[EmpiricalScrumPillars,Transparency].
The board's configuration should prompt the right conversations at the right time and proactively
suggest opportunities for improvement[EmpiricalScrumPillars,Adaptation].
Visualization should include the following:
- Defined points at which the Scrum Team[ScrumTeam] considers work to have started and to have
finished.
- A definition of the work items[WorkItems] - the individual units of value[Value] (stakeholder[Stakeholder] value[Value], knowledge
value[Value], process improvement value[Value]) that are flowing through the Scrum Team's[ScrumTeam] system
(most likely Product Backlog items[ScrumArtifacts,ProductBacklog,ProductBacklogItem] (PBIs)).
- A definition of the workflow[Workflow] states that the work items[WorkItems] flow[Flow] through from start to finish
(of which there must be at least one active state).
- Explicit policies about how work flows[Flow] through each state (which may include items from
a Scrum Team's[ScrumTeam] Definition of Done[ScrumArtifacts,Increment,Commitment,DefinitionOfDone] and pull policies between stages).
- Policies for limiting Work in Progress[WorkInProgress] (WIP).

## Limiting Work in Progress[WorkInProgress] (WIP)
Work in Progress[WorkInProgress] (WIP) refers to the work items[WorkItems] the Scrum Team[ScrumTeam] has started but has not yet
finished.
Scrum Teams[ScrumTeam] using Kanban[KanbanFramework] must explicitly limit the number of these work items[WorkItems] in progress[WorkInProgress]. A
Scrum Team[ScrumTeam] can explicitly limit WIP[WorkInProgress] however they see fit but should stick to that limit once
established.
The primary effect of limiting WIP[WorkInProgress] is that it creates a pull system[PullSystem]. It is called a pull system[PullSystem] because
the team[ScrumTeam] starts work (i.e. pulls) on an item only when it is clear that it has the capacity to do so.
When the WIP[WorkInProgress] drops below the defined limit, that is the signal to start new work. Note this is
different from a push system, which demands that work starts on an item whenever it is
requested.
Limiting WIP[WorkInProgress] helps flow[Flow] and improves the Scrum Team's[ScrumTeam] self-management[SelfManagement], focus[ScrumValues,Focus], commitment[ScrumValues,Commitment],
and collaboration.

## Active Management of Work Items[WorkItems] in Progress[WorkInProgress]
Limiting WIP[WorkInProgress] is necessary to achieve flow[Flow], but it alone is not sufficient. The third practice[KanbanPractices] to
establish flow[Flow] is the active management of work items[WorkItems] in progress[WorkInProgress]. Within the Sprint[ScrumEvents,Sprint], this
management by the Scrum Team[ScrumTeam] can take several forms, including but not limited to the
following:
- Making sure that work items[WorkItems] are only pulled into the Workflow[Workflow] at about the same rate
that they leave the Workflow[Workflow].
- Ensuring work items[WorkItems] aren't left to age unnecessarily.
- Responding quickly to blocked or queued work items[WorkItems] as well those that are exceeding the
team's expected Cycle Time[CycleTime] levels (See Service Level Expectation[ServiceLevelExpectation] - SLE).
Service Level Expectation[ServiceLevelExpectation] (SLE)
A service level expectation[ServiceLevelExpectation] (SLE) forecasts[Forecast] how long it should take a given item to flow[Flow] from start
to finish within the Scrum Team's[ScrumTeam] Workflow[Workflow]. The Scrum Team[ScrumTeam] uses its SLE[ServiceLevelExpectation] to find active flow[Flow] issues
and to inspect[EmpiricalScrumPillars,Inspection] and adapt[EmpiricalScrumPillars,Adaptation] in cases of falling below those expectations.
The SLE[ServiceLevelExpectation] itself has two parts: a range of elapsed days and a probability associated with that period
(e.g., 85% of work items[WorkItems] should be finished in eight days or less). The SLE[ServiceLevelExpectation] should be based on the
Scrum Team's[ScrumTeam] historical Cycle Time[CycleTime], and once calculated, the Scrum Team[ScrumTeam] should make it
transparent[EmpiricalScrumPillars,Transparency]. If no historical Cycle Time[CycleTime] data exists, the Scrum Team[ScrumTeam] should make its best guess
and then inspect[EmpiricalScrumPillars,Inspection] and adapt[EmpiricalScrumPillars,Adaptation] once there is enough historical data to do a proper SLE[ServiceLevelExpectation] calculation.

## Inspect and Adapt[EmpiricalScrumPillars,Inspection,EmpiricalScrumPillars,Adaptation] the Definition of Workflow[DefinitionOfWorkflow]
The Scrum Team[ScrumTeam] uses the existing Scrum events[ScrumEvents] to inspect[EmpiricalScrumPillars,Inspection] and adapt[EmpiricalScrumPillars,Adaptation] its Definition of Workflow[DefinitionOfWorkflow],
thereby helping to improve empiricism[Empiricism] and optimizing the value[Value] the Scrum Team[ScrumTeam] delivers.
The following are aspects of the Definition of Workflow[DefinitionOfWorkflow] the Scrum Team[ScrumTeam] might adopt:
- Visualization policies - for example, Workflow[Workflow] states - either changing the actual
Workflow[Workflow] or bringing more transparency[EmpiricalScrumPillars,Transparency] to an area in which the team[ScrumTeam] wants to inspect[EmpiricalScrumPillars,Inspection]
and adapt[EmpiricalScrumPillars,Adaptation].
- How-we-work policies - these can directly address an impediment[Impediments]. For example, adjusting
WIP[WorkInProgress] limits and SLEs[ServiceLevelExpectation] or changing the batch size (how often items are pulled between
states) can have a dramatic impact. 

# Flow-Based Events[ScrumEvents]
Kanban[KanbanFramework] in a Scrum[Scrum] context does not require any additional events[ScrumEvents] to those outlined in The Scrum
Guide. However, using a flow-based[Flow] perspective and metrics in Scrum's[Scrum] events[ScrumEvents] strengthens
Scrum's[Scrum] empirical[Empiricism] approach.

## The Sprint[ScrumEvents,Sprint]
The Kanban[KanbanFramework] complementary practices[KanbanPractices] don't invalidate the need for Scrum's[Scrum] Sprint[ScrumEvents,Sprint]. The Sprint[ScrumEvents,Sprint] and
its events[ScrumEvents] provide opportunities for inspection[EmpiricalScrumPillars,Inspection] and adaptation[EmpiricalScrumPillars,Adaptation] of both product[Product] and process. It's a
common misconception that teams[ScrumTeam] can only deliver value[Value,ValueDelivery] once per Sprint[ScrumEvents,Sprint]. In fact, they must
deliver value[Value,ValueDelivery] at least once per Sprint[ScrumEvents,Sprint]. Teams[ScrumTeam] using Scrum[Scrum] with Kanban[KanbanFramework] use the Sprint[ScrumEvents,Sprint] and its events[ScrumEvents]
as a feedback improvement loop by collaboratively inspecting[EmpiricalScrumPillars,Inspection] and adapting[EmpiricalScrumPillars,Adaptation] their Definition of
Workflow[DefinitionOfWorkflow] and flow[Flow] metrics.
Kanban[KanbanFramework] practices[KanbanPractices] can help Scrum Teams[ScrumTeam] improve flow[Flow] and create an environment where decisions
are made just-in-time throughout the Sprint[ScrumEvents,Sprint] based on inspection[EmpiricalScrumPillars,Inspection] and adaptation[EmpiricalScrumPillars,Adaptation]. In this
environment, Scrum Teams[ScrumTeam] rely on the Sprint Goal[ScrumArtifacts,SprintBacklog,Commitment,SprintGoal] and close collaboration within the Scrum Team[ScrumTeam]
to optimize the value[Value] delivered in the Sprint[ScrumEvents,Sprint]

## Sprint Planning[ScrumEvents,SprintPlanning]
A flow-based[Flow] Sprint Planning[ScrumEvents,SprintPlanning] meeting uses flow[Flow] metrics as an aid for developing the Sprint
Backlog[ScrumArtifacts,SprintBacklog]. Reviewing historical throughput[Throughput] can help a Scrum Team[ScrumTeam] understand their capacity for
the next Sprint[ScrumEvents,Sprint].

## Daily Scrum[ScrumEvents,DailyScrum]
A flow-based[Flow] Daily Scrum[ScrumEvents,DailyScrum] focuses[ScrumValues,Focus] the Developers[ScrumTeam,Developers] on doing everything they can to maintain
consistent flow[Flow]. While the goal of the Daily Scrum[ScrumEvents,DailyScrum] remains the same as outlined in The Scrum
Guide, the meeting itself takes place around the Kanban board[KanbanBoard] and focuses[ScrumValues,Focus] on where flow[Flow] is
lacking and on what actions the Developers[ScrumTeam,Developers] can take to get it back.
Additional things to consider during a flow-based[Flow] Daily Scrum[ScrumEvents,DailyScrum] include the following:
- What work items[WorkItems] are blocked and what can be done to get them unblocked?
- What work is flowing slower than expected? What is the Work Item Age[WorkItemAge] of each item in
progress[WorkInProgress]? What work items[WorkItems] have violated or are about to violate their SLE[ServiceLevelExpectation] and what can
the Scrum Team[ScrumTeam] do to get that work completed?
- Are there any factors not represented on the board that may impact our ability to
complete work today?
- Have we learned anything new that might change what the Scrum Team[ScrumTeam] has planned to
work on next?
- Have we broken our WIP[WorkInProgress] limit? And what can we do to ensure we can complete the work
in progress[WorkInProgress]?

## Sprint Review[ScrumEvents,SprintReview]
The Scrum Guide provides an outline of the Sprint Review[ScrumEvents,SprintReview]. Inspecting[EmpiricalScrumPillars,Inspection] Kanban[KanbanFramework] flow[Flow] metrics as part
of the review can create opportunities for new conversations about monitoring progress towards
the Product Goal[ScrumArtifacts,ProductBacklog,Commitment,ProductGoal]. Reviewing Throughput[Throughput] can provide additional information when the Product
Owner[ScrumTeam,ProductOwner] discusses likely delivery dates.

## Sprint Retrospective[ScrumEvents,SprintRetrospective]
A flow-based[Flow] Sprint Retrospective[ScrumEvents,SprintRetrospective] adds the inspection[EmpiricalScrumPillars,Inspection] of flow[Flow] metrics and analytics to help
determine what improvements the Scrum Team[ScrumTeam] can make to its processes. The Scrum Team[ScrumTeam] using
Kanban[KanbanFramework] also inspects[EmpiricalScrumPillars,Inspection] and adapts[EmpiricalScrumPillars,Adaptation] the Definition of Workflow[DefinitionOfWorkflow] to optimize the flow[Flow] in the next
Sprint[ScrumEvents,Sprint]. Using a cumulative flow[Flow] diagram to visualize a Scrum Team's[ScrumTeam] WIP[WorkInProgress], approximate average
Cycle Time[CycleTime] and average Throughput[Throughput] can be valuable.
In addition to the Sprint Retrospective[ScrumEvents,SprintRetrospective], the Scrum Team[ScrumTeam] should consider taking advantage of
process inspection[EmpiricalScrumPillars,Inspection] and adaptation[EmpiricalScrumPillars,Adaptation] opportunities as they emerge throughout the Sprint[ScrumEvents,Sprint].
Similarly, changes to a Scrum Team's[ScrumTeam] Definition of Workflow[DefinitionOfWorkflow] may happen at any time. Because
these changes will have a material impact on how the Scrum Team[ScrumTeam] performs, changes made
during the regular cadence[Cadence] provided by the Sprint Retrospective[ScrumEvents,SprintRetrospective] event will reduce complexity[ReduceComplexity] and
improve focus[ScrumValues,Focus], commitment[ScrumValues,Commitment] and transparency[EmpiricalScrumPillars,Transparency].

# Increment[ScrumArtifacts,Increment]
Scrum[Scrum] requires the team[ScrumTeam] to create (at minimum) a valuable, useful Increment[ScrumArtifacts,Increment] every Sprint[ScrumEvents,Sprint].
Scrum's[Scrum] empiricism[Empiricism] encourages the creation of multiple valuable increments[ScrumArtifacts,Increment] during the Sprint[ScrumEvents,Sprint] to
enable fast inspect[EmpiricalScrumPillars,Inspection] and adapt[EmpiricalScrumPillars,Adaptation] feedback loops. Kanban[KanbanFramework] helps manage the flow[Flow] of these feedback
loops more explicitly and allows the Scrum Team[ScrumTeam] to identify bottlenecks, constraints, and
impediments[Impediments] to enable this faster, more continuous delivery of value[Value,ValueDelivery].

# Endnote
Scrum[Scrum] is not a process or technique. It is a framework[Framework] within which people can address complex
adaptive problems while productively and creatively delivering products[Product] of the highest possible
value[Value]. As The Scrum Guide points out, it functions well as a container for other techniques,
methodologies, and practices[ExtendScrum].
The flow[Flow] optimization practices[KanbanPractices] of Kanban[KanbanFramework] provide Scrum Teams[ScrumTeam] with additional opportunities to
inspect[EmpiricalScrumPillars,Inspection] the right thing, at the right time, and then based on that inspection[EmpiricalScrumPillars,Inspection], adapt[EmpiricalScrumPillars,Adaptation] as needed.
Kanban's[KanbanFramework] hyperfocus on transparency[EmpiricalScrumPillars,Transparency], visualization, and flow[Flow] maximizes feedback, empiricism[Empiricism],
and ultimately the delivery of value[Value,ValueDelivery].

# History and Acknowledgments
Kanban's[KanbanFramework] use in the context of creative knowledge work mostly originated in 2006 on a team at
Corbis, a media licensing company in Seattle. Those practices[KanbanPractices] quickly spread to encompass a large
and diverse international community that over the years continued to enhance and evolve the
approach.
This guide was developed collaboratively by Scrum.org, its Professional Scrum Trainer
Community, Steve Porter, Yuval Yeret, and Daniel Vacanti.
A special thank you to Glaudia Califano, Louis-Philippe Carignan, Charles Bradley, Jose Casal, Andy
Hiles, Jesse Houwing, and Julia Wester for their contributions. We also owe a debt of gratitude to
all those practitioners who have in the past contributed to make Kanban[KanbanFramework] a viable and successful
lean-agile strategy.

# License
2021 Scrum.org. Offered for license under the Attribution Share-Alike license of Creative Commons,
accessible at http://creativecommons.org/licenses/by-sa/4.0/legalcode and also described in summary
form at http://creativecommons.org/licenses/by-sa/4.0/. By utilizing this Kanban Guide for Scrum Teams,
you acknowledge and agree that you have read and agree to be bound by the terms of the Attribution
Share-Alike license of Creative Commons
