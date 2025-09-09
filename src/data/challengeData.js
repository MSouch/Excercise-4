export const challengeContent = {
  1: {
    id: 1,
    title: "Reliability Metrics and Failure Analysis",
    scenario: {
      time: "Monday, 8:00 AM - Planning Office",
      description: "You arrive to find an urgent email from the operations supervisor. The main feed pump in Unit 200 failed again last night - the third failure in 8 months. This pump is critical to production, and operations is frustrated with the recurring issues.\n\nHistorical data shows:\n• Operating time between failures: 2,100 hours, 1,850 hours, 2,400 hours\n• Average repair time: 6 hours per failure\n• Current PM interval: Every 3 months (2,190 hours)\n\nOperations wants you to either increase the PM frequency to monthly or switch to a completely different pump model. The reliability engineer suggests using the actual failure data to determine the right approach."
    },
    question: "What's your next step as the planner?",
    options: {
      A: "Immediately change to monthly PM to satisfy operations",
      B: "Request a new pump procurement without analyzing current performance",
      C: "Calculate MTBF and use failure pattern analysis to determine appropriate maintenance strategy",
      D: "Continue current 3-month PM intervals since they're close to the failure pattern"
    },
    correctAnswer: "C",
    feedback: {
      A: {
        correct: false,
        message: "Reacting to pressure without data analysis often leads to over-maintenance, wasted resources, and potential introduction of defects through unnecessary interventions.",
        guidingQuestion: "What does the actual failure data tell you about the pump's reliability pattern before you change the strategy?",
        explanation: "Studies show that 35% of maintenance-induced failures result from unnecessary maintenance performed too frequently."
      },
      B: {
        correct: false,
        message: "Replacing equipment without understanding failure causes wastes capital and often repeats the same reliability problems with new equipment.",
        guidingQuestion: "How can analyzing the current pump's failure pattern help you determine if the issue is the equipment or the maintenance approach?",
        explanation: "60% of 'problem equipment' replacements fail to improve reliability because the root causes weren't addressed."
      },
      C: {
        correct: true,
        message: "This systematic approach demonstrates mastery of reliability analysis by using actual equipment performance data to optimize maintenance strategies.",
        explanation: "MTBF calculation (2,117 hours average) shows current PM interval is appropriate timing-wise. Failure pattern analysis reveals whether issues are random or wear-related. Data-driven decisions prevent both over-maintenance and under-maintenance while addressing actual reliability issues rather than symptoms."
      },
      D: {
        correct: false,
        message: "Continuing the same approach that's producing failures ignores clear data showing the current strategy isn't working effectively.",
        guidingQuestion: "What specific reliability calculations could help you optimize the maintenance interval?",
        explanation: "Reactive planning leads to 40% higher maintenance costs and 25% more unplanned downtime than data-driven approaches."
      }
    }
  },
  2: {
    id: 2,
    title: "Reliability Department Collaboration",
    scenario: {
      time: "Tuesday, 10:30 AM - Planning Office",
      description: "Sarah, the reliability engineer, approaches your desk with a technical analysis report. She's identified that the heat exchanger in Unit 100 has a fouling issue causing 30% efficiency loss. Her root cause analysis shows specific cleaning procedures and inspection points that could prevent the problem.\n\nSarah hands you a detailed technical specification:\n• 'Tube-side cleaning with 15% citric acid solution'\n• 'Shell-side inspection for erosion using UT measurements at 12 specified points'\n• 'Acceptance criteria: fouling factor <0.0008 hr-ft²-°F/BTU'\n• 'Post-cleaning efficiency test with delta-T verification'\n\nSarah says: 'Can you turn this into a work package the technicians can actually execute?'"
    },
    question: "How do you handle this collaboration?",
    options: {
      A: "Schedule a joint planning session to translate technical requirements into executable procedures while ensuring all reliability elements are captured",
      B: "Take the technical specs and create the work package independently using your standard format",
      C: "Tell Sarah her specifications are too technical and ask her to simplify them first",
      D: "Forward the technical specs directly to the technicians and let them figure out the details"
    },
    correctAnswer: "A",
    feedback: {
      A: {
        correct: true,
        message: "This collaborative approach demonstrates effective reliability planning by preserving technical accuracy while ensuring execution feasibility.",
        explanation: "Joint sessions ensure reliability requirements aren't lost in translation. Planning expertise identifies practical implementation considerations. Direct collaboration clarifies technical rationale and acceptance criteria while creating shared ownership between specialists."
      },
      B: {
        correct: false,
        message: "Working independently often results in lost technical details, misunderstood requirements, and procedures that don't achieve the intended reliability outcomes.",
        guidingQuestion: "How can you ensure the reliability engineer's technical expertise transfers accurately into your executable procedures?",
        explanation: "45% of reliability improvements fail because technical requirements get diluted during work package development."
      },
      C: {
        correct: false,
        message: "Dismissing technical requirements prevents proper reliability improvement and wastes the reliability engineer's analysis work.",
        guidingQuestion: "What collaboration approach would help you understand the technical requirements while making them executable?",
        explanation: "Plants that don't translate technical requirements properly see 60% less improvement from reliability initiatives."
      },
      D: {
        correct: false,
        message: "Technicians shouldn't have to interpret technical specifications - that's the planner's role to create clear, executable instructions.",
        guidingQuestion: "What's your responsibility as a planner in bridging the gap between technical requirements and field execution?",
        explanation: "Direct technical handoffs result in 70% more execution errors and incomplete reliability improvements."
      }
    }
  },
  3: {
    id: 3,
    title: "Context-Specific Reliability Planning",
    scenario: {
      time: "Thursday, 2:15 PM - Planning Office",
      description: "You're juggling two different reliability-related planning requests that came in this afternoon:\n\nRequest 1: Routine quarterly maintenance on the main air compressor scheduled for next week during normal operations. The reliability engineer wants enhanced vibration monitoring and precision alignment checks added to the standard PM.\n\nRequest 2: Critical reactor vessel inspection during the upcoming turnaround in 3 months. This inspection will involve confined space entry, specialized NDT testing, and potential metallurgy sampling based on findings.\n\nBoth requests involve the same reliability principles, but the operations manager is questioning why they need different planning approaches. 'Why can't we just use the same detailed procedures for both jobs?'"
    },
    question: "How do you explain and implement context-appropriate reliability planning?",
    options: {
      A: "Use identical detailed procedures for both jobs to ensure consistency",
      B: "Let the reliability engineer plan both jobs since they involve technical requirements",
      C: "Apply minimal planning to the routine work and detailed planning only to the turnaround work",
      D: "Develop context-specific approaches that adapt reliability principles to operational constraints while maintaining essential reliability elements"
    },
    correctAnswer: "D",
    feedback: {
      A: {
        correct: false,
        message: "Identical procedures ignore operational constraints and contexts, potentially creating safety issues during routine maintenance and insufficient detail for complex turnaround work.",
        guidingQuestion: "What specific operational differences between routine maintenance and turnaround work require different planning approaches?",
        explanation: "One-size-fits-all planning leads to 50% more maintenance delays and 30% more safety incidents due to inappropriate procedures."
      },
      B: {
        correct: false,
        message: "Planners are responsible for translating technical requirements into executable work packages regardless of the reliability engineer's involvement.",
        guidingQuestion: "What's your unique contribution as a planner in adapting reliability requirements to different maintenance contexts?",
        explanation: "When planners abdicate their role, work packages lack practical execution considerations and create field problems."
      },
      C: {
        correct: false,
        message: "Minimal planning for routine work ignores reliability opportunities during normal operations and wastes the chance for proactive reliability improvement.",
        guidingQuestion: "How can you maintain reliability focus in routine work while adapting to operational constraints?",
        explanation: "Poor routine maintenance planning results in 40% more equipment failures between turnarounds."
      },
      D: {
        correct: true,
        message: "Context-specific approaches demonstrate advanced reliability planning by adapting principles to operational realities while maintaining reliability focus.",
        explanation: "Different contexts have different safety, access, and time limitations. Risk-appropriate detail matches planning complexity to work complexity. Resource optimization prevents over-planning routine work and under-planning complex work while maintaining reliability consistency."
      }
    }
  },
  4: {
    id: 4,
    title: "Reliability-Enhanced Work Package Development",
    scenario: {
      time: "Friday, 11:45 AM - Planning Office",
      description: "It's Friday morning, and you've just received a routine work request: 'Replace mechanical seal on pump P-401A.' The basic work package template would typically include: remove old seal, install new seal, test for leaks, return to service.\n\nHowever, this pump has failed three times in the past year due to seal problems. The reliability engineer's failure analysis shows the issues are related to improper installation techniques, inadequate alignment verification, and insufficient run-in procedures.\n\nYour maintenance supervisor stops by: 'I need this package ready by Monday. It's just a standard seal replacement - use the template and move on to more important work.'"
    },
    question: "How do you approach this work package development?",
    options: {
      A: "Use the standard template as requested to meet the Monday deadline",
      B: "Enhance the work package with reliability-specific job steps, precision requirements, and verification procedures based on failure analysis",
      C: "Delay the package until you can do a complete failure analysis review",
      D: "Ask the reliability engineer to write the work package since they did the failure analysis"
    },
    correctAnswer: "B",
    feedback: {
      A: {
        correct: false,
        message: "Using standard templates for recurring failure items perpetuates reliability problems and wastes maintenance resources on repeated failures.",
        guidingQuestion: "How can you incorporate the failure analysis findings into your work package to prevent future seal failures?",
        explanation: "Generic work packages for chronic reliability issues result in 65% higher failure recurrence rates."
      },
      B: {
        correct: true,
        message: "Reliability-enhanced work packages demonstrate mastery of proactive planning by addressing root causes and preventing failure recurrence.",
        explanation: "Procedures target specific failure mechanisms identified in analysis. Clear acceptance criteria prevent installation defects. Built-in verification points confirm proper installation before return to service. Enhanced procedures reduce failure recurrence and maintenance costs."
      },
      C: {
        correct: false,
        message: "Delaying necessary work to perfect planning often creates operational problems and doesn't efficiently use available reliability information.",
        guidingQuestion: "What reliability enhancements can you implement immediately using the existing failure analysis information?",
        explanation: "Analysis paralysis in planning leads to delayed maintenance and increased failure risk."
      },
      D: {
        correct: false,
        message: "Work package development is the planner's responsibility, and reliability engineers provide technical input rather than create execution procedures.",
        guidingQuestion: "How can you fulfill your planning responsibility while leveraging the reliability engineer's technical analysis?",
        explanation: "When planners don't take ownership of work package quality, execution problems and reliability improvements both suffer."
      }
    }
  }
}