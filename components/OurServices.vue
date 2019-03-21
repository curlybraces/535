<template>
<v-container grid-list-md text-xs-center>
  <v-layout row wrap>
    <v-flex xs6 class="ses_serviceslist">

      <!-- Services 1 -->
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">

        <template v-slot:activator="{ on }">

          <v-card v-on="on">
            <v-card-text class="px-0"></v-card-text>
            <v-img src="/img/EnergyPerformanceSimulation.png" max-height="72" contain />
            <v-card-text class="px-0">Building Performance Simulation</v-card-text>
          </v-card>
        </template>

        <v-card>
          <v-toolbar color="indigo darken-4" class="ses_toolbar_modal pt-1 pb-4 pr-3 pl-2 elevation-3" fixed>
            <v-toolbar-title class="white--text">Building Performance Simulation</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon dark @click="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-divider></v-divider>
          <v-container class="mt-5">
            <v-flex>
              <v-card flat class="mt-5">
                <p>Synergy Efficiency Solutions helps develop and design energy efficient green buildings</p>
                <p>We work with key stakeholders to identify a variety of structural changes that directly impact energy efficiency. Our Energy Efficiency Experts compile a detailed report demonstrating key opportunities for energy efficiency improvement and cost savings. We then help manage your energy, saving money short-term and long-term.</p>
                <h3>Integrated Design Services</h3>
                <p>Our involvement in any sustainable, green building design project starts by setting performance targets that we then help guide to achieve. Our collaboration and involvement with architects, engineers, project managers and other integral parties is critical to success as we build energy savings solutions. There is constant assessment and reassessment as we strive for the optimal solutions.</p>
                <h3>Conceptualization Phase</h3>
                <p>This early stage of the design process focuses on the conceptual basis for the whole design process. This is where all the pre-design analyses are carried out. It is characterized as the definition of the design problem and criteria. This phase can be the most pivotal period to cost effectively reduce energy use in buildings. Our Energy Efficiency Experts assist owners and project teams in a variety of ways before major design efforts take place. This can include original research to support conceptual design ideas or product and service development. At this stage, our team utilizes four areas to guide the process and understand building performance: Pre-Design Climate Analysis, Pre-Design Benchmarking and Goal Setting, Energy "Brain-Storming" and Criteria Definition. In the Conceptualization phase, the focus is understanding and defining how to achieve a sustainable, green building and benefit from long-term energy savings.</p>
                <h3>Criteria Design Phase</h3>
                <p>At this stage, our projects begin to take shape. Major options are evaluated, tested and selected. Our services in this phase help design teams put numbers to ideas, test concepts for energy savings and create green buildings. This phase is likely the most critical as big decisions, such as building form, can drastically affect passive systems options and performance down the road.</p>
                <p>Our Energy Efficiency Experts help clients drive through the process of building design and find the optimal solution concept that holds the maximum potential for energy savings. Some of the steps included in this phase are as follows: Energy Programming, Schematic Daylight Design, Energy Systems Research, Conceptual Energy Systems Design and Commissioning Plan. Arriving to a single concept holding maximum potential for energy savings guides a strong simulation.</p>
                <h3>Detailed Design Phase</h3>
                <p>At this stage in the project, most of the major design elements have been set and the focus is on making the systems function properly. Specific questions about how systems work will need to be figured out during this phase - details down to specific materials and parts may be tested using previously developed simulation models. A much higher level of detail will be applied to the simulation models as more information becomes available through the analysis and design cycle.</p>
                <p>A list of the various design elements we test and various methods and simulation modeling:</p>
                <p>EnergyPlus is one of the components we use to handle simulation and our Energy Efficiency Experts use it in a variety of ways to test and simulate a multitude of areas such as heating, cooling, lighting, ventilation, other energy flows, and water use. With EnergyPlus' innovative simulation capabilities, our team[s] can test and evaluate such things as time-steps less than an hour, modular systems and plant integrated with heat balance-based zone simulation, multi zone air flow, thermal comfort, water us, natural ventilation, and photovoltaic systems. This enables our Energy Efficiency Experts to optimize the building design to use less energy and water leading to sustainable, green buildings that improve the bottom line year over year.</p>
                <h3>Implementation Documents Phase</h3>
                <p>At this stage, our Energy Efficiency Experts focus on documenting the whole process. Our teams coordinate consulting and review the plan of energy systems. This is critical as we ensure and confirm the criteria implemented in construction documents from previous design phases. This aids in the successful implementation of specific measures analyzed during design. Our Energy Efficiency Experts are able to assist with verification and consulting of LEED certification.</p>
                <h3>Construction Phase</h3>
                <p>Our Energy Efficiency Experts help in three specific areas at this stage: Site Observation and System Calibration / Commissioning Assistance, Life Cycle Cost Targeting and Review Change Order Requests for Energy and Load Effecting Systems.</p>
                <h3>Post Occupancy Phase</h3>
                <p>The phase is often overlooked, however we believe it is crucial to long term energy savings and a healthy return on investment for years to come. Our Energy Efficiency Experts can perform and install specific measures for content evaluation. This includes: System and Technology Evaluation, Measurement and Verification, Post Occupancy Survey and Analysis, Yearly energy Benchmarking and Reporting, Energy Audits (various levels) and Evaluation, Measurement, and Verification of Existing Systems.</p>
             </v-card>
            </v-flex>
          </v-container>
        </v-card>

      </v-dialog>

    </v-flex>
    <v-flex xs6 class="ses_serviceslist">

    <!-- Services 2 -->
    <v-dialog v-model="dialog2" fullscreen hide-overlay transition="dialog-bottom-transition">

      <template v-slot:activator="{ on }">

        <v-card v-on="on">
          <v-card-text class="px-0"></v-card-text>
          <v-img src="/img/EnergyAudits.png" max-height="72" contain />
          <v-card-text class="px-0">Energy Audits</v-card-text>

        </v-card>
      </template>

      <v-card>
        <v-toolbar color="indigo darken-4" class="ses_toolbar_modal pt-1 pb-4 pr-3 pl-2 elevation-3" fixed>
          <v-toolbar-title class="white--text">Energy Audits</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog2 = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-container class="mt-5">
          <v-flex>
            <v-card flat class="mt-5">
              <p>Synergy Efficiency Solutions helps develop and design energy efficient green buildings</p>
              <p>We work with key stakeholders to identify a variety of structural changes that directly impact energy efficiency. Our Energy Efficiency Experts compile a detailed report demonstrating key opportunities for energy efficiency improvement and cost savings. We then help manage your energy, saving money short-term and long-term.</p>
              <h3>Integrated Design Services</h3>
              <p>Our involvement in any sustainable, green building design project starts by setting performance targets that we then help guide to achieve. Our collaboration and involvement with architects, engineers, project managers and other integral parties is critical to success as we build energy savings solutions. There is constant assessment and reassessment as we strive for the optimal solutions.</p>
              <h3>Conceptualization Phase</h3>
              <p>This early stage of the design process focuses on the conceptual basis for the whole design process. This is where all the pre-design analyses are carried out. It is characterized as the definition of the design problem and criteria. This phase can be the most pivotal period to cost effectively reduce energy use in buildings. Our Energy Efficiency Experts assist owners and project teams in a variety of ways before major design efforts take place. This can include original research to support conceptual design ideas or product and service development. At this stage, our team utilizes four areas to guide the process and understand building performance: Pre-Design Climate Analysis, Pre-Design Benchmarking and Goal Setting, Energy "Brain-Storming" and Criteria Definition. In the Conceptualization phase, the focus is understanding and defining how to achieve a sustainable, green building and benefit from long-term energy savings.</p>
              <h3>Criteria Design Phase</h3>
              <p>At this stage, our projects begin to take shape. Major options are evaluated, tested and selected. Our services in this phase help design teams put numbers to ideas, test concepts for energy savings and create green buildings. This phase is likely the most critical as big decisions, such as building form, can drastically affect passive systems options and performance down the road.</p>
              <p>Our Energy Efficiency Experts help clients drive through the process of building design and find the optimal solution concept that holds the maximum potential for energy savings. Some of the steps included in this phase are as follows: Energy Programming, Schematic Daylight Design, Energy Systems Research, Conceptual Energy Systems Design and Commissioning Plan. Arriving to a single concept holding maximum potential for energy savings guides a strong simulation.</p>
              <h3>Detailed Design Phase</h3>
              <p>At this stage in the project, most of the major design elements have been set and the focus is on making the systems function properly. Specific questions about how systems work will need to be figured out during this phase - details down to specific materials and parts may be tested using previously developed simulation models. A much higher level of detail will be applied to the simulation models as more information becomes available through the analysis and design cycle.</p>
              <p>A list of the various design elements we test and various methods and simulation modeling:</p>
              <p>EnergyPlus is one of the components we use to handle simulation and our Energy Efficiency Experts use it in a variety of ways to test and simulate a multitude of areas such as heating, cooling, lighting, ventilation, other energy flows, and water use. With EnergyPlus' innovative simulation capabilities, our team[s] can test and evaluate such things as time-steps less than an hour, modular systems and plant integrated with heat balance-based zone simulation, multi zone air flow, thermal comfort, water us, natural ventilation, and photovoltaic systems. This enables our Energy Efficiency Experts to optimize the building design to use less energy and water leading to sustainable, green buildings that improve the bottom line year over year.</p>
              <h3>Implementation Documents Phase</h3>
              <p>At this stage, our Energy Efficiency Experts focus on documenting the whole process. Our teams coordinate consulting and review the plan of energy systems. This is critical as we ensure and confirm the criteria implemented in construction documents from previous design phases. This aids in the successful implementation of specific measures analyzed during design. Our Energy Efficiency Experts are able to assist with verification and consulting of LEED certification.</p>
              <h3>Construction Phase</h3>
              <p>Our Energy Efficiency Experts help in three specific areas at this stage: Site Observation and System Calibration / Commissioning Assistance, Life Cycle Cost Targeting and Review Change Order Requests for Energy and Load Effecting Systems.</p>
              <h3>Post Occupancy Phase</h3>
              <p>The phase is often overlooked, however we believe it is crucial to long term energy savings and a healthy return on investment for years to come. Our Energy Efficiency Experts can perform and install specific measures for content evaluation. This includes: System and Technology Evaluation, Measurement and Verification, Post Occupancy Survey and Analysis, Yearly energy Benchmarking and Reporting, Energy Audits (various levels) and Evaluation, Measurement, and Verification of Existing Systems.</p>
           </v-card>
          </v-flex>
        </v-container>
      </v-card>

    </v-dialog>


    </v-flex>
  </v-layout>
  <v-layout row wrap>
    <v-flex xs6 class="ses_serviceslist">

    <!-- Services 3 -->
    <v-dialog v-model="dialog3" fullscreen hide-overlay transition="dialog-bottom-transition">

      <template v-slot:activator="{ on }">

        <v-card v-on="on">
          <v-card-text class="px-0"></v-card-text>
          <v-img src="/img/LEEDCertification.png" max-height="72" contain />
          <v-card-text class="px-0">Green Building Certification</v-card-text>

        </v-card>
      </template>

      <v-card>
        <v-toolbar color="indigo darken-4" class="ses_toolbar_modal pt-1 pb-4 pr-3 pl-2 elevation-3" fixed>
          <v-toolbar-title class="white--text">Green Building Certification</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog3 = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-container class="mt-5">
          <v-flex>
            <v-card flat class="mt-5">
              <p>Synergy Efficiency Solutions helps develop and design energy efficient green buildings</p>
              <p>We work with key stakeholders to identify a variety of structural changes that directly impact energy efficiency. Our Energy Efficiency Experts compile a detailed report demonstrating key opportunities for energy efficiency improvement and cost savings. We then help manage your energy, saving money short-term and long-term.</p>
              <h3>Integrated Design Services</h3>
              <p>Our involvement in any sustainable, green building design project starts by setting performance targets that we then help guide to achieve. Our collaboration and involvement with architects, engineers, project managers and other integral parties is critical to success as we build energy savings solutions. There is constant assessment and reassessment as we strive for the optimal solutions.</p>
              <h3>Conceptualization Phase</h3>
              <p>This early stage of the design process focuses on the conceptual basis for the whole design process. This is where all the pre-design analyses are carried out. It is characterized as the definition of the design problem and criteria. This phase can be the most pivotal period to cost effectively reduce energy use in buildings. Our Energy Efficiency Experts assist owners and project teams in a variety of ways before major design efforts take place. This can include original research to support conceptual design ideas or product and service development. At this stage, our team utilizes four areas to guide the process and understand building performance: Pre-Design Climate Analysis, Pre-Design Benchmarking and Goal Setting, Energy "Brain-Storming" and Criteria Definition. In the Conceptualization phase, the focus is understanding and defining how to achieve a sustainable, green building and benefit from long-term energy savings.</p>
              <h3>Criteria Design Phase</h3>
              <p>At this stage, our projects begin to take shape. Major options are evaluated, tested and selected. Our services in this phase help design teams put numbers to ideas, test concepts for energy savings and create green buildings. This phase is likely the most critical as big decisions, such as building form, can drastically affect passive systems options and performance down the road.</p>
              <p>Our Energy Efficiency Experts help clients drive through the process of building design and find the optimal solution concept that holds the maximum potential for energy savings. Some of the steps included in this phase are as follows: Energy Programming, Schematic Daylight Design, Energy Systems Research, Conceptual Energy Systems Design and Commissioning Plan. Arriving to a single concept holding maximum potential for energy savings guides a strong simulation.</p>
              <h3>Detailed Design Phase</h3>
              <p>At this stage in the project, most of the major design elements have been set and the focus is on making the systems function properly. Specific questions about how systems work will need to be figured out during this phase - details down to specific materials and parts may be tested using previously developed simulation models. A much higher level of detail will be applied to the simulation models as more information becomes available through the analysis and design cycle.</p>
              <p>A list of the various design elements we test and various methods and simulation modeling:</p>
              <p>EnergyPlus is one of the components we use to handle simulation and our Energy Efficiency Experts use it in a variety of ways to test and simulate a multitude of areas such as heating, cooling, lighting, ventilation, other energy flows, and water use. With EnergyPlus' innovative simulation capabilities, our team[s] can test and evaluate such things as time-steps less than an hour, modular systems and plant integrated with heat balance-based zone simulation, multi zone air flow, thermal comfort, water us, natural ventilation, and photovoltaic systems. This enables our Energy Efficiency Experts to optimize the building design to use less energy and water leading to sustainable, green buildings that improve the bottom line year over year.</p>
              <h3>Implementation Documents Phase</h3>
              <p>At this stage, our Energy Efficiency Experts focus on documenting the whole process. Our teams coordinate consulting and review the plan of energy systems. This is critical as we ensure and confirm the criteria implemented in construction documents from previous design phases. This aids in the successful implementation of specific measures analyzed during design. Our Energy Efficiency Experts are able to assist with verification and consulting of LEED certification.</p>
              <h3>Construction Phase</h3>
              <p>Our Energy Efficiency Experts help in three specific areas at this stage: Site Observation and System Calibration / Commissioning Assistance, Life Cycle Cost Targeting and Review Change Order Requests for Energy and Load Effecting Systems.</p>
              <h3>Post Occupancy Phase</h3>
              <p>The phase is often overlooked, however we believe it is crucial to long term energy savings and a healthy return on investment for years to come. Our Energy Efficiency Experts can perform and install specific measures for content evaluation. This includes: System and Technology Evaluation, Measurement and Verification, Post Occupancy Survey and Analysis, Yearly energy Benchmarking and Reporting, Energy Audits (various levels) and Evaluation, Measurement, and Verification of Existing Systems.</p>
           </v-card>
          </v-flex>
        </v-container>
      </v-card>

    </v-dialog>

    </v-flex>
    <v-flex xs6 class="ses_serviceslist">

    <!-- Services 4 -->
    <v-dialog v-model="dialog4" fullscreen hide-overlay transition="dialog-bottom-transition">

      <template v-slot:activator="{ on }">

        <v-card v-on="on">
          <v-card-text class="px-0"></v-card-text>
          <v-img src="/img/ESCOFinancing.png" max-height="72" contain />
          <v-card-text class="px-0">ESCO Financing</v-card-text>


        </v-card>
      </template>

      <v-card>
        <v-toolbar color="indigo darken-4" class="ses_toolbar_modal pt-1 pb-4 pr-3 pl-2 elevation-3" fixed>
          <v-toolbar-title class="white--text">ESCO Financing</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog4 = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-container class="mt-5">
          <v-flex>
            <v-card flat class="mt-5">
              <p>Synergy Efficiency Solutions helps develop and design energy efficient green buildings</p>
              <p>We work with key stakeholders to identify a variety of structural changes that directly impact energy efficiency. Our Energy Efficiency Experts compile a detailed report demonstrating key opportunities for energy efficiency improvement and cost savings. We then help manage your energy, saving money short-term and long-term.</p>
              <h3>Integrated Design Services</h3>
              <p>Our involvement in any sustainable, green building design project starts by setting performance targets that we then help guide to achieve. Our collaboration and involvement with architects, engineers, project managers and other integral parties is critical to success as we build energy savings solutions. There is constant assessment and reassessment as we strive for the optimal solutions.</p>
              <h3>Conceptualization Phase</h3>
              <p>This early stage of the design process focuses on the conceptual basis for the whole design process. This is where all the pre-design analyses are carried out. It is characterized as the definition of the design problem and criteria. This phase can be the most pivotal period to cost effectively reduce energy use in buildings. Our Energy Efficiency Experts assist owners and project teams in a variety of ways before major design efforts take place. This can include original research to support conceptual design ideas or product and service development. At this stage, our team utilizes four areas to guide the process and understand building performance: Pre-Design Climate Analysis, Pre-Design Benchmarking and Goal Setting, Energy "Brain-Storming" and Criteria Definition. In the Conceptualization phase, the focus is understanding and defining how to achieve a sustainable, green building and benefit from long-term energy savings.</p>
              <h3>Criteria Design Phase</h3>
              <p>At this stage, our projects begin to take shape. Major options are evaluated, tested and selected. Our services in this phase help design teams put numbers to ideas, test concepts for energy savings and create green buildings. This phase is likely the most critical as big decisions, such as building form, can drastically affect passive systems options and performance down the road.</p>
              <p>Our Energy Efficiency Experts help clients drive through the process of building design and find the optimal solution concept that holds the maximum potential for energy savings. Some of the steps included in this phase are as follows: Energy Programming, Schematic Daylight Design, Energy Systems Research, Conceptual Energy Systems Design and Commissioning Plan. Arriving to a single concept holding maximum potential for energy savings guides a strong simulation.</p>
              <h3>Detailed Design Phase</h3>
              <p>At this stage in the project, most of the major design elements have been set and the focus is on making the systems function properly. Specific questions about how systems work will need to be figured out during this phase - details down to specific materials and parts may be tested using previously developed simulation models. A much higher level of detail will be applied to the simulation models as more information becomes available through the analysis and design cycle.</p>
              <p>A list of the various design elements we test and various methods and simulation modeling:</p>
              <p>EnergyPlus is one of the components we use to handle simulation and our Energy Efficiency Experts use it in a variety of ways to test and simulate a multitude of areas such as heating, cooling, lighting, ventilation, other energy flows, and water use. With EnergyPlus' innovative simulation capabilities, our team[s] can test and evaluate such things as time-steps less than an hour, modular systems and plant integrated with heat balance-based zone simulation, multi zone air flow, thermal comfort, water us, natural ventilation, and photovoltaic systems. This enables our Energy Efficiency Experts to optimize the building design to use less energy and water leading to sustainable, green buildings that improve the bottom line year over year.</p>
              <h3>Implementation Documents Phase</h3>
              <p>At this stage, our Energy Efficiency Experts focus on documenting the whole process. Our teams coordinate consulting and review the plan of energy systems. This is critical as we ensure and confirm the criteria implemented in construction documents from previous design phases. This aids in the successful implementation of specific measures analyzed during design. Our Energy Efficiency Experts are able to assist with verification and consulting of LEED certification.</p>
              <h3>Construction Phase</h3>
              <p>Our Energy Efficiency Experts help in three specific areas at this stage: Site Observation and System Calibration / Commissioning Assistance, Life Cycle Cost Targeting and Review Change Order Requests for Energy and Load Effecting Systems.</p>
              <h3>Post Occupancy Phase</h3>
              <p>The phase is often overlooked, however we believe it is crucial to long term energy savings and a healthy return on investment for years to come. Our Energy Efficiency Experts can perform and install specific measures for content evaluation. This includes: System and Technology Evaluation, Measurement and Verification, Post Occupancy Survey and Analysis, Yearly energy Benchmarking and Reporting, Energy Audits (various levels) and Evaluation, Measurement, and Verification of Existing Systems.</p>
           </v-card>
          </v-flex>
        </v-container>
      </v-card>

    </v-dialog>

    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  data() {
    options: {
    normalScrollElements: '.ses_scrollable'
    }
    return {
      dialog: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      notifications: false,
      sound: true,
      widgets: false
    }
  }
}

</script>

<style>

</style>
