from django.db import models

# Create your models here.

class Note(models.Model):
    topic = models.CharField(max_length=100, null=True, blank=True)
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body[0:50] + ' - ' + self.topic if self.topic else self.body[0:50]
