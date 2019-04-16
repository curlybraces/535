<template lang="md">
<no-ssr>
  <div>
    <full-page ref="fullpage" id="fullpage" :options="options">
      <div id="ses_particles">
        <particles />
      </div>
      <div id="splashnav" class="section ses_splash ses_coverhome">
        <Splash />
      </div>
      <div id="aboutnav" class="section">
        <div class="slide ses_coverabout text-xs-center">
        <h2 class="ses_navup pointer" @click="$refs.fullpage.api.moveSectionUp()"><i class="fas fa-angle-up"></i></h2>
          <v-container>
            <h1 class="ses_headline">About SES</h1>
            <p class="aboutsubtitle">Our mission to simplify energy efficiency across Southeast Asia</p>
            <h2 class="ses_subheadline pointer" @click="$refs.fullpage.api.moveSlideRight()">More <i class="fas fa-angle-double-right"></i></h2>
          </v-container>
          <h2 class="ses_navdown pointer" @click="$refs.fullpage.api.moveSectionDown()"><i class="fas fa-angle-down"></i></h2>
        </div>
        <div class="slide ses_coverpage">
          <h1><i class="fas fa-user-friends"></i> About</h1>
          <div class="containersc aboutfix">
            <v-container text-xs-left>
            <div v-html="$md.render( aboutcontent )"></div>
            <div class="back">
              <h2 class="ses_back pointer" @click="$refs.fullpage.api.moveSlideLeft()"><i class="fas fa-chevron-left"></i> Back</h2>
            </div>
            </v-container>
          </div>
        </div>
      </div>
      <div id="servicesnav" class="section">
        <div class="slide ses_coverservices text-xs-center">
        <h2 class="ses_navup pointer" @click="$refs.fullpage.api.moveSectionUp()"><i class="fas fa-angle-up"></i></h2>
          <v-container>
            <h1 class="ses_headline">Services</h1>
            <h2 class="ses_subheadline pointer" @click="$refs.fullpage.api.moveSlideRight()">More <i class="fas fa-chevron-right"></i></h2>
          </v-container>
          <h2 class="ses_navdown pointer" @click="$refs.fullpage.api.moveSectionDown()"><i class="fas fa-angle-down"></i></h2>
        </div>
        <div class="slide ses_coverpage text-xs-center">
          <v-container>
            <v-layout column>
              <v-flex>
                <h1><i class="fas fa-cubes"></i> SERVICES</h1>
                <div class="containersc lgfix">
                  <div class="box">
                  <v-container>
                      <v-layout wrap>
                      <v-flex xs12 lg4 class="ses_serviceslist" v-for="service in services" :key="service.id">
                      <nuxt-link :to="/service/ + service.id" tag="a" class="ses_sublink">
                            <v-card-text class="px-0"></v-card-text>
                            <img v-bind:src="'http://sesbackend.thenameisvery.com' + service.icon.url" max-width="200" />
                            <div class="ses_subtitle">
                              <h2>{{ service.title }}</h2>
                              <p>{{ service.subtitle }}</p>
                            </div>
                      </nuxt-link>
                      </v-flex>
                      </v-layout>
                  </v-container>
                    </div>
                  <div class="back">
                    <h2 class="ses_back pointer" @click="$refs.fullpage.api.moveSlideLeft()"><i class="fas fa-chevron-left"></i> Back</h2>
                  </div>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </div>
      <div id="portoflionav" class="section">
        <div class="slide ses_coverportfolio text-xs-center">
        <h2 class="ses_navup pointer" @click="$refs.fullpage.api.moveSectionUp()"><i class="fas fa-angle-up"></i></h2>
          <v-container>
            <h1 class="ses_headline">Portfolio</h1>
            <h2 class="ses_subheadline pointer" @click="$refs.fullpage.api.moveSlideRight()">More <i class="fas fa-chevron-right"></i></h2>
          </v-container>
          <h2 class="ses_navdown pointer" @click="$refs.fullpage.api.moveSectionDown()"><i class="fas fa-angle-down"></i></h2>
        </div>
        <div class="slide ses_coverpage text-xs-center">
          <h1 class="pb-3"><i class="fas fa-folder-open"></i> Portfolio</h1>
          <div class="containersc">
            <div class="box">
              <v-container>
                  <v-layout wrap v-scroll:#scroll-target="onScroll">
                    <v-flex xs12 lg4 pb-2 px-2 v-for="portfolio in portfolios" :key="portfolio.id">
                    <nuxt-link :to="/portfolio/ + portfolio.id" tag="a" class="ses_sublink">
                            <v-card class="mb-5" color="grey lighten-4" max-width="500">
                              <v-img v-bind:src="'http://sesbackend.thenameisvery.com' + portfolio.thumbnail.url" :aspect-ratio="16/9" />
                              </v-img>
                              <v-card-text class="pt-4" style="position: relative;">
                                <h3 class="title font-weight-bold green--text mb-2"> {{ portfolio.title }}</h3>
                              </v-card-text>
                            </v-card>
                      </nuxt-link>
                    </v-flex>
                  </v-layout>
                <div class="back">
                  <h2 class="ses_back pointer" @click="$refs.fullpage.api.moveSlideLeft()"><i class="fas fa-chevron-left"></i> Back</h2>
                </div>
              </v-container>
            </div>
          </div>
        </div>
      </div>
      <div id="clientsnav" class="section">
        <div class="slide ses_coverclients text-xs-center">
        <h2 class="ses_navup pointer" @click="$refs.fullpage.api.moveSectionUp()"><i class="fas fa-angle-up"></i></h2>
          <v-container>
            <h1 class="ses_headline">Clients</h1>
            <h2 class="ses_subheadline pointer" @click="$refs.fullpage.api.moveSlideRight()">More <i class="fas fa-chevron-right"></i></h2>
          </v-container>
          <h2 class="ses_navdown pointer" @click="$refs.fullpage.api.moveSectionDown()"><i class="fas fa-angle-down"></i></h2>
        </div>
        <div class="slide ses_coverpage text-xs-center">
          <v-container>
            <v-layout column>
              <v-flex>
                <h1><i class="fas fa-cubes"></i> CLIENTS</h1>
                <div class="containersc">
                  <div class="box">
                  <v-container>
                      <v-layout wrap>
                      <v-flex xs12 lg4 class="ses_serviceslist" v-for="client in clients" :key="client.id">
                            <v-card-text class="px-0"></v-card-text>
                            <img v-bind:src="'http://sesbackend.thenameisvery.com' + client.logo.url" width="200" />
                            <div class="ses_subtitle">
                              <h2>{{ client.name }}</h2>
                            </div>
                      </v-flex>
                      </v-layout>
                  </v-container>
                    </div>
                  <div class="back">
                    <h2 class="ses_back pointer" @click="$refs.fullpage.api.moveSlideLeft()"><i class="fas fa-chevron-left"></i> Back</h2>
                  </div>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
        </div>
        <div id="blognav" class="section">
        <div class="slide ses_coverblog text-xs-center">
        <h2 class="ses_navup pointer" @click="$refs.fullpage.api.moveSectionUp()"><i class="fas fa-angle-up"></i></h2>
          <v-container>
            <h1 class="ses_headline">Blog</h1>
            <h2 class="ses_subheadline pointer" @click="$refs.fullpage.api.moveSlideRight()">More <i class="fas fa-chevron-right"></i></h2>
          </v-container>
          <h2 class="ses_navdown pointer" @click="$refs.fullpage.api.moveSectionDown()"><i class="fas fa-angle-down"></i></h2>
        </div>
        <div class="slide ses_coverpage text-xs-center">
          <h1 class="pb-3"><i class="fas fa-pencil-alt"></i> Blog</h1>
          <div class="containersc">
            <div class="box">
              <v-container>
                  <v-layout wrap>
                    <v-flex xs12 lg4 pb-2 px-2 v-for="blog in blogs" :key="blog.id">
                      <nuxt-link :to="/blog/ + blog.id" tag="a" class="ses_sublink">
                          <v-card class="mb-5" color="grey lighten-4" max-width="500">
                              <v-img v-bind:src="'http://sesbackend.thenameisvery.com' + blog.image.url" :aspect-ratio="16/9" />
                              </v-img>
                              <v-card-text class="pt-4" style="position: relative;">
                                <h3 class="title font-weight-bold green--text mb-2"> {{ blog.title }}</h3>
                              </v-card-text>
                            </v-card>
                            </nuxt-link>
                    </v-flex>
                  </v-layout>
                <div class="back">
                  <h2 class="ses_back pointer" @click="$refs.fullpage.api.moveSlideLeft()"><i class="fas fa-chevron-left"></i> Back</h2>
                </div>
              </v-container>
            </div>
          </div>
        </div>
      </div>
      <div id="faqnav" class="section">
        <div class="slide ses_coverfaq text-xs-center">
        <h2 class="ses_navup pointer" @click="$refs.fullpage.api.moveSectionUp()"><i class="fas fa-angle-up"></i></h2>
          <v-container>
            <h1 class="ses_headline">FAQ</h1>
            <h2 class="ses_subheadline pointer" @click="$refs.fullpage.api.moveSlideRight()">More <i class="fas fa-angle-double-right"></i></h2>
          </v-container>
          <h2 class="ses_navdown pointer" @click="$refs.fullpage.api.moveSectionDown()"><i class="fas fa-angle-down"></i></h2>
        </div>
        <div class="slide ses_coverpage">
          <h1><i class="fas fa-user-friends"></i> FAQ</h1>
          <div class="containersc aboutfix">
            <v-container text-xs-left>
            <p class="ses_faqtitle">General Questions</p>
              <v-expansion-panel focusable>
                <v-expansion-panel-content>
                  <template v-slot:header>
                    <div>Why should I manage my energy consumption?</div>
                  </template>
                  <v-card>
                    <v-card-text>Energy is not a free commodity, and the more you consume the more you pay. Currently there is a wide array of energy efficient technologies and operational changes that can quickly and easily reduce the amount of energy you consume and pay for. Implementing these technologies and practices can save you a substantial amount of money on your energy bills, lowering your energy expenditures. The cost of the investment is paid for with the energy savings.</v-card-text>
                  </v-card>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                  <template v-slot:header>
                    <div>What is energy efficiency and why should a building be green?</div>
                  </template>
                  <v-card>
                    <v-card-text>Energy Efficiency means using less energy to accomplish the same function or service. There are new energy efficient technologies that use only a fraction of the energy used by older technologies, with improved performance. For example, a CFL lightbulb only requires about 20% of the energy consumed by traditional incandescent lightbulbs and has a lifetime more than 10 times longer. Energy efficient technology presents a tremendous opportunity to save money on energy bills quickly and easily. Moreover, since energy generation contributes to global climate change and increases carbon dioxide emissions, by reducing the energy you use, you also minimize your impact on the environment.</v-card-text>
                  </v-card>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                  <template v-slot:header>
                    <div>How does energy efficiency improvement help me save money?</div>
                  </template>
                  <v-card>
                    <v-card-text>By improving the energy efficiency a building can have the same functionality but use less energy – the energy consumption will drop but the building would serve the same purpose. Improving the efficiency of an existing building will lower the energy bills and therefore result in immediate financial savings. Implementing green design for a new building usually saves clients substantial amounts of upfront capital investment and ensures low energy consumption (less money spent) throughout the building's lifetime.</v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <p class="ses_faqtitle">Building Performance Simulation</p>
              <v-expansion-panel focusable>
                <v-expansion-panel-content>
                  <template v-slot:header>
                    <div>What are "energy efficient designs"?</div>
                  </template>
                  <v-card>
                    <v-card-text>An energy efficient design is an architectural feature of a building that lowers overall consumption of energy. A basic example of an energy efficient design is a roof that allows natural sunlight in, which eliminates the need for artificial lighting, thus lowering energy costs. Another example is an interior space designed to naturally ventilate air and keep it cool, which reduces energy use for cooling and ventilation.</v-card-text>
                  </v-card>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                  <template v-slot:header>
                    <div>What will SES contribute to the building process?</div>
                  </template>
                  <v-card>
                    <v-card-text>Our energy specialists are experts in the field of energy efficient buildings. We will connect you with the perfect energy efficient technology and designs for your needs, quickly and easily. We will work with your architects, engineers, and MEP consultants to:
                    <ul>
                      <li>improve your designs to maximize the passive exploitation of natural light and wind</li>
                      <li>facilitate the implementation of efficient technologies</li>
                      <li>simulate cooling and lighting requirements for your building, using computer modeling software, to properly size the equipment</li>
                    </ul>
                    Should you seek LEED certification, we can assist you throughout the whole LEED certification process and to ensure you earn all possible credits.</v-card-text>
                  </v-card>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                  <template v-slot:header>
                    <div>What value will SES's services add to my building?</div>
                  </template>
                  <v-card>
                    <v-card-text>With an energy efficient design along with cutting edge low-energy technology, your building will have lower operating costs and a longer lifespan, thus increasing the value of your investment.</v-card-text>
                  </v-card>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                  <template v-slot:header>
                    <div>How quickly will efficiency measures pay for themselves with savings?</div>
                  </template>
                  <v-card>
                    <v-card-text>It varies by technology – some technologies are both affordable and save a substantial amount of energy, paying for themselves within months, while others require a few years to recover the costs. However, after each technology has saved enough money to compensate you for the initial investment, all further savings help you keep operating costs low and thus widen your profit margins.</v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <p class="ses_faqtitle">LEED Certification</p>
              <v-expansion-panel focusable>
                <v-expansion-panel-content>
                  <template v-slot:header>
                    <div>What is LEED?</div>
                  </template>
                  <v-card>
                    <v-card-text>
                    <p>Leadership in Energy and Environmental Design (LEED) is a certification program developed by the U.S. Green Building Council. It provides building owners and operators a framework for identifying and implementing practical and measurable green building design, construction, operations and maintenance solutions. Originally intended for application in the U.S, LEED is now an internationally recognized green building certification with approximately 10 billion square feet of building space participating. Around 40% all square footage pursuing LEED certification exists outside the U.S., with many projects certified throughout Southeast Asia.</p>
                    <p>There are nine LEED ratings systems for different project types; including new construction, existing buildings, interiors, commercial buildings, residential buildings, schools, healthcare, and neighborhood developments. Project applicants for LEED certification must meet certain prerequisite requirements and earn credit points within the applicable rating system.</p>
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                  <template v-slot:header>
                    <div>How does LEED work?</div>
                  </template>
                  <v-card>
                    <v-card-text>
                    LEED is a point based system where building projects earn LEED points for satisfying specific green building criteria. Within each of the seven LEED credit categories, projects must satisfy particular prerequisites and earn points.
                    The five categories include Sustainable Sites (SS), Water Efficiency (WE), Energy and Atmosphere (EA), Materials and Resources (MR) and Indoor Environmental Quality (IEQ). An additional category, Innovation in Design (ID), addresses sustainable building expertise as well as design measures not covered under the five environmental categories. The number of points the project earns determines the level of LEED Certification the project receives. LEED certification is available in four progressive levels according to the following scale. There are 100 base points: <ul><li>Certified 40–49 points</li>
                    <li>Silver 50–59 points</li>
                    <li>Gold 60–79 points</li>
                    <li>Platinum 80 points and above</li></ul>
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                  <template v-slot:header>
                    <div>How are LEED credits weighted?</div>
                  </template>
                  <v-card>
                    <v-card-text>
                      The allocation of points is based on strategies that will have greater positive impacts on what matters most – energy efficiency and CO2 reductions. Each credit was evaluated against a list of 13 environmental impact categories, including climate change, indoor environmental quality, resource depletion and water intake, among many others.
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                  <template v-slot:header>
                    <div>Does green building cost more?</div>
                  </template>
                  <v-card>
                    <v-card-text>
                      No, green buildings do not have to cost a penny more. LEED certified projects to date demonstrate that you can achieve LEED certification and reap its many benefits with a common-sense approach to design with no additional dollars. Depending on your green building strategy and the level of certification your project is targeting, there may be mid- and long-term ROI associated with additional green features that merits an investment in first costs.
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                  <template v-slot:header>
                    <div>What are the benefits of LEED certification?</div>
                  </template>
                  <v-card>
                    <v-card-text>
                      LEED certification is third-party validation of a building's performance. LEED certified projects blend environmental, economic, and occupant-oriented performance. They cost less to operate and maintain; are energy- and water-efficient; have higher lease-up rates than conventional buildings in their markets; are healthier and safer for occupants; and are a physical demonstration of the values of the organizations that own and occupy them. For more information: <a href="http://www.usgbc.org">www.usgbc.org</a>
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
                </v-expansion-panel>
                <p class="ses_faqtitle">Energy Audits</p>
                <v-expansion-panel focusable>
                  <v-expansion-panel-content>
                    <template v-slot:header>
                      <div>What is an Energy Audit?</div>
                    </template>
                    <v-card>
                      <v-card-text>
                        An energy audit is an inspection, survey, and analysis of energy flows of a building. The purpose of such an audit is to measure current energy consumption, to identify areas with potential for efficiency improvements, and present a profitability calculation of suggested retrofits and equipment upgrades.
                      </v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                  <v-expansion-panel-content>
                    <template v-slot:header>
                      <div>What types of energy audits are there?</div>
                    </template>
                    <v-card>
                      <v-card-text>
                        Energy audits could be divided into many different categories; however, SES distinguishes the audits on the basis of how detailed they are. A Level 1 Walkthrough Audit will make a general on-site assessment of energy consumption and of the condition of equipment – basic recommendations and areas of improvement will be identified. A Level 2 Audit will usually include more measurements, collect more data, and provide more in-depth recommendations.
                      </v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                  <v-expansion-panel-content>
                    <template v-slot:header>
                      <div>What are the benefits of an energy audit?</div>
                    </template>
                    <v-card>
                      <v-card-text>
                Upon completion of an energy audit the building owners will receive valuable information regarding their current energy consumption and all possible improvements they can make. A report following an energy audit will make recommendations for retrofitting and replacement of equipment.
                      </v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                  </v-expansion-panel>
                  <p class="ses_faqtitle">Retrofits</p>
                  <v-expansion-panel focusable>
                    <v-expansion-panel-content>
                      <template v-slot:header>
                        <div>Do I need an energy retrofit?</div>
                      </template>
                      <v-card>
                        <v-card-text>
                        If your building is more than ten years old, yes. The technology in older buildings is inefficient, and, as a result, you are likely overpaying for energy. We can recommend efficient technologies that will significantly reduce your energy bills, and the savings will pay for the cost of the investment. If your building is less than ten years old, you may nevertheless benefit from an energy retrofit. Many buildings, especially those built in Indonesia, have oversized pumps and motors, as well as inefficient lighting and cooling technology. We can help you reduce operating costs by cutting your energy bills.
                        </v-card-text>
                      </v-card>
                    </v-expansion-panel-content>
                    <v-expansion-panel-content>
                      <template v-slot:header>
                        <div>How can I pay for an energy retrofit?</div>
                      </template>
                      <v-card>
                        <v-card-text>
                          Energy retrofits come in many varieties. We can tailor a unique retrofit package to fit your needs and budget. With each energy retrofit we do, we reduce our clients' energy bills. Over time, the savings from the lower energy costs will pay for the cost of the retrofit. After the investment for the retrofit is returned, you begin to make more money, given the lower operating costs.
                        </v-card-text>
                      </v-card>
                    </v-expansion-panel-content>
                    <v-expansion-panel-content>
                      <template v-slot:header>
                        <div>What aspects of my building will be changed with a retrofit?</div>
                      </template>
                      <v-card>
                        <v-card-text>
                        Typically an energy retrofit involves upgrading all energy-consuming equipment in a building to be more energy efficient. This usually includes lighting, AC units and chillers, cooling towers, air-handling units, pumps, motors, generators, boilers, capacitor banks, and voltage stabilizers, among others.
                        </v-card-text>
                      </v-card>
                    </v-expansion-panel-content>
                    <v-expansion-panel-content>
                      <template v-slot:header>
                        <div>How much money will I save on energy bills?</div>
                      </template>
                      <v-card>
                        <v-card-text>
                  How much money you should expect to save depends on your current equipment and the extent of your retrofit. Some retrofits are more involved than others in terms of target savings. Generally, we save our clients between 15% and 49% on their energy bills, with an average of around 25%.
                        </v-card-text>
                      </v-card>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    <p class="ses_faqtitle">ESCO Financing</p>
                    <v-expansion-panel focusable>
                      <v-expansion-panel-content>
                        <template v-slot:header>
                          <div>What are ESCO grants?</div>
                        </template>
                        <v-card>
                          <v-card-text>
                            An ESCO (Energy Savings Company) grant is a scheme where companies like SES receive grants for a broad range of energy efficiency services, including energy savings projects, retrofitting and energy conservation.
                          </v-card-text>
                        </v-card>
                      </v-expansion-panel-content>
                      <v-expansion-panel-content>
                        <template v-slot:header>
                          <div>How does ESCO work?</div>
                        </template>
                        <v-card>
                          <v-card-text>
                          SES helps finance an entire Energy Savings Implementation - including equipment, materials, and labor. The cost is paid back through the energy savings that are achieved. We make that possible with no upfront investment, guaranteeing energy savings and eliminating all risk for your company. Using our network of Financial Partners, Synergy Energy Solutions can assume the risk of upfront investment and assist with the upfront capital. We guarantee energy savings and are confident we can recover our costs once the equipment is installed and the necessary changes are made. Our Energy Management Experts work with all teams to ensure we are in control of the process and the plan can be implemented smoothly. Please contact us to find out if this is a potential option for you.      </v-card-text>
                        </v-card>
                      </v-expansion-panel-content>
                      <v-expansion-panel-content>
                        <template v-slot:header>
                          <div>What are the benefits of ESCO?</div>
                        </template>
                        <v-card>
                          <v-card-text>
                          <ul>
                          <li>There are few upper limitations on project size for some of the larger ESCOs, which are multinational corporations with third-party capital funding their activities</li>
                          <li>There is little upfront cost for the owner</li>
                          <li>Generally, ESCO takes on performance risk: if no energy is saved, ESCO does not profit</li>
                          </ul>
                          </v-card-text>
                        </v-card>
                      </v-expansion-panel-content>
                      <v-expansion-panel-content>
                        <template v-slot:header>
                          <div>How much money will I save on energy bills?</div>
                        </template>
                        <v-card>
                          <v-card-text>
                    How much money you should expect to save depends on your current equipment and the extent of your retrofit. Some retrofits are more involved than others in terms of target savings. Generally, we save our clients between 15% and 49% on their energy bills, with an average of around 25%.
                          </v-card-text>
                        </v-card>
                      </v-expansion-panel-content>
                      </v-expansion-panel>
            <div class="back">
              <h2 class="ses_back pointer" @click="$refs.fullpage.api.moveSlideLeft()"><i class="fas fa-chevron-left"></i> Back</h2>
            </div>
            </v-container>
          </div>
        </div>
      </div>
      <div id="careernav" class="section">
        <div class="slide ses_covercareer text-xs-center">
        <h2 class="ses_navup pointer" @click="$refs.fullpage.api.moveSectionUp()"><i class="fas fa-angle-up"></i></h2>
          <v-container>
            <h1 class="ses_headline">Career</h1>
            <h2 class="ses_subheadline pointer" @click="$refs.fullpage.api.moveSlideRight()">More <i class="fas fa-chevron-right"></i></h2>
          </v-container>
          <h2 class="ses_navdown pointer" @click="$refs.fullpage.api.moveSectionDown()"><i class="fas fa-angle-down"></i></h2>
        </div>
        <div class="slide ses_coverpage text-xs-center">
          <h1 class="pb-3"><i class="fas fa-pencil-alt"></i> Career</h1>
          <div class="containersc">
            <div class="box">
              <v-container>
              <p>Synergy Efficiency Solutions is Indonesia's pioneer in Energy Efficiency and today's market leader. SES has designed the most energy efficient buildings in SE Asia, been accepted as Endeavor Entrepreneurs and are leading the field in performance contracting (ESCO) in Indonesia.</p>
              <p>At SES we are always looking for talented and ambitious people to join our highly effective team. If you have a passion for energy efficiency and are looking to join a company that prioritizes implementing real projects over just writing reports, then SES may be a good fit for you.</p>
                  <v-layout wrap>
                    <v-flex xs12 lg4 pb-2 px-2 v-for="career in careers" :key="career.id">
                      <nuxt-link :to="/career/ + career.id" tag="a" class="ses_sublink">
                          <v-card class="mb-5" color="grey lighten-4" max-width="500">
                          <v-img src="/img/career.jpg" :aspect-ratio="16/9" />
                          </v-img>
                              <v-card-text class="pt-4" style="position: relative;">
                                <h3 class="title font-weight-bold green--text mb-2"> {{ career.title }}</h3>
                              </v-card-text>
                            </v-card>
                            </nuxt-link>
                    </v-flex>
                  </v-layout>
                <div class="back">
                  <h2 class="ses_back pointer" @click="$refs.fullpage.api.moveSlideLeft()"><i class="fas fa-chevron-left"></i> Back</h2>
                </div>
              </v-container>
            </div>
          </div>
        </div>
        </div>
        <div class="section" id="ses_covercontacts">
          <v-container>
          <h1 class="ses_headline">Contact Us</h1>
            <h2 class="ses_subheadline">Send us an email. We'd love to hear from you</h2>
            <p>We are available to answer all your questions. Give us a call or email us and we will respond to you as soon as possible.</p>
            <p>E-mail: info@synergyefficiency.solutions<br>Ph: +62 361 4491392</p>
            <p>Address: Sahid Sudirman Center 56th floor, Jl. Jenderal Sudirman Kav. 86, Jakarta 10220</p>
            <p>Or simply fill form below to reach us online</p>
            <div class="ses_form mt-3">
            <a class="typeform-share button" href="https://pryspry.typeform.com/to/Xrk1bl" data-mode="popup" style="display:inline-block;text-decoration:none;background-color:#212F62;color:white;cursor:pointer;font-family:Helvetica,Arial,sans-serif;font-size:20px;line-height:50px;text-align:center;margin:0;height:50px;padding:0px 33px;border-radius:25px;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:bold;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;" target="_blank">Launch me </a> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script>
          </div>
          <p class="ses_copytitle">&copy; Copyright Synergy Efficiency Solutions - 2019</p>
          </v-container>
          </div>
        </full-page>
  </div>
</no-ssr>
</template>
<script>
import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'http://sesbackend.thenameisvery.com'
const strapi = new Strapi(apiUrl)
import axios from 'axios'

import Particles from '~/components/Particles.vue'
import Splash from '~/components/Splash.vue'
import Footer from '~/components/Footer.vue'

import gql from 'graphql-tag';

const servicesQuery = gql `
  query allServices {
    services {
      id
      title
      subtitle
      content
      icon {
        url
      }
    }
  }
`;
const portfoliosQuery = gql `
  query allPortfolios {
    portfolios {
      id
      title
      subtitle
      content
      feature
      thumbnail {
        url
      }
    }
  }
`;
const blogsQuery = gql `
  query allBlogs {
    blogs {
      id
      title
      content
      image { url }
    }
  }
`;
const careersQuery = gql `
  query allCareers {
    careers {
      id
      title
      content
    }
  }
`;
const clientsQuery = gql `
  query allClients {
    clients {
      id
      name
      logo { url }
    }
  }
`;
export default {
  data() {
    return {
      options: {
        normalScrollElements: '.containersc',
        controlArrows: false,
        anchors: ['intro', 'about', 'services', 'portfolio', 'client', 'blog', 'faq', 'career', 'contact'],
        menu: '#menu',
      },
      dialog: false,
      dialog2: false,
      dialog3: false,
      on: '',
    }
  },
  head: {
    link: [{
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Exo+2'
    }]
  },
  metaInfo: {
    title: 'Official Site',
    titleTemplate: '%s - Synergy Efficfont-wiency Solutions',
    htmlAttrs: {
      lang: 'en',
    }
  },
  apollo: {
    services: {
      query: servicesQuery
    },
    portfolios: {
      query: portfoliosQuery
    },
    blogs: {
      query: blogsQuery
    },
    careers: {
      query: careersQuery
    },
    clients: {
      query: clientsQuery
    },
  },
  async asyncData({
    params
  }) {
    let {
      data
    } = await axios.get(`http://sesbackend.thenameisvery.com/pages/1`)
    return {
      abouttitle: data.title,
      aboutcontent: data.content,
      aboutthumbnail: data.thumbnail.url
    }
  },
  layout: 'front',
  components: {
    Particles,
    Splash,
    Footer
  },
  methods: {
    onScroll() {

    },
    build() {
      var slideSelector = this.options.slideSelector || '.slide';
      var sectionSelector = this.options.sectionSelector || '.section';
      let activeSectionIndex = fp_utils.index(document.querySelector(sectionSelector + '.active'));
      let activeSlide = document.querySelector(sectionSelector + '.active ' + slideSelector + '.active');
      let activeSlideIndex = activeSlide ? fp_utils.index(activeSlide) : -1;
      this.destroy();
      if (activeSectionIndex > -1) {
        fp_utils.addClass(document.querySelectorAll(sectionSelector)[activeSectionIndex], 'active');
      }
      if (activeSlideIndex > -1) {
        fp_utils.addClass(activeSlide, 'active');
      }
      this.init();
    },
    destroy() {
      if (typeof fullpage_api !== 'undefined' && typeof fullpage_api.destroy !== 'undefined') {
        fullpage_api.destroy('all');
      }
    },
    emitEvent(name, args) {
      // Emit event on Vue way
      this.$emit.apply(this, [camelToKebab(name), ...args]);
      // Run event's handler with non Vue way
      if (this.options.hasOwnProperty(name)) {
        this.options[name].apply(this, args);
      }
    },
    init() {
      this.api = new fullpage(this.$refs.fullpage, this.options);
    },
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    if (typeof this.api !== 'undefined') {
      this.destroy();
    }
  }
}
</script>
<style>
*,
body,
p,
h1,
h2,
h3,
h3 {
  font-family: 'Exo 2', sans-serif;
}

h3.title {
  font-family: 'Exo 2', sans-serif !important;
  line-height: 1.2 !important;
}

p {
  font-size: 16px;
  line-height: 1.8;
}

h1 {
  font-size: 24px;
  line-height: 1.2;
}

h3 {
  font-size: 22px;
  line-height: 1.2;
  padding: 0 0 10px;
}

h4 {
  font-size: 20px;
  line-height: 1.2;
  padding: 0 0 10px;
}

#ses_particles {
  z-index: 9;
  position: absolute;
  width: 100%;
  height: auto;
  display: block;
}

.ses_splash.ses_coverhome {
  background-image: url('/img/home.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}

.ses_splash::after {
  background-image: linear-gradient(to top, transparent 0%, black 170%);
  height: 500px;
  margin-top: 0px;
  content: '';
  position: absolute;
  display: block;
  width: 100%;
}

.ses_splash h1.ses_headline,
.ses_headline {
  font-family: 'Exo 2', sans-serif;
  font-weight: 900;
}

.ses_splash .ses_subheadline {
  font-family: 'Exo 2', sans-serif;
  text-transform: uppercase;
}

.ses_coverabout {
  background-image: url('/img/dot.png'), url('/img/about.jpg');

}

.ses_coverabout,
.ses_coverservices,
.ses_coverportfolio,
.ses_coverresource,
.ses_covercasestudy,
.ses_coverblog,
.ses_covercareer,
.ses_coverclients,
.ses_coverfaq,
#ses_covercontacts {
  background-position: top right, center top;
  background-repeat: repeat, no-repeat;
  background-size: auto, cover;
  color: #f0f0f0;
}

.ses_coverpage {
  background-color: #e5e5e5;
  background-image: url('/img/poly2.png');
  background-position: center bottom;
  background-repeat: repeat;
}

.ses_coverblog {
  background-image: url('/img/dot.png'), url('/img/blog.jpg');
}

.ses_coverservices {
  background-image: url('/img/dot.png'), url('/img/services.jpg');
}

.ses_coverclients {
  background-image: url('/img/dot.png'), url('/img/clients.jpg');
}

.ses_coverfaq {
  background-image: url('/img/dot.png'), url('/img/faq.jpg');
}
#ses_covercontacts {
  background-image: url('/img/dot.png'), url('/img/contactus.jpg');
}

#ses_covercontacts p {
  line-height: 20px;
  padding:5px 0;
}

p.aboutsubtitle {
  line-height: 20px;
  padding:5px 0;
}

#ses_more {
  color: #eeeeee;
}

.ses_link {
  text-decoration: none;
  color: #333;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .7;
  position: absolute;
  width: 100%;
}

.ses_coverportfolio {
  background-image: url('/img/dot.png'), url('/img/portfolio.jpg');
}

.ses_covercareer {
  background-image: url('/img/dot.png'), url('/img/career.jpg');
}

.section {
  text-align: center;
  overflow: hidden;
}

#myVideo {
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-color: black;
  /* in case the video doesn't fit the whole page*/
  background-image:
    /* our video */
  ;
  background-position: center center;
  background-size: contain;
  object-fit: cover;
  /*cover video background */
  z-index: 3;
}

#section0 .layer {
  position: absolute;
  z-index: 4;
  width: 100%;
  left: 0;
  top: 43%;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}


#section0 {
  overflow: hidden;
  position: relative;
}

video::-webkit-media-controls {
  display: none !important;
}

.ses_headline {
  font-size: 45px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
  padding-top: 0px;
  padding-bottom: 10px;
  color: #eee;
  text-shadow: 1px 1px 1px #555;
  z-index: 99;
}

.ses_subheadline {
  font-weight: 400;
  font-size: 18px;
  color: #eee;
  text-align: center;
  text-transform: lowercase;
  font-style: italic;
}

.ses_back i,
.ses_subheadline i {
  font-size: 12px;
}

h2.ses_navup.pointer,
h2.ses_navdown.pointer,
h2.ses_back.pointer,
h2.ses_subheadline.pointer {
  cursor: pointer;
}

.back {
  position: absolute;
  bottom: 15px;
}

h2.ses_back.pointer {
  position: relative;
  font-weight: 400;
  font-size: 18px;
  color: #444;
  text-transform: lowercase;
  font-style: italic;
  border-bottom: 2px solid #333;
}

h2.ses_navdown.pointer {
  font-size: 40px;
  position: absolute;
  bottom: 35px;
  margin: 0 auto 0;
  width: 50%;
  text-shadow: 1px 1px 5px #555;
}

h2.ses_navup.pointer {
  font-size: 40px;
  position: absolute;
  top: 40px;
  margin: 0 auto 0;
  width: 50%;
  text-shadow: 1px 1px 5px #333;
}

.containersc {
  height: 350px;
  width: auto;
  overflow-y: scroll;
  margin: 15px auto 0;
}

.box {
  display: block;
  margin: 0px 0 0;
  padding: 0px 0 0;
}

.ses_sublink {
  text-decoration: none;
}

.ses_subtitle {
  color: #333;
}
.ses_faqtitle {
  padding: 20px 0 0;
  text-transform: uppercase;
  font-width: 700;
}
.ses_copytitle {
  padding-top:10px;
  line-height:18px;
  font-size: 14px;
}


/* Large Tablet to Laptop	 */
@media (min-width: 960px) and (max-width: 1264px) {}

/* Desktop */
@media (min-width: 1264px) {
  .containersc {
    height: 450px;
    width: auto;
    overflow-y: scroll;
    margin: 15px auto 0;
  }

  .containersc.lgfix {
    height: 500px;
    width: auto;
    overflow-y: hidden;
    margin: 15px auto 0;
  }

  h2.ses_back.pointer {
    bottom: 20px;
  }

  .containersc.aboutfix {
    height: 400px;
    width: auto;
    overflow-y: scroll;
    margin: 15px auto 0;
  }
}

</style>
