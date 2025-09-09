export const exerciseContent = {
  1: {
    id: 1,
    title: "Reliability Metrics Worksheet",
    description: "Calculate key reliability metrics and develop a maintenance strategy recommendation for the pump failure analysis:",
    fields: [
      {
        id: 'total_operating_time',
        label: 'Total operating time between failures (hours)',
        type: 'number',
        placeholder: 'Calculate total hours from failure data...'
      },
      {
        id: 'number_of_failures',
        label: 'Number of failures recorded',
        type: 'number',
        placeholder: 'Count the failure events...'
      },
      {
        id: 'mtbf_calculation',
        label: 'MTBF Calculation (Total time ÷ Number of failures)',
        type: 'number',
        placeholder: 'Calculate MTBF in hours...'
      },
      {
        id: 'current_pm_interval',
        label: 'Current PM interval (hours)',
        type: 'number',
        placeholder: 'Enter current maintenance interval...'
      },
      {
        id: 'recommended_interval',
        label: 'Recommended PM interval (75% of MTBF)',
        type: 'number',
        placeholder: 'Calculate 75% of MTBF...'
      },
      {
        id: 'failure_pattern',
        label: 'Failure Pattern Assessment',
        type: 'select',
        options: ['Consistent wear pattern', 'Random failure pattern', 'Infant mortality pattern']
      },
      {
        id: 'maintenance_strategy',
        label: 'Your Maintenance Strategy Recommendation',
        type: 'textarea',
        placeholder: 'Describe your recommended approach based on the analysis...'
      },
      {
        id: 'cost_benefit_analysis',
        label: 'Cost-Benefit Justification',
        type: 'textarea',
        placeholder: 'Explain the economic impact of your recommendation...'
      }
    ],
    modelAnswer: {
      sections: [
        {
          title: "MTBF Calculation Results",
          points: [
            "Total operating time: 6,350 hours (2,100 + 1,850 + 2,400)",
            "Number of failures: 3 documented failure events",
            "MTBF = 6,350 ÷ 3 = 2,117 hours average between failures",
            "Current PM interval: 2,190 hours (every 3 months)",
            "Recommended interval: 75% of MTBF = 1,588 hours (approximately 2 months)"
          ]
        },
        {
          title: "Failure Pattern Analysis",
          points: [
            "Consistent wear pattern identified - failures clustered around 2,000-hour operational mark",
            "Pattern indicates predictable wear-related failure mode rather than random events",
            "Current PM interval slightly exceeds optimal timing, allowing wear to progress too far",
            "Reducing interval to 75% of MTBF will catch wear before failure occurs"
          ]
        },
        {
          title: "Strategic Recommendation",
          points: [
            "Reduce PM interval from 3 months to 2 months (1,588 hours)",
            "Enhance PM procedures to address specific wear-related failure modes",
            "Implement condition monitoring to track wear progression between PMs",
            "Avoid over-maintenance by using data-driven intervals rather than arbitrary monthly scheduling"
          ]
        }
      ],
      keyTakeaways: [
        "Use actual reliability data, not operational pressure, to determine optimal maintenance strategies",
        "MTBF calculations provide objective basis for maintenance interval optimization",
        "Failure pattern analysis reveals whether issues are predictable wear or random events",
        "Data-driven maintenance prevents both under-maintenance and over-maintenance problems"
      ]
    }
  },
  2: {
    id: 2,
    title: "Technical Requirement Translation Matrix",
    description: "Translate Sarah's technical requirements into field-executable work steps for the heat exchanger cleaning:",
    fields: [
      {
        id: 'citric_acid_cleaning',
        label: 'Technical Spec: "15% citric acid tube cleaning" - Field-Executable Step',
        type: 'textarea',
        placeholder: 'Translate into specific executable instructions...'
      },
      {
        id: 'citric_acid_tools',
        label: 'Tools/Skills Required for Acid Cleaning',
        type: 'textarea',
        placeholder: 'List required equipment and qualifications...'
      },
      {
        id: 'citric_acid_criteria',
        label: 'Acceptance Criteria for Acid Cleaning',
        type: 'textarea',
        placeholder: 'Define measurable acceptance standards...'
      },
      {
        id: 'ut_measurement',
        label: 'Technical Spec: "UT measurement at 12 points" - Field-Executable Step',
        type: 'textarea',
        placeholder: 'Translate into specific measurement instructions...'
      },
      {
        id: 'ut_tools',
        label: 'Tools/Skills Required for UT Measurements',
        type: 'textarea',
        placeholder: 'List required equipment and certifications...'
      },
      {
        id: 'ut_criteria',
        label: 'Acceptance Criteria for UT Measurements',
        type: 'textarea',
        placeholder: 'Define minimum wall thickness requirements...'
      },
      {
        id: 'fouling_factor',
        label: 'Technical Spec: "Fouling factor <0.0008" - Field-Executable Step',
        type: 'textarea',
        placeholder: 'Translate into calculation procedure...'
      },
      {
        id: 'efficiency_verification',
        label: 'Technical Spec: "Delta-T efficiency verification" - Field-Executable Step',
        type: 'textarea',
        placeholder: 'Translate into temperature measurement procedure...'
      },
      {
        id: 'quality_verification',
        label: 'Quality Verification Points Throughout Process',
        type: 'textarea',
        placeholder: 'Identify critical verification checkpoints...'
      },
      {
        id: 'technical_support',
        label: 'Technical Support Requirements (During execution and verification)',
        type: 'textarea',
        placeholder: 'Specify when reliability engineer involvement is needed...'
      }
    ],
    modelAnswer: {
      sections: [
        {
          title: "Field-Executable Procedure Translation",
          points: [
            "15% citric acid cleaning: 'Circulate 15% citric acid solution for 4 hours at 140°F, then flush with demineralized water until neutral pH achieved'",
            "UT measurements: 'Measure wall thickness at 12 marked inspection points using calibrated UT gauge, record all readings on inspection form'",
            "Fouling factor calculation: 'Calculate fouling factor using inlet/outlet temperatures and flow rates with provided calculation worksheet'",
            "Efficiency verification: 'Record temperatures across heat exchanger at design flow rate, compare delta-T to design specifications'"
          ]
        },
        {
          title: "Tools and Skills Requirements",
          points: [
            "Chemical mixing equipment, pH strips, temperature monitoring for acid cleaning",
            "Certified UT technician with calibrated thickness gauge for measurements",
            "Flow meters, temperature probes, calculation worksheets for fouling analysis",
            "Calibrated temperature instruments for efficiency testing"
          ]
        },
        {
          title: "Quality Verification Framework",
          points: [
            "Chemical concentration verification before cleaning begins",
            "Wall thickness measurements documented at all 12 specified points",
            "Efficiency calculation verified by reliability engineer before completion",
            "All acceptance criteria met and documented before return to service"
          ]
        }
      ],
      keyTakeaways: [
        "Effective reliability planning requires collaborative translation of technical requirements",
        "Field-executable procedures preserve reliability intent while enabling practical execution",
        "Clear acceptance criteria prevent quality issues during execution",
        "Structured collaboration between planners and reliability engineers improves outcomes"
      ]
    }
  },
  3: {
    id: 3,
    title: "Context Adaptation Planning Matrix",
    description: "Design appropriate planning approaches for different maintenance contexts while maintaining reliability principles:",
    fields: [
      {
        id: 'planning_horizon_routine',
        label: 'Planning Horizon - Routine Compressor PM',
        type: 'text',
        placeholder: 'How far in advance should routine work be planned?'
      },
      {
        id: 'planning_horizon_turnaround',
        label: 'Planning Horizon - Turnaround Vessel Inspection',
        type: 'text',
        placeholder: 'How far in advance should turnaround work be planned?'
      },
      {
        id: 'detail_level_routine',
        label: 'Detail Level - Routine Compressor PM',
        type: 'textarea',
        placeholder: 'What level of procedural detail is appropriate?'
      },
      {
        id: 'detail_level_turnaround',
        label: 'Detail Level - Turnaround Vessel Inspection',
        type: 'textarea',
        placeholder: 'What level of procedural detail is needed?'
      },
      {
        id: 'safety_requirements_routine',
        label: 'Safety Requirements - Routine Work',
        type: 'textarea',
        placeholder: 'What safety considerations apply to online maintenance?'
      },
      {
        id: 'safety_requirements_turnaround',
        label: 'Safety Requirements - Turnaround Work',
        type: 'textarea',
        placeholder: 'What safety considerations apply to turnaround work?'
      },
      {
        id: 'quality_verification_routine',
        label: 'Quality Verification - Routine Work',
        type: 'textarea',
        placeholder: 'What verification is needed for routine maintenance?'
      },
      {
        id: 'quality_verification_turnaround',
        label: 'Quality Verification - Turnaround Work',
        type: 'textarea',
        placeholder: 'What verification is needed for complex inspections?'
      },
      {
        id: 'reliability_elements_maintained',
        label: 'Reliability Elements Maintained in Both Contexts',
        type: 'textarea',
        placeholder: 'What reliability principles apply regardless of context?'
      },
      {
        id: 'context_adaptations',
        label: 'Context-Specific Adaptations Summary',
        type: 'textarea',
        placeholder: 'Summarize how approaches differ while maintaining reliability focus...'
      }
    ],
    modelAnswer: {
      sections: [
        {
          title: "Context Comparison Analysis",
          points: [
            "Routine Work: 2-3 weeks advance planning with standard procedures enhanced for reliability monitoring",
            "Turnaround Work: 3-6 months detailed planning with comprehensive procedures and contingency planning",
            "Routine Safety: Online safety protocols with operational coordination and standard PPE",
            "Turnaround Safety: Confined space entry protocols, specialized PPE, hot work permits, multiple safety systems"
          ]
        },
        {
          title: "Quality and Documentation Differences",
          points: [
            "Routine Verification: Key parameter checks, vibration measurements, standard completion records",
            "Turnaround Verification: Multiple hold points, NDT verification, engineering review, detailed photographic documentation",
            "Routine Resources: Standard tools plus precision alignment equipment",
            "Turnaround Resources: Specialized NDT equipment, metallurgy support, certified inspectors"
          ]
        },
        {
          title: "Consistent Reliability Elements",
          points: [
            "Specific acceptance criteria for critical parameters in both contexts",
            "Targeted inspection points based on failure modes regardless of work type",
            "Verification of completed work quality before return to service",
            "Documentation of as-found and as-left conditions for reliability tracking"
          ]
        }
      ],
      keyTakeaways: [
        "Reliability principles remain consistent while application adapts to operational context",
        "Risk level and access constraints determine appropriate planning detail",
        "Context-specific procedures prevent both over-planning and under-planning",
        "Essential reliability elements must be maintained across all maintenance contexts"
      ]
    }
  },
  4: {
    id: 4,
    title: "Work Package Enhancement Worksheet",
    description: "Transform the basic seal replacement into a reliability-enhanced work package that addresses chronic failure issues:",
    fields: [
      {
        id: 'pre_installation_step1',
        label: 'Pre-Installation Step 1: Shaft Condition Assessment',
        type: 'textarea',
        placeholder: 'Define shaft inspection requirements...'
      },
      {
        id: 'pre_installation_step2',
        label: 'Pre-Installation Step 2: Shaft Runout Measurement',
        type: 'textarea',
        placeholder: 'Specify measurement procedure and acceptance criteria...'
      },
      {
        id: 'pre_installation_step3',
        label: 'Pre-Installation Step 3: Pump Alignment Verification',
        type: 'textarea',
        placeholder: 'Define alignment verification requirements...'
      },
      {
        id: 'installation_step4',
        label: 'Installation Step 4: Surface Preparation',
        type: 'textarea',
        placeholder: 'Specify cleaning and preparation requirements...'
      },
      {
        id: 'installation_step5',
        label: 'Installation Step 5: Proper Installation Methods',
        type: 'textarea',
        placeholder: 'Define installation procedures and heating methods...'
      },
      {
        id: 'installation_step6',
        label: 'Installation Step 6: Torque Specifications',
        type: 'textarea',
        placeholder: 'Specify torque values and calibrated tool requirements...'
      },
      {
        id: 'verification_step7',
        label: 'Verification Step 7: Seal Face Verification',
        type: 'textarea',
        placeholder: 'Define flatness and perpendicularity checks...'
      },
      {
        id: 'verification_step8',
        label: 'Verification Step 8: Controlled Startup',
        type: 'textarea',
        placeholder: 'Specify run-in procedure and monitoring...'
      },
      {
        id: 'verification_step9',
        label: 'Verification Step 9: Performance Monitoring',
        type: 'textarea',
        placeholder: 'Define monitoring period and acceptance criteria...'
      },
      {
        id: 'acceptance_criteria',
        label: 'Overall Acceptance Criteria Summary',
        type: 'textarea',
        placeholder: 'Summarize all acceptance standards that must be met...'
      },
      {
        id: 'special_tools_skills',
        label: 'Special Tools and Skills Required',
        type: 'textarea',
        placeholder: 'List specialized equipment and certified personnel needed...'
      },
      {
        id: 'documentation_requirements',
        label: 'Documentation Requirements',
        type: 'textarea',
        placeholder: 'Specify what must be recorded and verified...'
      }
    ],
    modelAnswer: {
      sections: [
        {
          title: "Enhanced Pre-Installation Procedures",
          points: [
            "Inspect shaft for scoring, pitting, or wear that could damage new seal - photograph any defects",
            "Measure shaft runout using dial indicator - must be <0.002\" TIR at seal location",
            "Verify pump alignment within specification before seal installation - document readings",
            "Clean all seal surfaces to specified cleanliness standard using approved solvents"
          ]
        },
        {
          title: "Precision Installation Steps",
          points: [
            "Install seal components using proper heating methods for interference fits - temperature not to exceed manufacturer specifications",
            "Apply specified torque values using calibrated torque wrench (85 ± 5 ft-lb) - verify calibration current",
            "Verify seal face flatness and perpendicularity within 0.0005\" using precision measuring tools",
            "Document all installation measurements and verify against acceptance criteria before proceeding"
          ]
        },
        {
          title: "Comprehensive Verification and Testing",
          points: [
            "Conduct controlled startup with 30-minute run-in at 50% speed - monitor for any leakage or abnormal operation",
            "Monitor seal performance for 24 hours before returning to full service - check vibration, temperature, leakage",
            "Record as-found shaft condition, alignment values achieved, and final performance measurements",
            "Verify stable operation with vibration <0.15\" peak at 1X running speed before completion"
          ]
        }
      ],
      keyTakeaways: [
        "Reliability-enhanced work packages address specific failure modes through detailed procedures",
        "Clear acceptance criteria prevent installation defects that cause premature failures",
        "Verification steps confirm proper installation before equipment return to service",
        "Enhanced procedures reduce failure recurrence and long-term maintenance costs"
      ]
    }
  }
}