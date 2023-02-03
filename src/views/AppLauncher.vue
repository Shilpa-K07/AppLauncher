<template>
  <div>
    <v-icon @click="showApplicationPopup()"> mdi-dots-grid </v-icon>
    <v-dialog v-model="showAppPopup">
      <v-card min-height="800px" style="background: #fffbef">
        <v-text-field
          v-model="searchText"
          outlined
          prepend-inner-icon="mdi-magnify"
          class="pa-5"
        ></v-text-field>
        <div v-for="(item, index) in applicationsList" :key="index">
          <v-row class="mb-10">
            <v-col cols="1">
              <span class="ml-5">{{ item.title }}</span>
            </v-col>
            <v-col>
              <div style="display: flex">
                <div v-for="(mainItem, index) in item.mainItems" :key="index">
                  <div
                    style="
                      display: grid;
                      justify-items: center;
                      justify-content: center;
                    "
                    class="ml-10"
                  >
                    <v-icon v-if="mainItem.icon" width="20">{{
                      mainItem.icon
                    }}</v-icon>
                    <v-menu v-model="mainItem.isOpened" :nudge-width="115">
                      <template v-slot:activator="{ on: menu, attrs }">
                        <v-icon v-bind="attrs" v-on="{ ...menu }"
                          >mdi-dots-horizontal</v-icon
                        >
                      </template>
                      <v-list>
                        <v-list-item>
                          <h4>{{ mainItem.title }}</h4>
                        </v-list-item>
                        <hr class="" />
                        <v-list-item
                          v-for="subItem in mainItem.subItems"
                          :key="subItem.title"
                        >
                          <span
                            @click="
                              getSelectedData(
                                item.title,
                                mainItem.title,
                                subItem.title
                              )
                            "
                          >
                            {{ subItem.title }}
                          </span>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                    <span>{{ mainItem.title }}</span>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-divider class="pa-4" />
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import cloneDeep from "lodash/cloneDeep";
export default {
  props: {
    applicationsList: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    showAppPopup: false,
    searchText: "",
    applicationsListCopy: []
    /*  applicationsList: [
      {
        title: "Projects",
        mainItems: [
          {
            title: "Project",
            icon: "mdi-rocket-launch-outline",
            subItems: [
              { title: "New", isOpened: false },
              { title: "Edit", isOpened: false },
              { title: "List", isOpened: false },
              { title: "Group", isOpened: false }
            ]
          },
          {
            title: "Documents",
            icon: "mdi-file-document-outline"
          },
          {
            title: "WBS",
            icon: "mdi-sitemap-outline",
            subItems: [
              { title: "New", isOpened: false },
              { title: "Existing", isOpened: false }
            ]
          },
          {
            title: "Gantt",
            icon: "mdi-chart-timeline"
          },
          {
            title: "Minutes",
            icon: "mdi-clipboard-text-clock-outline"
          },
          {
            title: "Riskman",
            icon: "mdi-alarm-light-outline",
            subItems: [
              { title: "Dashboard", isOpened: false },
              { title: "New", isOpened: false },
              { title: "Browse", isOpened: false }
            ]
          },
          {
            title: "Report"
          },
          {
            title: "Doc Control",
            icon: "mdi-file-lock-open-outline"
          }
        ]
      },
      {
        title: "Teams",
        mainItems: [
          {
            title: "Roles"
          },
          {
            title: "Profile"
          },
          {
            title: "Access"
          }
        ]
      },
      {
        title: "Tasks",
        mainItems: [
          {
            title: "Taskman",
            subItems: [{ title: "New" }, { title: "Browse" }]
          },
          {
            title: "Sprint"
          },
          {
            title: "Kanban",
            subItems: [
              { title: "New Board", isOpened: false },
              { title: "Boards", isOpened: false },
              { title: "Backlogs", isOpened: false },
              { title: "Teams", isOpened: false },
              { title: "Products", isOpened: false },
              { title: "Stats", isOpened: false },
              { title: "Settings", isOpened: false }
            ]
          },
          {
            title: "To Do"
          }
        ]
      },
      {
        title: "Studies",
        mainItems: [
          {
            title: "Report"
          },
          {
            title: "Conops",
            subItems: [
              { title: "New", isOpened: false },
              { title: "Existing", isOpened: false }
            ]
          },
          {
            title: "Use Case",
            subItems: [
              { title: "New", isOpened: false },
              { title: "Existing", isOpened: false }
            ]
          }
        ]
      },
      {
        title: "Wiki",
        mainItems: [
          {
            title: "Glossary"
          },
          {
            title: "Learnings",
            subItems: [
              { title: "New", isOpened: false },
              { title: "View", isOpened: false }
            ]
          },
          {
            title: "Announcements",
            subItems: [
              { title: "New", isOpened: false },
              { title: "History", isOpened: false }
            ]
          }
        ]
      },
      {
        title: "Requirements",
        mainItems: [
          {
            title: "RStudio"
          }
        ]
      },
      {
        title: "Tests",
        mainItems: [
          {
            title: "Editor"
          },
          {
            title: "Recorder"
          }
        ]
      },
      {
        title: "Quality",
        mainItems: [
          {
            title: "Dashboard"
          },
          {
            title: "Documents"
          },
          {
            title: "Checklist",
            subItems: [
              { title: "New", isOpened: false },
              { title: "Existing", isOpened: false },
              { title: "Map", isOpened: false }
            ]
          },
          {
            title: "Review",
            subItems: [
              { title: "New", isOpened: false },
              { title: "Existing", isOpened: false }
            ]
          },
          {
            title: "Templates",
            subItems: [
              { title: "New", isOpened: false },
              { title: "Selection", isOpened: false },
              { title: "Existing", isOpened: false },
              { title: "Import", isOpened: false },
              { title: "Export", isOpened: false }
            ]
          },
          {
            title: "Cover Page",
            subItems: [
              { title: "New", isOpened: false },
              { title: "Edit", isOpened: false },
              { title: "View", isOpened: false }
            ]
          },
          {
            title: "Traceability"
          },
          {
            title: "Traceability Map"
          }
        ]
      }
    ] */
  }),
  watch: {
    searchText() {
      this.getSearchResult();
    },
    showAppPopup() {
      if (!this.showAppPopup) this.searchText = "";
    }
  },
  mounted() {
    this.applicationsListCopy = cloneDeep(this.applicationsList);
  },
  methods: {
    showApplicationPopup() {
      this.showAppPopup = true;
    },
    getSearchResult() {
      this.applicationsList = [];
      if (this.searchText) {
        this.applicationsListCopy.forEach(item => {
          if (
            item.title.toLowerCase().includes(this.searchText.toLowerCase())
          ) {
            this.applicationsList.push(item);
          } else {
            const index = item.mainItems.findIndex(data =>
              data.title.toLowerCase().includes(this.searchText.toLowerCase())
            );
            if (index != -1) {
              this.applicationsList.push(item);
            }
          }
        });
      } else {
        this.applicationsList = cloneDeep(this.applicationsListCopy);
      }
    },
    getSelectedData(item, mainItem, subItem) {
      this.$emit("on-click", item, mainItem, subItem);
    }
  }
};
</script>
