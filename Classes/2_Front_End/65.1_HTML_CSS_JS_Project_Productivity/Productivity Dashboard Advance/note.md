# Features 
- Date - time - Temprature - Weather - Theme change Btn
- ToDo List (Task title, Task details, Mark task as Imp, add task, view all tasks, mark task as completed)
- Daily planner (6-7 to 23-24 add tasks per hour)
- Motivational Quote - Motivational quote per day
- Pomodoro timer - 25 min work session, 5 min Break session, start, pause, reset btns
- Daily Goals 

--- 

- Go to pinterest for inspiration of Productivity Dashboard.
- Aeonik font download (Bold, Light, Regular), add fonts with name light, normal, bold
- Or add all fonts with same name `Aeonik`, but diff font-weight 200, 500, 700

# Rot variabes
- --pri: #B0E4CC; => Primary text color
- --sec: #091413; => Primary Background color
- --tri1: #408A71;  => Rest elements bg color
- --tri2: #285A48;  => Rest elements text color
- Use variables using var(--pri) etc  .
- Its usefull for color themes

## Color Pallets
For Dark theme
-  Sabse light vale ko pri banao (last)
-  Sabse dark vale ko sec banao (1st)
-  pri se thode km light color ko tri1 banao(2nd last)
-  sec se thode km dark color ko tri2 banao. (2nd)
  
#main h 100%, w 100%bg --sec
text -> color --pri

#main nav 
position fixed, h 60px w 100%, bg tri2

#main section.allElems
h 100%, w 100%, p 40px pt 80px,
flex, flex-wrap,align start, gap 20px

section
- .elem.todo#0
- .elem.daily#1
- .elem.moti#2
- .elem.pomo#3
- .elem.goals#4

.elem img 

.elem
h 400px, w 330px
bg tri2, p 30px 40pxm border rad 30px
overflow hidden

.elem img w 100%, h 100%, object cover

#main section.fullElem.todo-list-fullPage
#main section.fullElem.daily-planner-fullPage
#main section.fullElem.motivational-fullPage
#main section.fullElem.pomodoro-fullPage
#main section.fullElem.daily-goals-fullPage

-> Multiple fullElem pages one for every page


fullElem w 100% h 100% , position absolute,  
btn.back to every page, pos absolute, right 5%, 


# JavaScript Logic

all .elem
forEach -> add event listner -> on click -> collect elem.id
All .fullElemPage array me se allFullElemPage[elem.id] vale fullElem ko extract kro. and uska display block kro

allFullElemPageBackBtn ko bhi capture kro, 
btns ko bhi id de do, 0 1 2 3 4
event click pe, back.id nikal ke allFullElemPage[back.id].style.display = "none";

Enclose the logic in function openFeatures()
and call it

---

# ToDO List

.fullElem

button
h2 -> font size 65px

div.todo-container 
- .addTask
- .allTasks

.todo-container h 70%, w 100%, bg tri2 justify-between

.addTask w 40% 
.allTasks w 55%

.addTask
- form
  - input
  - textarea
  - checkbox 
  - submit btn

---

# Features

1. Focus Timer (Pomodoro Engine) work/break, Session counter
2. Task Manager (priorities - high, medium, low) - Track completed tasks also. 
3. Habit Tracker -  Horizontal row of daily habits, and complete month checklist grids, each day one column, auto compute month length
4. Ambient sound Player -  Rain, white noise,lo-fi 
5. Mini Analytics Panel - A Small Stats section, Show completed tasks, Streak, 

