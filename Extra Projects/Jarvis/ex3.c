// Ex3. Write a program to perform Optimal Page Replacement for a Reference string
// 7,0,1,2,0,3,0,4,2,3,0,3,3,2,1,2,0,1,7,1.
// Solution:

#include <stdio.h>
#define MAX_FRAMES 3
#define REF_LENGTH 20
int main()
{
    // Fixed reference string
    int reference_string[REF_LENGTH] = {7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1};
    // Number of frames in memory
    int frames[MAX_FRAMES];

    int occupied = 0; // Number of frames currently filled
    int page_faults = 0;
    // Initialize frames to -1 (empty)
    for (int i = 0; i < MAX_FRAMES; i++)
    {
        frames[i] = -1;
    }
    
    for (int i = 0; i < REF_LENGTH; i++)
    {
        int page = reference_string[i];
        int found = 0;
        // Check if page is already in memory
        for (int j = 0; j < occupied; j++)
        {
            if (frames[j] == page)
            {
                found = 1;
                break;
            }
        }
        if (found)
        {
        }
        else
        {
            // Page fault
            page_faults++;
            if (occupied < MAX_FRAMES)
            {
                // There is free frame
                frames[occupied] = page;
                occupied++;
            }
            else
            {
                // Need to replace: find the page that will not be used for longest time in future
                int farthest_index = -1;
                int replace_index = -1;
                for (int j = 0; j < MAX_FRAMES; j++)
                {
                    int k;
                    for (k = i + 1; k < REF_LENGTH; k++)
                    {
                        if (reference_string[k] == frames[j])
                        {
                            break;
                        }
                    }
                    // If page is never used again, replace it immediately
                    if (k == REF_LENGTH)
                    {
                        replace_index = j;
                        break;
                    }
                    // Otherwise track the farthest one
                    if (k > farthest_index)
                    {
                        farthest_index = k;
                        replace_index = j;
                    }
                }
                frames[replace_index] = page;
            }
            // Print current frames
            // for (int j = 0; j < MAX_FRAMES; j++) {
            // if (frames[j] == -1) printf(" ");
            // else printf("%2d ", frames[j]);
            // }
            // printf(" (Fault)\n");
        }
    }
    printf("\nTotal Page Faults: %d\n", page_faults);
    return 0;
}