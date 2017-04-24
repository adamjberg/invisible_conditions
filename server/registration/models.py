# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

GENDER_CHOICES = (
    ('Male', 'Male'),
    ('Female', 'Female'),
    ('Prefer not to say', 'Prefer not to say')
)

CONTACT_CHOICES = (
    ("Phone", "Phone"),
    ("E-mail", "E-mail")
)

LUNCH_CHOICES = (
    ('Antipasto Vegetable Wrap', "Antipasto Vegetable Wrap"),
    ('Smashed Chickpea on Multigrain', 'Smashed Chickpea on Multigrain'),
    ('Grilled Flank Steak', 'Grilled Flank Steak'),
    ('Chicken BLT Wrap', 'Chicken BLT Wrap'),
    ('Chicken Cashew Crunch Wrap', 'Chicken Cashew Crunch Wrap'),
)

SEVERITY_CHOICES = (
    ('Extremely Severe', 'Extremely Severe'),
    ('Very Severe', 'Very Severe'),
    ('Moderately Severe', 'Moderately Severe'),
    ('Slightly Severe', 'Slightly Severe'),
    ('Not Severe', 'Not Severe'),
)

MOOD_CHOICES = (
    ('happy', 'I am happy for most of each day'),
    ('content', 'I am content for most of each day'),
    ('sad', 'I am sad for most of each day'),
    ('very sad', 'I am very sad most of the day'),
)

GENDER_PREF_CHOICES = (
    ('no', "It doesn't matter"),
    ('male', 'Yes, I would prefer a male mentor/mentee'),
    ('female', 'Yes, I would prefer a female mentor/mentee'),
)


class Registration(models.Model):
    first_name = models.CharField(max_length=100, null=True)
    last_name = models.CharField(max_length=100, null=True)
    gender = models.CharField(max_length=20, choices=GENDER_CHOICES, null=True)
    gender_identity = models.CharField(max_length=100, null=True)
    birthdate = models.DateField(null=True)
    phone = models.CharField(max_length=100, null=True)
    email = models.EmailField(null=True)
    contact_pref = models.CharField(
        max_length=6, choices=CONTACT_CHOICES, null=True)
    address = models.CharField(max_length=100, null=True, blank=True)
    unit_number = models.CharField(max_length=20, null=True, blank=True)
    city = models.CharField(max_length=100, null=True, blank=True)
    postal_code = models.CharField(max_length=100, null=True)
    emergency_contact_first = models.CharField(max_length=100, null=True)
    emergency_contact_last = models.CharField(max_length=100, null=True)
    emergency_contact_phone = models.CharField(max_length=100, null=True)
    emergency_contact_email = models.CharField(max_length=100, null=True)
    accessibility = models.TextField(null=True, blank=True)
    allergies = models.TextField(null=True, blank=True)
    special_other = models.TextField(null=True, blank=True)
    lunch = models.CharField(max_length=30, null=True)
    gluten_free = models.NullBooleanField()
    research_interest = models.NullBooleanField()
    mentor_interest = models.NullBooleanField()
    crohns = models.NullBooleanField()
    colitis = models.NullBooleanField()
    condition_active = models.NullBooleanField()
    how_managing = models.TextField(null=True)
    surgeries = models.TextField(null=True)
    general_practitioner = models.NullBooleanField()
    gastroenterologist = models.NullBooleanField()
    immunologist = models.NullBooleanField()
    endocrinologist = models.NullBooleanField()
    neurologist = models.NullBooleanField()
    counsellor = models.NullBooleanField()
    psychiatrist = models.NullBooleanField()
    psychologist = models.NullBooleanField()
    pediatrician = models.NullBooleanField()
    surgeon = models.NullBooleanField()
    nutritionist = models.NullBooleanField()
    other_specialist = models.CharField(max_length=100, null=True, blank=True)
    severity = models.CharField(
        max_length=20, choices=SEVERITY_CHOICES, null=True)
    mood = models.CharField(max_length=10, choices=MOOD_CHOICES, null=True)
    hobbies = models.TextField(null=True)
    music = models.TextField(null=True)
    describe_word_1 = models.CharField(max_length=45, null=True)
    describe_word_2 = models.CharField(max_length=45, null=True)
    describe_word_3 = models.CharField(max_length=45, null=True)
    perfect_day = models.TextField(null=True)
    gender_preference = models.CharField(
        max_length=100, choices=GENDER_PREF_CHOICES, null=True)
    after_contact_person = models.NullBooleanField()
    after_contact_email = models.NullBooleanField()
    after_contact_skype = models.NullBooleanField()
    after_contact_text = models.NullBooleanField()
    after_contact_facebook = models.NullBooleanField()
    after_contact_messenger = models.NullBooleanField()
    after_contact_phone = models.NullBooleanField()
    after_contact_other = models.CharField(max_length=100, null=True)
    after_social = models.NullBooleanField()
    about_other = models.TextField(null=True)
