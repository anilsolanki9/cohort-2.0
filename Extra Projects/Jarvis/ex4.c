// Ex4. Calculate Average waiting time for 5 process using FCFS
// Solution:

#include <stdio.h>
#define MAX_PROCESSES 5
typedef struct
{
    int pid;        // Process ID
    int arrival;    // Arrival time
    int burst;      // Burst time
    int completion; // Completion time
    int turnaround; // Turnaround time
    int waiting;    // Waiting time
} Process;
int main()
{
    // Fixed input: 5 processes
    Process p[MAX_PROCESSES] = {
        {1, 0, 8},
        {2, 1, 4},
        {3, 2, 9},
        {4, 3, 5},
        {5, 4, 2}};
    int current_time = 0;
    float total_turnaround = 0, total_waiting = 0;
    for (int i = 0; i < MAX_PROCESSES; i++)
    {
        // If CPU is idle until next process arrives
        if (current_time < p[i].arrival)
        {
            current_time = p[i].arrival;
        }
        // Completion time = current time + burst time
        current_time += p[i].burst;
        p[i].completion = current_time;
        // Turnaround time = completion - arrival
        p[i].turnaround = p[i].completion - p[i].arrival;
        // Waiting time = turnaround - burst
        p[i].waiting = p[i].turnaround - p[i].burst;
        total_turnaround += p[i].turnaround;
        total_waiting += p[i].waiting;
    }
    printf(" %.2f\n", total_turnaround / MAX_PROCESSES);
    return 0;
}