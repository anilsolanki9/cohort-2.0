#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>
#include <string.h>  

int main()
{
    int pipefd[2];
    char buffer[100];
    pid_t pid;

    if (pipe(pipefd) == -1)
    {
        perror("Pipe creation failed");
        return 1;
    }

    pid = fork();

    if (pid < 0)
    {
        perror("Fork failed");
        return 1;
    }
    else if (pid == 0)
    {
        // Child process
        close(pipefd[1]); // close write end
        read(pipefd[0], buffer, sizeof(buffer));
        printf("Child recieved: %s\n", buffer);
        close(pipefd[0]);
    }
    else
    {
        // parent process
        close(pipefd[0]); // Close read end
        const char *message = "Hello from parent!";
        write(pipefd[1], message, strlen(message) + 1);
        printf("Parent sent: %s\n", message);
        close(pipefd[1]);
    }

    return 0;
}