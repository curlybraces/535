<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs6 class="ses_serviceslist">
      <v-dialog v-model="dialog" width="600px">

      <template v-slot:activator="{ on }">
        <v-card v-on="on">
        <v-card-text class="px-0"></v-card-text>
          <v-img src="/img/EnergyPerformanceSimulation.png"
          max-height="72"
          contain
          />
            <v-card-text class="px-0">Building Performance Simulation</v-card-text>
            </v-card>
            </template>

            <v-card>
              <v-card-title>
                <span class="headline">Building Performance Simulation</span>
              </v-card-title>
              <v-card-text>Synergy Efficiency Solutions helps develop and design energy efficient green buildings.
              We work with key stakeholders to identify a variety of structural changes that directly impact energy efficiency. Our Energy Efficiency Experts compile a detailed report demonstrating key opportunities for energy efficiency improvement and cost savings. We then help manage your energy, saving money short-term and long-term.
              Integrated Design Services
              Our involvement in any sustainable, green building design project starts by setting performance targets that we then help guide to achieve. Our collaboration and involvement with architects, engineers, project managers and other integral parties is critical to success as we build energy savings solutions. There is constant assessment and reassessment as we strive for the optimal solutions.
              Conceptualization Phase
              This early stage of the design process focuses on the conceptual basis for the whole design process. This is where all the pre-design analyses are carried out. It is characterized as the definition of the design problem and criteria. This phase can be the most pivotal period to cost effectively reduce energy use in buildings. Our Energy Efficiency Experts assist owners and project teams in a variety of ways before major design efforts take place. This can include original research to support conceptual design ideas or product and service development. At this stage, our team utilizes four areas to guide the process and understand building performance: Pre-Design Climate Analysis, Pre-Design Benchmarking and Goal Setting, Energy "Brain-Storming" and Criteria Definition. In the Conceptualization phase, the focus is understanding and defining how to achieve a sustainable, green building and benefit from long-term energy savings.
              Criteria Design Phase
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>


      </v-flex>
      <v-flex xs6 class="ses_serviceslist">
      <v-card>
      <v-card-text class="px-0"></v-card-text>
        <v-img src="/img/EnergyAudits.png"
        max-height="72"
        contain
        />
          <v-card-text class="px-0">Energy Audits</v-card-text>
          </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs6  class="ses_serviceslist">
      <v-card>
      <v-card-text class="px-0"></v-card-text>
        <v-img src="/img/LEEDCertification.png"
        max-height="72"
        contain
        />
          <v-card-text class="px-0">Green Building Certification</v-card-text>
          </v-card>
      </v-flex>
      <v-flex xs6  class="ses_serviceslist">
      <v-card>
      <v-card-text class="px-0"></v-card-text>
        <v-img src="/img/ESCOFinancing.png"
        max-height="72"
        contain
        />
          <v-card-text class="px-0">ESCO Financing</v-card-text>
          </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
.ses_serviceslist {
  }

</style>
