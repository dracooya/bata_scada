﻿using BataSCADA.DTOs;
using System.ComponentModel.DataAnnotations;

namespace BataSCADA.Models
{
    public class DigitalOutput : Tag
    {
        [Required(ErrorMessage = "InitialValue is a required field!")]
        public bool InitialValue { get; set; }

        public DigitalOutput() {}

    }
}
