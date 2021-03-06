# Generated by Django 3.0.8 on 2020-07-23 16:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('astralwhale', '0003_users_updated_on'),
    ]

    operations = [
        migrations.CreateModel(
            name='Files',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
                ('filepath', models.FileField(null=True, upload_to='files/', verbose_name='')),
                ('updated_on', models.DateTimeField(auto_now=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
