<template>
    <div>
      <Sidebar />
      <h1>Calendar!</h1>
  
      <div class="calendar">
        <button @click="prevMonth">Prev</button>
        <h2>{{ currentMonth }}</h2>
        <button @click="nextMonth">Next</button>
  
        <table>
          <thead>
            <tr>
              <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="week in calendar" :key="week">
              <td v-for="day in week" :key="day" :class="{ today: isToday(day), selected: isSelected(day) }">
                {{ day.getDate() }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from './Sidebar.vue';
  export default {
    name: 'Calendar',
    components: {
      Sidebar
    },
    data() {
      return {
        currentMonth: new Date(),
        daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        selectedDate: null,
      };
    },
    computed: {
      calendar() {
        const year = this.currentMonth.getFullYear();
        const month = this.currentMonth.getMonth();
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);
        const startDate = new Date(firstDayOfMonth);
        startDate.setDate(startDate.getDate() - startDate.getDay());
        const endDate = new Date(lastDayOfMonth);
        endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));
  
        const calendar = [];
        let week = [];
        let currentDate = new Date(startDate);
  
        while (currentDate <= endDate) {
          week.push(new Date(currentDate));
          if (week.length === 7) {
            calendar.push(week);
            week = [];
          }
          currentDate.setDate(currentDate.getDate() + 1);
        }
  
        return calendar;
      },
    },
    methods: {
      prevMonth() {
        this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
      },
      nextMonth() {
        this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
      },
      isToday(date) {
        const today = new Date();
        return date.toDateString() === today.toDateString();
      },
      isSelected(date) {
        return this.selectedDate && date.toDateString() === this.selectedDate.toDateString();
      },
    },
  };
  </script>
  
  <style>
  .calendar {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  table {
    border-collapse: collapse;
    margin-top: 10px;
  }
  
  th,
  td {
    width: 40px;
    height: 40px;
    text-align: center;
    border: 1px solid #ccc;
  }
  
  .today {
    background-color: #f7f7f7;
  }
  
  .selected {
    background-color: #e2e2e2;
  }
  </style>