import React from 'react';
import './calendar.css'

function Calendar(props) {
    return (
        <div className="calendar">
        <div className="header">
          <button><i className="fas fa-chevron-left"></i></button>
          <h3>March 2023</h3>
          <button><i className="fas fa-chevron-right"></i></button>
        </div>
        <div className="days">
          <div>Su</div>
          <div>Mo</div>
          <div>Tu</div>
          <div>We</div>
          <div>Th</div>
          <div>Fr</div>
          <div>Sa</div>
        </div>
        <div className="dates">
          <div className="text-gray-400">26</div>
          <div className="text-gray-400">27</div>
          <div className="text-gray-400">28</div>
          <div className="text-gray-400">1</div>
          <div className="text-gray-400">2</div>
          <div className="text-gray-400">3</div>
          <div className="text-gray-400">4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
          <div>17</div>
          <div>18</div>
          <div>19</div>
          <div>20</div>
          <div>21</div>
          <div className="bg-blue-100">22</div>
          <div>23</div>
          <div>24</div>
          <div>25</div>
          <div>26</div>
          <div>27</div>
          <div>28</div>
          <div>29</div>
          <div>30</div>
          <div>31</div>
          <div className="text-gray-400">1</div>
        </div>
      </div>
    );
}

export default Calendar;