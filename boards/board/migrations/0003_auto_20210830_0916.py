# Generated by Django 3.2.6 on 2021-08-30 09:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('board', '0002_blogger_reader'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='board',
            options={'ordering': ['-pk']},
        ),
        migrations.AlterModelOptions(
            name='post',
            options={},
        ),
        migrations.AlterModelOptions(
            name='reader',
            options={},
        ),
        migrations.AlterModelOptions(
            name='topic',
            options={},
        ),
    ]
