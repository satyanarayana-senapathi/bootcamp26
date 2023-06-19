SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `book_discovery`
--

-- --------------------------------------------------------

--
-- Table structure for table `author`
--
create database book_discovery;
use book_discovery;
CREATE TABLE `author` (
  `author_id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `author`
--

INSERT INTO `author` (`author_id`, `description`, `image`, `name`) VALUES
(1, '', '/assets/avatar.jpg', 'Soumya'),
(2, '', '/assets/avatar.jpg', 'Veenayak');

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `book_id` int(11) NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `release_date` datetime NOT NULL,
  `title` varchar(255) NOT NULL,
  `total_pages` int(11) NOT NULL,
  `author_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`book_id`, `category`, `description`, `image`, `release_date`, `title`, `total_pages`, `author_id`) VALUES
(1, 'English', 'English', '/assets/searchbooks/book.png', '2000-01-01 05:30:00', 'English', 100, 2),
(2, 'chemistry', 'Chemistry', '/assets/searchbooks/book.png', '2000-01-01 05:30:00', 'Inorganic Chemistry', 200, 2),
(3, 'chemistry', 'Chemistry', '/assets/searchbooks/book.png', '2000-01-01 05:30:00', 'Organic chemistry', 300, 2),
(4, 'maths', 'Maths', '/assets/searchbooks/book.png', '2000-01-01 05:30:00', 'Maths', 800, 2),
(5, 'Biology', 'Biology', '/assets/searchbooks/book-1.png', '2000-01-01 05:30:00', 'Biology', 1200, 1),
(6, 'Physics', 'Physics', '/assets/searchbooks/book-1.png', '2000-01-01 05:30:00', 'Physics', 1500, 1),
(7, 'Social Studies', 'Social Studies', '/assets/searchbooks/book-1.png', '2000-01-01 05:30:00', 'Social Studies', 600, 1),
(8, 'Physical Education', 'Physical Education', '/assets/searchbooks/book-1.png', '2000-01-01 05:30:00', 'Physical Education', 200, 1);

-- --------------------------------------------------------

--
-- Table structure for table `library`
--

CREATE TABLE `library` (
  `library_id` int(11) NOT NULL,
  `page_read` int(11) NOT NULL,
  `rating` double NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `book_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `library`
--

INSERT INTO `library` (`library_id`, `page_read`, `rating`, `status`, `book_id`, `user_id`) VALUES
(1, 100, 4, 'current', 1, 1),
(2, 100, 4, 'current', 2, 1),
(3, 100, 4, 'finished', 3, 1),
(4, 100, 4, 'finished', 4, 1),
(5, 100, 4, 'finished', 5, 2),
(6, 100, 4, 'finished', 6, 2),
(7, 100, 4, 'current', 7, 2),
(8, 100, 4, 'current', 8, 2);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `designation`, `image`, `name`) VALUES
(1, 'teacher', '/assets/avatar.jpg', 'akhil'),
(2, 'student', '/assets/avatar.jpg', 'sunil');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`author_id`);

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`book_id`),
  ADD KEY `FKklnrv3weler2ftkweewlky958` (`author_id`);

--
-- Indexes for table `library`
--
ALTER TABLE `library`
  ADD PRIMARY KEY (`library_id`),
  ADD KEY `FKqckt63gdptlcrhfx5skt1bblj` (`book_id`),
  ADD KEY `FKgx6ohut2yexvjuyeuvwss4dbi` (`user_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `author`
--
ALTER TABLE `author`
  MODIFY `author_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `book_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `library`
--
ALTER TABLE `library`
  MODIFY `library_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
