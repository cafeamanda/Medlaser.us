'use strict';

angular.module('medlaserApp')

  .factory('fileFactory', function() {

    var filefac = {};

    var files=[
      {
        filename: 'K133006.pdf',
        title: 'Regulation',
        authors: 'Department of Health & Human Services',
        date: 'April 17, 2014'
      },
      {
        filename:'K152722.pdf',
        title:'Regulation',
        authors:'Department of Health & Human Services',
        date:'December 8, 2015',
      },
      {
        filename:'neoLaser-ISO13485-Certificate-2013-English.pdf',
        title:'Certificate of Quality',
        authors:'IQC - Institute of Quality & Control',
        date:'May 21, 2013',
      },
      {
        filename:'PDD-vs-Conservative-Treatment.pdf',
        title:'Comparative Prospective Randomized Study Comparing Conservative Treatment and Percutaneous Disk Decompression for Treatment of Intervertebral Disk Herniation',
        authors:'Dimitrios Erginousakis, MD | Dimitrios K. Filippiadis, MD | Aikaterini Malagari | Athanasios Kostakos, MD | Elias Brountzos | Nikolaos L. Kelekis | Alexis Kelekis',
        date:'Aug, 2011',
      },
      {
        filename:'PLDD-Course-2015-Cagliari.pdf',
        title:'Treatment of Herniated Lumbar Disk with PLDD Procedure',
        authors:'M. Costaglioli. | P. Sannais',
        date:'N/A'
      },
      {
        filename:'PLDD-Publication-1.pdf',
        title:'Comparison of Results of 500 Microdiscectomies and 500 Percutaneous Laser Disc Decompression Procedures for Lumbar Disc Herniation',
        authors:'Gian Paolo Tassi, M.D.',
        date:'2006'
      },
      {
        filename:'PLDD-Publication-2.pdf',
        title:'Percutaneous Treatment of Intervertebral Disc Herniation',
        authors:'Xavier Buy, M.D. | Afshin Gangi, M.D., Ph.D.',
        date:'N/A'
      },
      {
        filename:'PLDD-Publication-3.pdf',
        title:'Percutaneous Laser Disk Decompression: A Review of the Literature',
        authors:'B. Schenk | P.A. Brouwer | W.C. Peul | M.A. van Buchem',
        date:'Jan, 2006'
      },
      {
        filename:'PLDD-Publication-4.pdf',
        title:'Percutaneous Laser Disk Decompression for the Treatment of Lumbar Disc Herniation: A Review',
        authors:'Philippe Goupille, MD | Denis Mulleman, MD | Saloua Mammou, MD | Isabelle Griffoul, MD | Jean-Pierre Valat, MD',
        date:'2007'
      },
      {
        filename:'PLDD-Vs-Surgery-RCT-design.pdf',
        title:'Percutaneous Laser Disc Decompression versus Conventional Microdiscectomy in Sciatica: A Randomized Controlled Trial',
        authors:'Patrick A. Brouwer, MD, MSc | Ronald Brand, PhD | M. Elske van den Akker-van Marle, PhD | Wilco C.H. Jacobs, PhD | Barry Schenk, MD | Annette A. van den Berg-Huijsmans, MSc | Bart W. Koes, PhD | M.A. van Buchem, MD, PhD | Mark P. Arts, MD, PhD | Wilco C. Peul, MD, PhD',
        date:'2015'
      },
      {
        filename:'PLDD-Vs-Surgery-RCT.pdf',
        title:'Effectiveness of Percutaneous Laser Disc Decompression versus Conventional Open Discectomy in the Treatment of Lumbar Disc Herniation; Design of a Prospective Randomized Controlled Trial',
        authors:'Patrick A. Brouwer | Wilco C. Peul | Ronald Brand | Mark P. Arts | Bart W. Koes | Annette A. van den Berg | Mark A. van Buchem',
        date:'Mar 31, 2009'
      },
      {
        filename:'Surgical-technique-PLDD-Cagliari-2015.pdf',
        title:'PLDD: Surgery Technique',
        authors:'P. Sannais | M. Costaglioli',
        date:'N/A'
      }
    ]

    filefac.getFiles = function() {
      return files;
    };
    filefac.getFile = function() {
      return files[index];
    };
    return filefac;

  });
