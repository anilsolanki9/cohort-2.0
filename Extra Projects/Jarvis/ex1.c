// Ex1. Write a program to perfom FIFO Page Replacement for a Reference string
// 7,0,1,2,0,3,0,4,2,3,0,3,3,2,1,2,0,1,7,1

#include <stdio.h>
int main()
{
    int frames = 4;
    int ref[] = {7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 3, 2, 1, 2, 0, 1, 7, 1};
    int n = sizeof(ref) / sizeof(ref[0]);
    int memory[20];
    for (int i = 0; i < frames; i++)
        memory[i] = -1;
    int faults = 0, ptr = 0;
    for (int i = 0; i < n; i++)
    {
        int page = ref[i];
        int hit = 0;
        for (int j = 0; j < frames; j++)
          if (memory[j] == page)
          {
              hit = 1;
              break;
          }
        if (!hit)
        {
            memory[ptr] = page;
            ptr = (ptr + 1) % frames;
            faults++;
        }
    }
    double hit_ratio = ((n - faults) * 100.0) / n;
    printf("%d\n%.2f\n", faults, hit_ratio);
    return 0;
}