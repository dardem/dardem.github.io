---
title: "SkoltechNLP at SemEval-2020 Task 11: Exploring Unsupervised Text Augmentation for Propaganda Detection"
collection: publications
permalink: 
date: 2020-12-13
venue: 'SemEval 2020'
---
This paper presents a solution for the Span Identification (SI) task in the “Detection of Propaganda Techniques in News Articles” competition at SemEval-2020. The goal of the SI task is to identify specific fragments of each article which contain the use of at least one propaganda technique. This is a binary sequence tagging task. We tested several approaches finally selecting a fine-tuned BERT model as our baseline model. Our main contribution is an investigation of several unsupervised data augmentation techniques based on distributional semantics expanding the original small training dataset as applied to this BERT-based sequence tagger. We explore various expansion strategies and show that they can substantially shift the balance between precision and recall, while maintaining comparable levels of the F1 score.
