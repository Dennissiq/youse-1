import React from 'react'
import Img from './styles'

export default () => (
  <Img
    alt="youse"
    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE4IiBoZWlnaHQ9IjM1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTS4yMzguMDIyaDQuMjU3djYuMDcxSC4yMzh6Ii8+PHBhdGggaWQ9ImMiIGQ9Ik0uMTkuMDIxaDMuNTg2djQuNTcySC4xOXoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNTYuNDkgMjguNTkyYy0uMjA0LS4zNy0uNjU4LS44ODYtMS41MzUtLjg4Ni0xLjQ0MiAwLTEuOTQuOTI5LTEuOTQgMi41MjMgMCAxLjY2LjU0OSAyLjUxMiAxLjk0NyAyLjUxMi43NTIgMCAxLjE5OC0uMzAzIDEuNTEtLjU2NGwuNDc0LjU5OWMtLjU3NS40NzEtMS4yNDIuNjQtMS45ODQuNjQtMS44OTYgMC0yLjc3NC0xLjAyOS0yLjc3NC0zLjE4NyAwLTIuMTUyLjg2OS0zLjE5NyAyLjc3NC0zLjE5NyAxLjE3MyAwIDEuODMuNTMxIDIuMTY3IDEuMTY0bC0uNjQuMzk2ek02MC42MDQgMzMuMjl2LS41NGMtLjQ2My4zOC0uOTAyLjY2Ny0xLjQ4My42NjctLjg2MSAwLTEuMzU4LS41NTgtMS4zNTgtMS4zNDMgMC0xLjA2Mi43NzUtMS4zNDggMS43MjgtMS40NS4zNjQtLjA0MS43MDEtLjA2NyAxLjExMy0uMDkydi0uMjExYzAtLjY2Ni0uNDEyLS44NjEtMS4wNDUtLjg2MS0uNTU4IDAtLjkwMi4xNjEtMS4xNy40MDVsLS40MzItLjUzMWMuMzM2LS4zMDMuODQzLS40ODkgMS42MTktLjQ4OSAxLjIwNCAwIDEuNzczLjM2MyAxLjc3MyAxLjUxdjIuOTM0aC0uNzQ1em0wLTIuMTk0bC0uNzI2LjA2OGMtLjc5Mi4wNjgtMS4zNDcuMjM3LTEuMzQ3Ljg5NCAwIC41MTQuMjk2LjcyNi44MTcuNzI2LjQ0OSAwIC44NzctLjMzOCAxLjI1Ni0uNjMzdi0xLjA1NXpNNjIuODY2IDMzLjI5di0zLjcyOGgtLjc0NHYtLjU5aDEuNDg0djQuMzE3aC0uNzR6bS4zNjgtNC45NjhjLS4zNjggMC0uNDgtLjE3Ny0uNDgtLjQ0NyAwLS4yOTUuMTM2LS40NDcuNDgtLjQ0Ny4zNTcgMCAuNDkuMTQzLjQ5LjQ0NyAwIC4zMi0uMTYuNDQ3LS40OS40NDd6TTY3LjMzNSAzMy4yOWwtMS4wNDYtMS42NDUtMS4wNzggMS42NDRoLS44NDRsMS41LTIuMTMzLTEuNDgzLTIuMTg1aC45MDlsMS4wNDggMS42MzcgMS4wNy0xLjYzN2guODUybC0xLjUgMi4xMzQgMS41IDIuMTg0ek03MS4zNTcgMzMuMjl2LS41NGMtLjQ2NC4zOC0uOTAyLjY2Ny0xLjQ4NC42NjctLjg2IDAtMS4zNTgtLjU1OC0xLjM1OC0xLjM0MyAwLTEuMDYyLjc3Ni0xLjM0OCAxLjcyOS0xLjQ1LjM2NC0uMDQxLjcwMS0uMDY3IDEuMTEzLS4wOTJ2LS4yMTFjMC0uNjY2LS40MTItLjg2MS0xLjA0NS0uODYxLS41NTggMC0uOTAyLjE2MS0xLjE3LjQwNWwtLjQzMi0uNTMxYy4zMzYtLjMwMy44NDMtLjQ4OSAxLjYxOS0uNDg5IDEuMjA0IDAgMS43Ny4zNjMgMS43NyAxLjUxdjIuOTM0aC0uNzQyem0wLTIuMTk0bC0uNzI2LjA2OGMtLjc5Mi4wNjgtMS4zNDcuMjM3LTEuMzQ3Ljg5NCAwIC41MTQuMjkzLjcyNi44MTcuNzI2LjQ0NiAwIC44NzctLjMzOCAxLjI1Ni0uNjMzdi0xLjA1NXpNNzcuMzQ2IDMzLjQxN2MtMS4zMDcgMC0xLjk1LS41MjQtMi4zNTUtMS4yMDZsLjY1LS40MDVjLjMyLjUyMi44MDMuOTM1IDEuNzEyLjkzNS42NDIgMCAxLjQzNS0uMjYxIDEuNDM1LTEuMDU0IDAtLjY0MS0uNTE2LS45NTMtMS40OTMtMS4xNTUtMS41MzUtLjMyMi0yLjE2OC0uNzI1LTIuMTY4LTEuNzg4IDAtMS4wMi43MjUtMS43MTIgMi4xNS0xLjcxMiAxLjA5NiAwIDEuNzMuNDQ2IDIuMTM0IDEuMDk2bC0uNjMyLjQyMmMtLjMyLS41MjMtLjc3Ni0uODQ0LTEuNTExLS44NDQtLjg1OCAwLTEuMzQ4LjQwNS0xLjM0OCAxLjAxMiAwIC41NjUuNDI5LjgwMiAxLjU2MSAxLjA0NiAxLjI0Ny4yNyAyLjEwNy42NjcgMi4xMDcgMS44NzIgMCAxLjMtMS4wMiAxLjc4LTIuMjQyIDEuNzhNODEuMDg5IDMxLjMzM2MwIC43ODQuMzA1IDEuNDY3IDEuMjU4IDEuNDY3LjM5NSAwIC43OTMtLjE5NC45Ny0uMzcxbC40MzkuNTQ3Yy0uMjYyLjIxMy0uNjkzLjQ0LTEuMzg1LjQ0LTEuMzIzIDAtMi4wNDgtLjY0OS0yLjA0OC0yLjI1MiAwLTEuMzY2LjQ5LTIuMzE4IDEuOTU2LTIuMzE4IDEuMjgzIDAgMS43NjMuNzc1IDEuNzYzIDEuOTczdi41MTRIODEuMDl6bTEuMTU3LTEuODk5Yy0uNzA4IDAtMS4wOC40NTYtMS4xNDcgMS4zMDhoMi4yMDljMC0uODA5LS4yOC0xLjMwOC0xLjA2Mi0xLjMwOHoiIGZpbGw9IiNGQ0FGMTciIGZpbGwtcnVsZT0ibm9uemVybyIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg0LjQ3MSAyOC44MjQpIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMy45ODguNzM4VjQuMzhjMCAxLjE3My0uNTgxIDEuNzEzLTEuOTMgMS43MTMtLjU2NCAwLTEuMTk4LS4xOTQtMS40NS0uMzU0bC4yNi0uNTg0Yy4yNzkuMTc4Ljc0NC4zNDcgMS4xOS4zNDcuODEgMCAxLjE4OS0uMzA0IDEuMTg5LTEuMDh2LS40M2MtLjM1NC4yNy0uNzY3LjQ3Mi0xLjMwNy40NzItMS4xNjQgMC0xLjcwMi0uOTEtMS43MDItMi4yIDAtMS4wOTcuNDctMi4yNDMgMS44NDUtMi4yNDMuNTQ3IDAgLjk2Mi4yNiAxLjIwNy40NTZ2LS4zM2gxLjIwNXYuNTloLS41MDd6bS0uNzQxLjMyYy0uMzcyLS4yMjctLjc1LS40MDUtMS4xMi0uNDA1LS44MzcgMC0xLjEyMy44MjctMS4xMjMgMS41OTQgMCAuODY5LjIzNyAxLjU4NiAxLjA0NSAxLjU4Ni40MjEgMCAuODYtLjE5NSAxLjE5OC0uNDcyVjEuMDU4eiIgZmlsbD0iI0ZDQUYxNyIgZmlsbC1ydWxlPSJub256ZXJvIiBtYXNrPSJ1cmwoI2IpIi8+PC9nPjxwYXRoIGQ9Ik05Mi41NDMgMzMuMjl2LS42NDJjLS40NzMuNDQ3LTEuMDIxLjc2OS0xLjUuNzY5LS45MzYgMC0xLjM1LS41NTgtMS4zNS0xLjY0NnYtMi44aC43NHYyLjU0N2MwIC44NDQuMTIgMS4yMTUuNzcgMS4yMTUuMzI5IDAgLjgzMy0uMjggMS4zNC0uNzF2LTMuMDUyaC43NDJ2NC4zMThoLS43NDJ6TTk2Ljc3NyAyOS42OTZhLjk0Ni45NDYgMCAwMC0uMzAzLS4wNWMtLjUxNCAwLS44NjcuMzItMS4yMzEuNjU3djIuOTg2SDk0LjV2LTQuMzE4aC43NDN2LjcwMWMuNDA1LS40MDUuNzg1LS43NjggMS4yODItLjc2OC4xNjggMCAuMjk2LjAyNS40MTMuMDg0bC0uMTYuNzA4ek05OS45NzUgMzMuMjl2LS41NGMtLjQ2NS4zOC0uOTA0LjY2Ny0xLjQ4Ni42NjctLjg1OCAwLTEuMzU4LS41NTgtMS4zNTgtMS4zNDMgMC0xLjA2Mi43NzctMS4zNDggMS43MzEtMS40NWExOS44MyAxOS44MyAwIDAxMS4xMTMtLjA5MnYtLjIxMWMwLS42NjYtLjQxNC0uODYxLTEuMDQ3LS44NjEtLjU1NSAwLS45MDIuMTYxLTEuMTcuNDA1bC0uNDMyLS41MzFjLjMzNi0uMzAzLjg0My0uNDg5IDEuNjItLjQ4OSAxLjIwNyAwIDEuNzcxLjM2MyAxLjc3MSAxLjUxdjIuOTM0aC0uNzQyem0wLTIuMTk0bC0uNzI3LjA2OGMtLjc5LjA2OC0xLjM0OC4yMzctMS4zNDguODk0IDAgLjUxNC4yOTYuNzI2LjgxNy43MjYuNDQ4IDAgLjg3OC0uMzM4IDEuMjU4LS42MzN2LTEuMDU1ek0xMDQuNzQgMzMuMjl2LS40MzFjLS4zNDcuMzEzLS44NDQuNTU4LTEuMzg0LjU1OC0xLjE4OSAwLTEuNzEzLS45MzgtMS43MTMtMi4yNTMgMC0xLjM3NC42NS0yLjMxOSAxLjc5Ny0yLjMxOS41MDcgMCAuOTIuMTYgMS4zLjQzOHYtMi4xMjVoLjc0MnY2LjEzMWgtLjc0MnptMC0zLjM5MmMtLjMzLS4yMTktLjcwOC0uNDIxLTEuMTktLjQyMS0uNjk5IDAtMS4xMzcuNTMyLTEuMTM3IDEuNjcgMCAuODc2LjIzNSAxLjYzNyAxLjA4NSAxLjYzNy40NzMgMCAuOTIyLS4yNyAxLjI0Mi0uNTU4di0yLjMyOHpNMTA4LjQ0MiAzMy40MTdjLTEuNDI1IDAtMi0uOTItMi0yLjI3OCAwLTEuMzgzLjU3NS0yLjI5NCAyLTIuMjk0IDEuNDE2IDAgMS45OS45MiAxLjk5IDIuMjk0IDAgMS4zNTgtLjU3NCAyLjI3OC0xLjk5IDIuMjc4bTAtMy45NTdjLS45MTkgMC0xLjIzMS42OTItMS4yMzEgMS42NzkgMCAuOTYxLjMxMiAxLjY2IDEuMjMxIDEuNjYuOTAyIDAgMS4yMjItLjY5OSAxLjIyMi0xLjY2IDAtLjk4Ny0uMzEtMS42NzktMS4yMjItMS42NzlNMTEzLjY3IDI5LjY5NmEuOTM3LjkzNyAwIDAwLS4zMDQtLjA1Yy0uNTE0IDAtLjg2OC4zMi0xLjIzMS42NTd2Mi45ODZoLS43NDJ2LTQuMzE4aC43NDJ2LjcwMWMuNDA1LS40MDUuNzg1LS43NjggMS4yODItLjc2OGEuODguODggMCAwMS40MTUuMDg0bC0uMTYzLjcwOHoiIGZpbGw9IiNGQ0FGMTciIGZpbGwtcnVsZT0ibm9uemVybyIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMy44MzMgMjguODI0KSI+PG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2MiLz48L21hc2s+PHBhdGggZD0iTTMuMDM0IDQuNDY1di0uNTRjLS40NjMuMzgtLjkwMS42NjgtMS40ODMuNjY4LS44NiAwLTEuMzYtLjU1OC0xLjM2LTEuMzQzIDAtMS4wNjIuNzc4LTEuMzQ5IDEuNzMtMS40NWExOS44MyAxOS44MyAwIDAxMS4xMTMtLjA5MnYtLjIxMWMwLS42NjYtLjQxNC0uODYxLTEuMDQ3LS44NjEtLjU1NSAwLS45MDIuMTYtMS4xNzEuNDA1TC4zODcuNTFDLjcyNC4yMDcgMS4yMjguMDIxIDIuMDA0LjAyMWMxLjIwNyAwIDEuNzcyLjM2MyAxLjc3MiAxLjUxdjIuOTM0aC0uNzQyem0wLTIuMTkzbC0uNzI1LjA2OGMtLjc5Mi4wNjgtMS4zNS4yMzctMS4zNS44OTQgMCAuNTE0LjI5Ni43MjYuODE3LjcyNi40NDkgMCAuODc4LS4zMzggMS4yNTgtLjYzM1YyLjI3MnoiIGZpbGw9IiNGQ0FGMTciIGZpbGwtcnVsZT0ibm9uemVybyIgbWFzaz0idXJsKCNkKSIvPjwvZz48cGF0aCBkPSJNNDQuNDQ4IDExLjAwNWMwIDYuMjU0LTQuOTUyIDEwLjkyNC0xMS4wMDMgMTAuOTI0LTYuMDUyIDAtMTAuOTYtNC42Ny0xMC45Ni0xMC45MjRTMjcuMzkzIDAgMzMuNDQ1IDBjNi4wNTEgMCAxMS4wMDMgNC43NTEgMTEuMDAzIDExLjAwNW0tNS42MjguMDRjMC0zLjYxMy0yLjQxMy02LjEzMS01LjM3NS02LjEzMXMtNS4zNzUgMi41MTgtNS4zNzUgNi4xMzFjMCAzLjUzNCAyLjQxMyA1Ljk3MiA1LjM3NSA1Ljk3MnM1LjM3NS0yLjQzOCA1LjM3NS01Ljk3MiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTU2LjMwNyAyMS45MjljLTYuMDk1IDAtOS42OTMtMy44NTYtOS42OTMtOS4zNFYuNTI5aDUuNTg3djEyLjIyYzAgMS4xOC40MjQgMy45OCA0LjEwNiAzLjk4IDIuNDU0IDAgNC4yMy0xLjY2MiA0LjIzLTMuOThWLjUzaDUuNTg3djEyLjA2YzAgNS4zMi0zLjg5MyA5LjM0LTkuODE3IDkuMzRNNzguMzEzIDIxLjkyOWMtNS41NDMgMC05LjY0OS0yLjgtMTAuMzI2LTcuMzFoNS42N2MuNzYyIDEuNzg4IDMuMDA0IDIuNDM3IDQuNjU2IDIuNDM3IDIuMjQ0IDAgMy45MzQtLjY1IDMuOTM0LTEuODY4IDAtMS4xNzktLjc2MS0xLjY2NS00LjU2OC0yLjIzNS0zLjg5My0uNTY4LTkuMDk4LTEuNTgxLTkuMDk4LTYuMjUyIDAtMy4yODkgMy4wMDQtNi43IDkuMzEtNi43IDQuOTkxIDAgOC43MTcgMi41OTggOS40MzYgNi41MzhoLTUuNzk4Yy0uMzM5LS45NzUtMS41NjUtMS43NDgtMy42MzktMS43NDgtMi41OCAwLTMuNjM5Ljg5NC0zLjYzOSAxLjY2NSAwIDEuMDk3IDEuNjA4IDEuNDYyIDQuMzE2IDEuODY4IDUuNDE3Ljg1MyA5LjMxMSAxLjk5MiA5LjMxMSA2LjU0IDAgNC4xNDEtMy45OCA3LjA2NS05LjU2NSA3LjA2NU0xMDQuOTg0IDE0Ljc4MmMtLjkzMiAxLjY2NS0yLjc1MyAyLjQzNi00LjYxNCAyLjQzNi0yLjYyMyAwLTQuNzQtMS41ODQtNS40Ni00LjE0MWgxNi40NjNDMTEyLjE3OCA0Ljc5IDEwNi44NDYgMCAxMDAuNDEyIDBjLTYuMTM0IDAtMTEuMTc0IDQuOTU0LTExLjE3NCAxMS4wMDUgMCA2LjA1MSA1LjA0IDEwLjkyNCAxMS4xNzQgMTAuOTI0IDQuNDMxIDAgNy44MTMtMS45MyA5LjU5My00Ljk2NWwtNS4wMjEtMi4xODJ6TTEwMC4zNyA0LjcxYzIuNjY2IDAgNC43ODIgMS41NDEgNS40NTkgMy45OEg5NC45OTZjLjgwMy0yLjQzOSAyLjgzNS0zLjk4IDUuMzc0LTMuOTh6TTE0Ljk5OCAyMS44ODVIOS41NXYtNy4yNzRMMCAuNTI4aDYuMTA2bDYuMTQ3IDguNzE0TDE4LjQ0MS41MjhoNi4xMDdsLTkuNTUgMTQuMDgzeiIgZmlsbD0iI0ZDQUYxNyIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTQ0LjQ0NyAyOC45MjRhNC44NTQgNC44NTQgMCAwMC00Ljg1NC00Ljg1NUgyNy4zNGE0Ljg1NyA0Ljg1NyAwIDAwLTQuODU4IDQuODU1aDIxLjk2NHoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4="
  />
)
