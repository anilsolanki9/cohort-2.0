// Write a program to perform LRU Page Replacement for a Reference string
// 7,0,1,2,0,3,0,4,2,3,0,3,3,2,1,2,0,1,7,1

#include <stdio.h>
int main()
{
    int frames = 4;
    int ref[] = {7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 3, 2, 1, 2, 0, 1, 7, 1};
    int n = sizeof(ref) / sizeof(ref[0]);
    int memory[10];
    int recent[10]; // To track last used time
    int faults = 0;
    int timer = 0;
    // Initialize frames as empty
    for (int i = 0; i < frames; i++)
    {
        memory[i] = -1;
        recent[i] = 0;
    }
    for (int i = 0; i < n; i++)
    {
        int page = ref[i];
        int hit = 0;
        // Check if page is already in memory
        for (int j = 0; j < frames; j++)
        {
            if (memory[j] == page)
            {
                hit = 1;
                recent[j] = ++timer; // Update as most recently used
                break;
            }
        }
        if (!hit)
        {
            // Find the least recently used frame (smallest timestamp)
            int lru_index = 0;
            int min_time = recent[0];
            for (int j = 1; j < frames; j++)
            {
                if (recent[j] < min_time)
                {
                    min_time = recent[j];
                    lru_index = j;
                }
            }
            // Replace the LRU page
            memory[lru_index] = page;
            recent[lru_index] = ++timer;
            faults++;
        }
    }
    double hit_ratio = ((n - faults) * 100.0) / n;
    printf("%d\n%.2f\n", faults, hit_ratio);
    return 0;
}