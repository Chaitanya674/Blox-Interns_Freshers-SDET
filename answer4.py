def sort_list(list_of_numbers):
  sorted_list = sorted(list_of_numbers)
  return sorted_list


def test_sort_list():
  assert sort_list([1, 2, 3]) == [1, 2, 3]
  assert sort_list([3, 2, 1]) == [1, 2, 3]
  assert sort_list([1, 3, 2]) == [1, 2, 3]
  assert sort_list([2, 1, 3]) == [1, 2, 3]
  assert sort_list([2, 3, 1]) == [1, 2, 3]
  assert sort_list([]) == []
  assert sort_list([-1, 0, 1]) == [-1, 0, 1]
  assert sort_list([1, 1, 1]) == [1, 1, 1]


if __name__ == "__main__":
  test_sort_list()
